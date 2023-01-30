import React, { useEffect, useState } from "react";
import { db } from "@/utils/Firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import Masonry from "react-masonry-css";

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
    <div className="w-full max-w-[1536px] mx-auto">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {users.map((user) => (
          <div
            key={user.id}
            className="relative rounded-xl overflow-hidden shadow-2xl"
          >
            <img className="w-full" src={user.image} alt="" />
            <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-b from-transparent to-[#212121] text-white flex flex-col justify-end p-4 md:translate-y-8 md:opacity-0 hover:opacity-100 hover:translate-y-0 duration-150">
              <h1>{user.name}</h1>
              <p className="text-xs opacity-50">{user.username}</p>
              <p className="text-xs opacity-60 mt-1">{user.description}</p>
            </div>
          </div>
        ))}
      </Masonry>
    </div>
  );
};

export default CommunityShowcase;
