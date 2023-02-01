import Head from "next/head";

import SearchIMG from "../assets/search.png";
import Upload from "@/assets/Upload";
import CommunityIMG from "../assets/community showcase.png";

import Hero from "@/components/Home/Hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>Image Profile | Twitter</title>
        <meta
          name="description"
          content="CREATE AN IMAGE OF YOUR TWITTER PROFILE"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
      </main>
    </>
  );
}
