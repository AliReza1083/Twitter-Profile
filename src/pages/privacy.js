import React from "react";
import Link from "next/link";

const privacy = () => {
  return (
    <div>
      <nav className="w-full bg-white border-b-2 fixed top-0 left-0 z-50">
        <div className="w-full max-w-[1536px] h-16 flex justify-between items-center mx-auto px-4 md:px-24 lg:px-40">
          <Link href={"/"} className="font-bold text-xl">
            IMAGE-PROFILE
          </Link>
          <Link
            href={"/community-showcase"}
            className="text-sm opacity-70 hover:opacity-100"
          >
            Community Showcase
          </Link>
        </div>
      </nav>

      <section className="mt-24 px-4 md:px-24 lg:px-40 space-y-8">
        <h1 className="text-3xl md:text-5xl font-bold">Privacy</h1>
        <p className="opacity-90">
          You can send any Twitter profile to the{" "}
          <span className="font-bold">Community Showcase</span> for now, I want
          you to just send your own image to the{" "}
          <span className="font-bold">Community Showcase</span> page.
        </p>
      </section>
    </div>
  );
};

export default privacy;
