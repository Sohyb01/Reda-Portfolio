import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const meta = {
    title: "Personal Website",
    description: "COO Of Programmer's Elite School.",
    image:
      "https://scontent.fcai21-3.fna.fbcdn.net/v/t39.30808-6/385897671_2371200256422648_3552109804124141546_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=-b0RL_xFEIAAX_6RBtP&_nc_ht=scontent.fcai21-3.fna&oh=00_AfAzoiZ4O5u4fvY40KsxVzVc3HNi8tZBkzqZDRcnHF3Qkw&oe=6564406E",
  };

  return (
    <Html lang="en">
      <Head>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={meta.description} />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@yourname" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
