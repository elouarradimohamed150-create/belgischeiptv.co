export default function Prose({ html }: { html: string }) {
  // The page already renders the document title as the single <h1>; demote any
  // <h1> inside the imported article body to <h2> so each page has exactly one H1.
  const safe = html.replace(/<(\/?)h1(\b[^>]*)>/gi, "<$1h2$2>");
  return <div className="prose-iptv max-w-none" dangerouslySetInnerHTML={{ __html: safe }} />;
}
