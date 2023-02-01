import React, { useEffect } from "react";
import CountUp from "react-countup";
import { useSelector } from "react-redux";
import {
  downloadLoadingSelector,
  numberFormatSelector,
} from "@/store/Background/Background.selector";

const Profile = ({ user }) => {
  const highQualityImage = user.profile_image_url.replace("_normal", "");

  const backgroundSelector = useSelector(
    (state) => state.background.background
  );
  const rotateSelector = useSelector((state) => state.background.rotate);
  const numberFormat = useSelector((state) => numberFormatSelector(state));
  const download = useSelector((state) => downloadLoadingSelector(state));

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
    if (numberFormat) {
      return n;
    } else {
      return value;
    }
  };

  return (
    <>
      <div
        id="container"
        className={`w-full max-w-[700px] p-8 rounded-xl`}
        style={{
          background: `linear-gradient(${rotateSelector}deg, ${backgroundSelector.from}, ${backgroundSelector.to})`,
        }}
      >
        <div className="w-full sm:w-3/4 md:w-1/2 mx-auto bg-black text-white bg-opacity-75 dark:bg-white dark:text-black dark:bg-opacity-75 p-8 rounded-xl flex flex-col items-center shadow-xl">
          <img
            src={highQualityImage}
            width={100}
            height={100}
            alt={username}
            className="rounded-full"
          />
          <h1 className="text-3xl font-bold mt-2 text-center w-full">{name}</h1>
          <h2 className="opacity-60 text-sm">{username}</h2>
          <p className="text-sm opacity-80 mt-4">{description}</p>
          <div className="grid grid-cols-3 w-full text-center mt-4">
            <div>
              <small className="opacity-70">Following</small> <br />
              {numberFormat ? (
                <p>{formattingNumber(following_count)}</p>
              ) : (
                <CountUp end={following_count} duration={2} />
              )}
            </div>
            <div>
              <small className="opacity-70">Followers</small> <br />
              {numberFormat ? (
                <p>{formattingNumber(followers_count)}</p>
              ) : (
                <CountUp end={followers_count} duration={2} />
              )}
            </div>
            <div>
              <small className="opacity-70">Tweets</small> <br />
              {numberFormat ? (
                <p>{formattingNumber(tweet_count)}</p>
              ) : (
                <CountUp end={tweet_count} duration={2} />
              )}
            </div>
          </div>
        </div>
      </div>
      {download && (
        <div className="w-full h-screen fixed top-0 left-0 z-[9999] bg-white flex justify-center items-center">
          <svg
            fill="none"
            className="h-24 w-24 animate-spin text-indigo-600"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              d="M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z"
              fill="currentColor"
              fillRule="evenodd"
            />
          </svg>
        </div>
      )}
    </>
  );
};

export default Profile;
