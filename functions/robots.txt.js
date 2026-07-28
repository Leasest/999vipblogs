export async function onRequest() {
  const site = "https://999vip.eu.org";
  const content = `User-agent: *
Allow: /
Sitemap: ${site}/sitemap.xml
`;
  return new Response(content, {
    headers: { "Content-Type": "text/plain; charset=utf-8" }
  });
}
