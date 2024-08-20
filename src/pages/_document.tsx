/* eslint-disable react/no-unescaped-entities */
import { getCssText } from '@/styles/stitches.config'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
        <script>
  window.pixelId = "6699829a9b480652bf85e39a";
  var a = document.createElement("script");
  a.setAttribute("async", "");
  a.setAttribute("defer", "");
  a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
  document.head.appendChild(a);
</script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
