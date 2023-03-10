import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { db } from "@/utils/Firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import Masonry from "react-masonry-css";
import SkeletonLoading from "@/components/Skeleton-Loading";

import { HiDownload } from "react-icons/hi";

const CommunityShowcase = () => {
  const [users, setUsers] = useState([]);
  const colRef = collection(db, "images");

  useEffect(() => {
    const q = query(colRef, orderBy("name"));
    onSnapshot(q, (snapshot) => {
      setUsers(snapshot.docs.map((data) => ({ ...data.data() })));
    });
  }, []);

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    768: 2,
    576: 1,
  };

  return (
    <div className="w-full max-w-[1536px] mx-auto p-4">
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

      <h1
        id="text-header"
        className="font-bold text-3xl md:text-4xl my-16 py-2"
      >
        Community Showcase
      </h1>
      {users.length != 0 ? (
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {users.map((user) => (
            <div
              data-aos="fade-up"
              key={user.id}
              className="group relative rounded-xl overflow-hidden shadow-2xl"
            >
              <Image
                className="w-full"
                width={300}
                height={170}
                src={user.image}
                alt=""
              />
              <div className="w-full h-full md:absolute top-0 left-0 bg-white md:bg-transparent md:bg-gradient-to-b from-transparent to-[#212121] md:text-white flex flex-col justify-end p-4 md:translate-y-8 md:opacity-0 hover:opacity-100 hover:translate-y-0 duration-150">
                <h1>{user.name}</h1>
                <a
                  href={`https://twitter.com/${user.username}`}
                  target={"_blank"}
                  rel="noreferrer"
                  className="text-xs opacity-50"
                >
                  @{user.username}
                </a>
                <p className="text-xs opacity-60 mt-1">{user.description}</p>
              </div>
              <a
                href={user.image}
                target={"_blank"}
                rel="noreferrer"
                className="absolute right-4 top-4 bg-black text-white p-1 rounded-md md:opacity-0 group-hover:opacity-100 duration-150"
              >
                <HiDownload />
              </a>
            </div>
          ))}
        </Masonry>
      ) : (
        <SkeletonLoading />
      )}
    </div>
  );
};

export default CommunityShowcase;
