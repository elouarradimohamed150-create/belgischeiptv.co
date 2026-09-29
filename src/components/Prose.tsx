export default function Prose({ html }: { html: string }) {
  return <div className="prose-iptv max-w-none" dangerouslySetInnerHTML={{ __html: html }} />;
}
