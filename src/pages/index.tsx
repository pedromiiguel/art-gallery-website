import Head from 'next/head';
import { HomeTemplate } from 'templates/Home';

export default function Home() {
  return (
    <>
      <Head>
        <title>Art Gallery Site</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeTemplate />
    </>
  );
}
