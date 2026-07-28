export async function onRequest(context) {
  const { env } = context;
  const DB = env.DB;
  // 替换成你的真实域名
  const SITE = "https://999vip.eu.org";

  let articles = { results: [] };
  try {
    // 容错查询，就算表不存在也不会直接崩1101
    articles = await DB.prepare(`SELECT slug, create_time FROM articles ORDER BY create_time DESC`).all();
  } catch (err) {
    console.log("数据库读取异常：", err);
  }

  const now = new Date().toISOString();
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
<url>
  <loc>${SITE}/</loc>
  <lastmod>${now}</lastmod>
  <changefreq>daily</changefreq>
  <priority>1.0</priority>
</url>
<url>
  <loc>${SITE}/articles</loc>
  <lastmod>${now}</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.8</priority>
</url>
<url>
  <loc>${SITE}/privacy</loc>
  <lastmod>${now}</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.4</priority>
</url>
<url>
  <loc>${SITE}/disclaimer</loc>
  <lastmod>${now}</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.4</priority>
</url>`;

  // 循环文章列表
  if (articles && articles.results && articles.results.length > 0) {
    articles.results.forEach(item => {
      const time = new Date(item.create_time).toISOString();
      xml += `
<url>
  <loc>${SITE}/article/${item.slug}</loc>
  <lastmod>${time}</lastmod>
  <changefreq>weekly</changefreq>
  <priority>0.7</priority>
</url>`;
    });
  }

  xml += `
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=300"
    }
  });
}
