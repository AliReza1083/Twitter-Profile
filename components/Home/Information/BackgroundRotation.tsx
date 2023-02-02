import React, { ChangeEvent } from "react";
import Frame from "./Frame";
import CircularSlider from "@fseehawer/react-circular-slider";

import { BiRotateLeft } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import { HOMEPAGE } from "@/store/HomePage/home.types";

export default function BackgroundRotation() {
  const backgroundGradient = useSelector((state) => state.homePage.gradient);
  const rotate = useSelector((state) => state.homePage.rotate);
  const dispatch = useDispatch();

  return (
    <Frame>
      <div className="">
        <div className="flex gap-2 items-center">
          <span className="text-xl bg-white text-black p-2 rounded-lg">
            <BiRotateLeft />
          </span>
          <h2 className="text-lg font-semibold">Change background rotation</h2>
        </div>
        <p className="mt-3">
          You can change the rotation of the background gradient.
        </p>
        <div
          className="w-full h-56 flex justify-center items-center rounded-xl my-8"
          style={{
            background: `linear-gradient(${rotate}deg, ${backgroundGradient.from}, ${backgroundGradient.to})`,
          }}
        >
          <CircularSlider
            width={80}
            valueFontSize="20px"
            labelFontSize="9px"
            verticalOffset="0em"
            onChange={(value: ChangeEvent<HTMLInputElement>) =>
              dispatch({ type: HOMEPAGE.rotate, payload: value })
            }
          />
        </div>
      </div>
    </Frame>
  );
}
