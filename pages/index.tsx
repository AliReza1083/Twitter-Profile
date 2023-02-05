import Head from "next/head";
import Masonry from "react-masonry-css";

import CommunityIMG from "../assets/community showcase.png";

import Hero from "@/components/Home/Hero";
import Container from "@/components/ContainerWidth";
import Search from "@/components/Home/Information/Search";
import BackgroundColors from "@/components/Home/Information/BackgroundColor";
import BackgroundRotation from "@/components/Home/Information/BackgroundRotation";
import Upload from "@/components/Home/Information/Upload";
import CommunityShowcase from "@/components/Home/Information/CommunityShowcase";
import Button from "@/components/Home/Button";

const breakpointColumnsObj = {
  default: 2,
  768: 1,
};

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

        <Container className="py-36 space-y-24">
          <h1 className="uppercase text-3xl font-bold text-center">
            How this website can be used
          </h1>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            <Search />
            <BackgroundColors />
            <BackgroundRotation />
            <Upload />
            <CommunityShowcase />
          </Masonry>
          <h1 className="text-6xl md:text-8xl font-black text-center">
            and...
          </h1>
        </Container>
        <div
          id="banner"
          className="relative isolate flex flex-col items-center py-24"
        >
          <h1 className="text-5xl font-bold text-white">
            What are you waiting for?
          </h1>
          <Button />
        </div>
      </main>
    </>
  );
}
