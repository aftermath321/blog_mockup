import Head from "next/head";

import Footer from "@/components/footer";
import Header from "@/components/header";
import MainGrid from "@/components/mainGrid";



export default function Home() {
  return (
    <>
      <Head>
        <title>Blog Mock Up</title>
        <meta
          name="Simple Blog Mock up by Michal Kielbasa"
          content="Blog mock up"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <MainGrid />
      <Footer />
    </>
  );
}
