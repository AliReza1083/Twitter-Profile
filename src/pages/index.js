import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import CircularSlider from "@fseehawer/react-circular-slider";

import HeaderIMG from "../assets/Header img.png";
import SearchIMG from "../assets/search.png";
import Upload from "@/assets/Upload";
import CommunityIMG from "../assets/community showcase.png";
import { useSelector } from "react-redux";

const GRADIENTS = [
  {
    from: "#0965C0",
    to: "#C53A94",
  },
  {
    from: "#3D10BD",
    to: "#62BDFF",
  },
  {
    from: "#BDC3C7",
    to: "#2C3E50",
  },
  {
    from: "#FDC830",
    to: "#F37335",
  },
  {
    from: "#61C695",
    to: "#133114",
  },
  {
    from: "#FFEB3A",
    to: "#4DEF8E",
  },
];

const Home = () => {
  const [gradient, setGradient] = useState({
    from: "#0965C0",
    to: "#C53A94",
  });
  const [rotate, setRotate] = useState(0);
  const [loading, setLoading] = useState(false);

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

      <section className="w-full max-w-[1536px] px-4 md:px-24 lg:px-40 mx-auto py-24 space-y-24">
        <h1 className="uppercase text-3xl font-bold text-center">
          How this website can be used
        </h1>

        <div
          className="grid md:grid-cols-2 gap-4 md:text-xl"
          data-aos="zoom-in"
          data-aos-duration="500"
        >
          <div>
            <h2 className="text-2xl font-bold mb-2">
              Search your Twitter profile
            </h2>
            <p>
              You can write your Twitter handle and get information about your
              Twitter profile, which includes:
            </p>
            <ul className="list-disc pl-8 mt-2 text-sm md:text-base">
              <li>Name</li>
              <li>Username</li>
              <li>Description</li>
              <li>Public Metrics</li>
            </ul>
          </div>
          <Image
            src={SearchIMG}
            width={482}
            height={323}
            className="block mx-auto"
            alt=""
          />
        </div>

        <div
          data-aos="zoom-in"
          data-aos-duration="500"
          className="grid md:grid-cols-2 gap-4 md:text-xl"
        >
          <div>
            <h2 className="text-2xl font-bold mb-2">Change background theme</h2>
            <p>
              There are background themes which you can use them to make your
              image profile to look beautiful.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 px-[10%] md:px-0">
            {GRADIENTS.map((gradient, index) => (
              <div
                key={index}
                className="h-28 rounded-lg active:scale-90 duration-100"
                style={{
                  background: `linear-gradient(${rotate}deg, ${gradient.from}, ${gradient.to})`,
                }}
                onClick={() => setGradient(gradient)}
              ></div>
            ))}
          </div>
        </div>

        <div
          data-aos="zoom-in"
          data-aos-duration="500"
          className="grid md:grid-cols-2 gap-4 md:text-xl"
        >
          <div>
            <h2 className="text-2xl font-bold mb-2">
              Change background rotation
            </h2>
            <p>You can change the rotation of the background gradient.</p>
          </div>
          <div
            className="w-full h-56 flex justify-center items-center rounded-xl"
            style={{
              background: `linear-gradient(${rotate}deg, ${gradient.from}, ${gradient.to})`,
            }}
          >
            <CircularSlider
              width={80}
              valueFontSize="20px"
              labelFontSize="9px"
              verticalOffset="0em"
              onChange={(value) => setRotate(value)}
            />
          </div>
        </div>

        <div
          data-aos="zoom-in"
          data-aos-duration="500"
          className="grid md:grid-cols-2 gap-4 md:text-xl"
        >
          <div>
            <h2 className="text-2xl font-bold mb-2">Upload your image</h2>
            <p>
              When you are done with your design, you have several options which
              you can upload it.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <Upload />
          </div>
        </div>

        <div
          data-aos="zoom-in"
          data-aos-duration="500"
          className="grid md:grid-cols-2 gap-4 md:text-xl"
        >
          <div>
            <h2 className="text-2xl font-bold mb-2">Community Showcase</h2>
            <p>
              You can send your image to the &quot;Community Showcase&ldquo;, so
              that everyone can see it.
            </p>
          </div>
          <Image
            src={CommunityIMG}
            width={482}
            height={323}
            className="block mx-auto"
            alt=""
          />
        </div>

        <h1 className="text-4xl font-bold text-center">and...</h1>
      </section>
    </div>
  );
};

export default Home;
