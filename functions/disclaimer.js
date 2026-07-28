export async function onRequest() {
  const html = `
<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<title>免责声明</title>
<meta name="description" content="本站免责声明，明确内容使用风险、第三方外链、版权相关责任划分">
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
<h1>免责声明</h1>
<h2>1. 内容仅供学习参考</h2>
<p>本站所有文章、教程、资源仅作个人技术交流分享，不构成理财、法律、医疗等专业建议，用户依据站内内容操作产生一切损失，本站不承担任何法律责任。</p>

<h2>2. 第三方外链免责</h2>
<p>文章内置外部链接、R2视频、第三方工具跳转页面，内容归属对应第三方平台，本站不对外部站点的真实性、安全性、合规性做担保。</p>

<h2>3. 源码/工具使用限制</h2>
<p>站内分享的程序、源码仅允许个人学习，禁止用于侵权、违规、商用牟利，违规使用带来的处罚、纠纷全部由使用者自行承担。</p>

<h2>4. 内容时效性</h2>
<p>互联网规则、技术持续更新，站内文章内容可能存在滞后、疏漏，重要信息请多方交叉验证后再使用。</p>

<h2>5. 网站服务担保</h2>
<p>本站不承诺网站永久稳定可访问，因服务商维护、故障、网络问题导致网站临时无法访问，不承担任何赔偿责任。</p>

<h2>6. 版权侵权处理</h2>
<p>若页面文字、图片、视频存在版权侵权，请留言联系站长，核实后24小时内下架相关侵权内容。</p>
</body>
</html>
`
  return new Response(html, {
    headers: { "Content-Type": "text/html; charset=utf-8" }
  })
}
