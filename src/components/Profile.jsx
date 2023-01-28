import React, { useEffect, useState } from "react";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";
import Image from "next/image";
import CountUp from "react-countup";
import { useSelector } from "react-redux";
import { numberFormatSelector } from "@/store/Background/Background.selector";

const Profile = ({ user }) => {
  const [download, setDownload] = useState(false);
  const highQualityImage = user.profile_image_url.replace("_normal", "");

  const backgroundSelector = useSelector(
    (state) => state.background.background
  );
  const rotateSelector = useSelector((state) => state.background.rotate);
  const numberFormat = useSelector((state) => numberFormatSelector(state));

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

  const downloadingImage = async () => {
    setDownload(true);
    const container = document.querySelector("#container");
    container.classList.add("image");
    const style = {
      transform: "scale(1.8)",
      transformOrigin: "top left",
      left: "0px",
      height: "auto",
      width: "auto",
    };
    const param = {
      quality: 1,
      height: container.offsetHeight * 1.8,
      width: container.offsetWidth * 1.8,
      style,
    };
    //image download
    try {
      let dataUrl = await domtoimage.toPng(container, param);
      saveAs(dataUrl, `${name} - ${id}.png`);
      container.classList.remove("image");
      setDownload(false);
      return;
    } catch (error) {
      console.error("Something was wrong!");
    }
  };

  return (
    <>
      <div
        id="container"
        className={`w-full max-w-[700px] p-8 rounded-xl shadow-2xl`}
        style={{
          background: `linear-gradient(${rotateSelector}deg, ${backgroundSelector.from}, ${backgroundSelector.to})`,
        }}
      >
        <div className="w-full sm:w-3/4 md:w-1/2 mx-auto bg-black bg-opacity-75 text-white dark:text-black dark:bg-white dark:bg-opacity-75 p-8 rounded-xl flex flex-col items-center shadow-xl">
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
      <button onClick={downloadingImage}>Download</button>
      {download && (
        <div className="w-full h-screen fixed top-0 left-0 z-[9999] bg-white flex justify-center items-center">
          <svg
            fill="none"
            class="h-24 w-24 animate-spin text-indigo-600"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clip-rule="evenodd"
              d="M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z"
              fill="currentColor"
              fill-rule="evenodd"
            />
          </svg>
        </div>
      )}
    </>
  );
};

export default Profile;
