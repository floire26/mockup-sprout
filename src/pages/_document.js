import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
        <link rel="shortcut icon" href="./favicon.ico" />
        <title>Pokédex</title>
      <Head />
      <body className='bg-black'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
