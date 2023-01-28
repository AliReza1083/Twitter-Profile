import React, { useEffect } from "react";
import Image from "next/image";
import CountUp from "react-countup";
import { useSelector } from "react-redux";

const Profile = ({ image, user }) => {
  const highQualityImage = user.profile_image_url.replace("_normal", "");

  const backgroundSelector = useSelector(
    (state) => state.background.background
  );
  const rotateSelector = useSelector((state) => state.background.rotate);

  const {
    name,
    public_metrics,
    url,
    username,
    verified,
    id,
    created_at,
    description,
  } = user;

  const { followers_count, following_count, listed_count, tweet_count } =
    public_metrics;

  const formattingNumber = (value) => {
    const formatter = Intl.NumberFormat("en", { notation: "compact" });
    let n = formatter.format(value);
    return value;
  };

  return (
    <div
      id="container"
      className={`w-full max-w-[700px] p-8 rounded-xl shadow-2xl`}
      style={{
        background: `linear-gradient(${rotateSelector}deg, ${backgroundSelector.from}, ${backgroundSelector.to})`,
      }}
    >
      <div className="w-full sm:w-3/4 md:w-1/2 mx-auto bg-black text-white bg-opacity-75 p-8 rounded-xl flex flex-col items-center shadow-xl">
        <Image
          src={highQualityImage}
          width={100}
          height={100}
          alt={username}
          className="rounded-full"
        />
        <h1 className="text-3xl font-bold mt-2">{name}</h1>
        <h2 className="opacity-60 text-sm">{username}</h2>
        <p className="text-sm opacity-80 mt-4">{description}</p>
        <div className="grid grid-cols-3 w-full text-center mt-4">
          <div>
            <small className="opacity-70">Following</small> <br />
            <CountUp end={formattingNumber(following_count)} duration={2} />
          </div>
          <div>
            <small className="opacity-70">Followers</small> <br />
            <CountUp end={formattingNumber(followers_count)} duration={2} />
          </div>
          <div>
            <small className="opacity-70">Tweets</small> <br />
            <CountUp end={formattingNumber(tweet_count)} duration={2} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
