export async function onRequest(context) {
  const { env } = context;
  const db = env.DB;

  // 1. 查询所有文章
  const articles = await db.prepare(`
    SELECT id, slug, create_time FROM articles ORDER BY create_time DESC
  `).all();

  // 2. 你的博客域名，改成自己的
  const siteDomain = "https://999vip.eu.org";
  const now = new Date().toISOString();

  // 组装xml文本
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- 首页 -->
  <url>
    <loc>${siteDomain}/</loc>
    <lastmod>${now}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <!-- 文章列表页 -->
  <url>
    <loc>${siteDomain}/articles</loc>
    <lastmod>${now}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>`;

  // 循环输出所有文章页面
  for (const item of articles.results) {
    const date = new Date(item.create_time).toISOString();
    xml += `
  <url>
    <loc>${siteDomain}/article/${item.slug}</loc>
    <lastmod>${date}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`;
  }

  xml += `
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600" // 缓存1小时，减轻D1查询
    }
  });
}
