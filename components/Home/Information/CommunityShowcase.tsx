import Image from "next/image";

import Frame from "./Frame";

import { FaUsers } from "react-icons/fa";

import CommunityIMG from "@/assets/community showcase.png";

export default function CommunityShowcase() {
  return (
    <Frame>
      <div className="overflow-hidden">
        <div className="flex gap-2 items-center">
          <span className="text-xl bg-white text-black p-2 rounded-lg">
            <FaUsers />
          </span>
          <h2 className="text-lg font-semibold">Community Showcase</h2>
        </div>
        <p className="mt-3">
          You can send your image to the “Community Showcase”, so that everyone
          can see it.
        </p>

        <div className="blur-sm translate-y-14">
          <Image
            src={CommunityIMG}
            width={400}
            height={290}
            alt="Search Image"
            className="w-full rounded-lg"
          />
        </div>
      </div>
    </Frame>
  );
}
