import Link from "next/link";
import Image from "next/image";
import React from "react";

import HeaderIMG from "../assets/Header img.png";

const Home = () => {
  return (
    <div className="flex flex-col">
      <nav className="w-full bg-white border-b-2 fixed top-0 left-0 z-50">
        <div className="w-full max-w-[1536px] h-16 flex justify-between items-center mx-auto px-4 md:px-24 lg:px-40">
          <h1 className="font-bold text-xl">IMAGE-PROFILE</h1>
          <Link
            href={"/community-showcase"}
            className="text-sm opacity-70 hover:opacity-100"
          >
            Community Showcase
          </Link>
        </div>
      </nav>

      <header className="relative w-full max-w-[1536px] px-4 md:px-24 lg:px-40 h-screen 2xl:h-auto py-28 2xl:py-56 flex sm:items-center mx-auto overflow-hidden">
        <div>
          <h1 className="uppercase text-3xl font-bold">
            create an image of your <br className="hidden md:block" /> Twitter
            Profile
          </h1>
          <p className="px-4 py-1 bg-[#ECECEC] rounded-full text-xs sm:text-sm mt-2">
            Right now there are <span className="text-blue-800">10</span> image
            in the{" "}
            <Link href={"/community-showcase"} className="text-blue-800">
              Community Showcase
            </Link>
          </p>
          <Link
            href={"/creating"}
            className="bg-black py-2 px-8 rounded-lg text-white inline-block mt-8"
          >
            Create Now
          </Link>
        </div>
        <div className="absolute right-0 bottom-0 -z-40 w-[650px] lg:w-[700px] xl:w-[900px]">
          <Image src={HeaderIMG} alt="" />
          <div className="w-full h-full bg-gradient-to-tl md:bg-gradient-to-l from-transparent to-white absolute top-0 left-0"></div>
        </div>
      </header>
    </div>
  );
};

export default Home;
