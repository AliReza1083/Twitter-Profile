import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import HeaderIMG from "../assets/Header img.png";
import SearchIMG from "../assets/search.png";
import Upload from "@/assets/Upload";
import CommunityIMG from "../assets/community showcase.png";

export default function Home() {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <header className="relative w-full max-w-[1536px] px-4 md:px-24 lg:px-40 h-screen 2xl:h-auto py-28 2xl:py-56 flex sm:items-center mx-auto overflow-hidden">
          <div>
            <h1 className="uppercase text-3xl font-bold">
              create an image of your <br className="hidden md:block" /> Twitter
              Profile
            </h1>
            <p className="px-4 py-1 bg-[#ECECEC] rounded-full text-xs sm:text-sm mt-2">
              Right now there are <span className="text-blue-800">10</span>{" "}
              image in the{" "}
              <Link href={"/community-showcase"} className="text-blue-800">
                Community Showcase
              </Link>
            </p>
            <Link
              href={"/creating"}
              className={`bg-black py-2 px-8 rounded-lg text-white inline-block mt-8 ${
                loading && "animate-pulse"
              }`}
              onClick={() => setLoading(true)}
            >
              {loading ? "Taking you there..." : "Create Now"}
            </Link>
          </div>
          <div className="absolute right-0 bottom-24 md:bottom-0 -z-40 w-[650px] lg:w-[700px] xl:w-[900px]">
            <Image src={HeaderIMG} alt="" />
            <div className="w-full h-full bg-gradient-to-t md:bg-gradient-to-l from-transparent to-white absolute top-0 left-0"></div>
          </div>
        </header>
      </main>
    </>
  );
}
