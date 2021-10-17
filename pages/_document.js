import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <html lang="en" xmlLang="en" xmlns="http://www.w3.org/1999/xhtml">
            <title>YouTube video & shorts Downloader</title>
            {/* add twitter card images and meta images */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@PrataManitej" />
            <meta name="twitter:creator" content="@PrataManitej" />
            <meta
              name="twitter:title"
              content="YouTube video & shorts Downloader"
            />
            <meta
              name="twitter:description"
              content="Download YouTube videos and shorts"
            />
            <meta
              name="twitter:image"
              content="https://og-image.vercel.app/**YouTube%20video%20%26%20shorts%20downloader**.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fhyper-color-logo.svg"
            />
            <meta
              property="og:title"
              content="YouTube video & shorts Downloader"
            />
            <meta property="og:description" content="Download YouTube videos" />
            <meta
              property="og:image"
              content="https://og-image.vercel.app/**YouTube%20video%20%26%20shorts%20downloader**.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fhyper-color-logo.svg"
            />
            <meta property="og:url" content="https://PrataManitej.com" />
            <meta
              property="og:site_name"
              content="YouTube video & shorts Downloader"
            />
            <meta property="og:type" content="website" />
            <meta
              name="description"
              content="Download YouTube videos and shorts"
            />
            <meta charSet="UTF-8" />
            <meta name="google" content="notranslate" />
            <meta httpEquiv="Content-Language" content="en"></meta>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
            />
          </html>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Be+Vietnam&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
