export async function onRequest() {
  const html = `
<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<title>隐私政策</title>
<meta name="description" content="本站隐私政策，说明用户数据、Cookie、第三方服务相关规则">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
body{max-width:900px;margin:0 auto;padding:20px 16px;font-family:system-ui}
h1{border-bottom:1px solid #eee;padding-bottom:10px}
h2{margin-top:30px;font-size:18px}
p{line-height:1.8;color:#333}
.back{display:inline-block;margin:20px 0;color:#0070f3}
</style>
</head>
<body>
<a class="back" href="/">← 返回首页</a>
<h1>隐私政策</h1>
<h2>1. 信息收集</h2>
<p>本站仅收集您主动提交的评论内容，不会主动收集手机号、身份证等敏感隐私信息。网站访问时仅记录基础访问日志（IP、浏览器、访问时间），仅用于网站安全与访问统计，绝不出售、出租、泄露用户数据给任何第三方。</p>

<h2>2. Cookie 使用</h2>
<p>本站使用 Cookie 保存浏览状态、评论记录，您可随时在浏览器设置禁用/清除 Cookie，禁用后不影响文章正常阅读。</p>

<h2>3. 第三方服务</h2>
<p>网站依托 Cloudflare CDN、R2 对象存储、D1 数据库运行，用户访问数据遵循 Cloudflare 隐私协议；文章中包含的外链、第三方视频、图片跳转至外部站点后，隐私规则由对方平台承担，与本站无关。</p>

<h2>4. 信息删除</h2>
<p>如需删除您发布的评论、清除相关访问记录，可通过网站留言联系站长处理。</p>

<h2>5. 数据安全</h2>
<p>用户数据存储于 Cloudflare 合规服务器，采取权限限制防护，但无法承诺绝对零泄露风险。</p>

<h2>6. 政策更新</h2>
<p>本站可随时更新本隐私政策，更新后发布于本页面，持续访问网站即代表同意最新条款。</p>
</body>
</html>
`
  return new Response(html, {
    headers: { "Content-Type": "text/html; charset=utf-8" }
  })
}
