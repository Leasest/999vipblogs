export async function onRequest() {
  const domain = "https://999vip.eu.org";
  const txt = `User-agent: *
Allow: /
Sitemap: ${domain}/sitemap.xml
`;
  return new Response(txt, {
    headers: { "Content-Type": "text/plain; charset=utf-8" }
  })
}
