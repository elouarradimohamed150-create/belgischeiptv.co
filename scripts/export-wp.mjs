import { writeFile, mkdir } from 'node:fs/promises';
import { createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';
import path from 'node:path';

const BASE = 'https://belgischeiptv.be';
const OUT = process.cwd();
const UA = { 'User-Agent': 'Mozilla/5.0 (migration-export)' };
const imgMap = new Map();

async function getAll(type) {
  const items = [];
  let page = 1;
  while (true) {
    const url = `${BASE}/wp-json/wp/v2/${type}?per_page=100&page=${page}&_embed=1`;
    const res = await fetch(url, { headers: UA });
    if (!res.ok) break;
    const batch = await res.json();
    if (!Array.isArray(batch) || batch.length === 0) break;
    items.push(...batch);
    const total = Number(res.headers.get('x-wp-totalpages') || 1);
    if (page >= total) break;
    page++;
  }
  return items;
}

function queueImage(u) {
  if (!u) return u;
  try {
    const url = new URL(u, BASE);
    if (!/belgischeiptv\.be$/.test(url.hostname)) return u;
    if (!/\/wp-content\/uploads\//.test(url.pathname)) return u;
    const local = '/images' + url.pathname.replace('/wp-content/uploads', '');
    imgMap.set(url.origin + url.pathname, local);
    return local;
  } catch { return u; }
}

function rewriteHtml(html) {
  if (!html) return html;
  // download + localize uploads images referenced in src/srcset
  html = html.replace(/https?:\/\/belgischeiptv\.be\/wp-content\/uploads\/[^\s"')]+/g, (m) => queueImage(m) || m);
  // strip Elementor/editor data attributes
  html = html.replace(/\sdata-(path-to-node|index-in-node|start|end)="[^"]*"/g, '');
  // rewrite internal links (both live domain and the staging hostingersite domain) to relative
  html = html.replace(/https?:\/\/(?:belgischeiptv\.be|sienna-baboon-488251\.hostingersite\.com)/g, '');
  return html;
}

function pick(o) {
  const fm = o._embedded?.['wp:featuredmedia']?.[0];
  const feat = fm?.source_url ? queueImage(fm.source_url) : null;
  const yoast = o.yoast_head_json || {};
  return {
    id: o.id,
    slug: o.slug,
    title: o.title?.rendered ?? '',
    date: o.date,
    modified: o.modified,
    excerpt: rewriteHtml(o.excerpt?.rendered ?? ''),
    content: rewriteHtml(o.content?.rendered ?? ''),
    featuredImage: feat,
    seo: {
      title: yoast.title || o.title?.rendered || '',
      description: yoast.og_description || yoast.description || '',
      canonical: (yoast.canonical || '').replace(BASE, ''),
      ogImage: yoast.og_image?.[0]?.url ? queueImage(yoast.og_image[0].url) : feat,
    },
    author: o._embedded?.author?.[0]?.name ?? 'Belgische IPTV',
    readingTime: yoast.twitter_misc?.['Est. reading time'] ?? null,
  };
}

async function downloadImages() {
  let ok = 0, fail = 0;
  for (const [remote, local] of imgMap) {
    const dest = path.join(OUT, 'public', local);
    await mkdir(path.dirname(dest), { recursive: true });
    try {
      const res = await fetch(remote, { headers: UA });
      if (!res.ok) throw new Error(res.status);
      await pipeline(res.body, createWriteStream(dest));
      ok++;
    } catch (e) { fail++; console.warn('img fail', remote, String(e)); }
  }
  console.log(`images: ${ok} ok, ${fail} failed`);
}

const posts = (await getAll('posts')).map(pick).sort((a,b)=>b.date.localeCompare(a.date));
const pages = (await getAll('pages')).map(pick);
await writeFile(path.join(OUT,'content','posts.json'), JSON.stringify(posts, null, 2));
await writeFile(path.join(OUT,'content','pages.json'), JSON.stringify(pages, null, 2));
console.log(`posts: ${posts.length}, pages: ${pages.length}, images queued: ${imgMap.size}`);
await downloadImages();
