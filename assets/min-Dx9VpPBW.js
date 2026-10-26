<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/png" sizes="32x32" href="./favicon-32.png" />
    
    <!-- iOS 主屏幕使用独立小图，避免等待原始大图下载。 -->
    <link rel="apple-touch-icon" sizes="180x180" href="./icon-180.png" />
    <link rel="manifest" href="./manifest.webmanifest" />
    <!-- 分享图片仅作为预览候选，最终由 Safari 等客户端决定；同源路径适配不同部署域名。 -->
    <meta property="og:title" content="开盖Phone" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="./icon-512.png" />
    <meta property="og:image:type" content="image/png" />
    <meta property="og:image:width" content="512" />
    <meta property="og:image:height" content="512" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-title" content="开盖Phone" />
    <meta name="mobile-web-app-capable" content="yes" />
    <meta name="theme-color" content="#fff" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    <meta name="format-detection" content="telephone=no,email=no" />
    <title>开盖Phone</title>
    <!-- 教程宋体字：Noto Serif SC（Google Fonts，免费免授权） -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;600;700&display=swap" rel="stylesheet" />
    <!-- vConsole 已禁用：手机端日志查看工具，如需启用请取消注释下方代码 -->
    <script type="module" crossorigin src="./assets/index-BsGTho4G.js"></script>
    <link rel="stylesheet" crossorigin href="./assets/index-ChLjAKfE.css">
  </head>
  <body style="min-height: 100vh; background: linear-gradient(180deg, #fffbfc 0%, #ffeaf0 40%, #ffc8d5 100%); margin: 0; padding: 0;">
    <style>
      /* 初次加载与真正重新加载保留粉色渐变；主应用接管后仅切换原生兜底为白色。 */
      html.app-mounted,
      html.app-mounted body {
        background: #ffffff !important;
      }
    </style>
    <!-- Vue 尚未接管或主模块完全失败时，仅保留静态渐变，避免白屏与额外启动 UI。 -->
    <div id="app"></div>
  <!-- Cloudflare Pages Analytics --><script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "b6872990ea7a49b8a9e91f2788aaca4c"}'></script><!-- Cloudflare Pages Analytics --></body>
</html>
