import React from "react";
import Frame from "./Frame";

import { AiOutlineSearch } from "react-icons/ai";

import SearchIMG from "../../../assets/search.png";
import Image from "next/image";

export default function Search() {
  return (
    <Frame>
      <div className="">
        <div className="flex gap-2 items-center">
          <span className="text-xl bg-white text-black p-2 rounded-lg">
            <AiOutlineSearch />
          </span>
          <h2 className="text-lg font-semibold">Search your Twitter profile</h2>
        </div>
        <p className="mt-3">
          You can write your Twitter handle and get information about your
          Twitter profile, which includes:
        </p>
        <ul className="list-disc pl-8 mt-2 text-xs md:text-sm">
          <li>Name</li>
          <li>Username</li>
          <li>Description</li>
          <li>Public Metrics</li>
        </ul>

        <Image
          src={SearchIMG}
          width={400}
          height={290}
          alt="Search Image"
          className="w-full rounded-lg mb-8 mt-4"
        />
      </div>
    </Frame>
  );
}
