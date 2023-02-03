import React, { ChangeEvent } from "react";
import CircularSlider from "@fseehawer/react-circular-slider";

import Frame from "./Frame";

import { BiRotateLeft } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { HOMEPAGE } from "@/store/HomePage/HomeTypes";

export default function BackgroundRotation() {
  const rotateState = useSelector((state: RootState) => state.homepage.rotate);
  const backgroundState = useSelector(
    (state: RootState) => state.homepage.gradient
  );
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
            background: `linear-gradient(${rotateState}deg, ${backgroundState.from}, ${backgroundState.to})`,
          }}
        >
          <CircularSlider
            width={80}
            valueFontSize="20px"
            labelFontSize="9px"
            verticalOffset="0em"
            onChange={(value: ChangeEvent<HTMLInputElement>) =>
              dispatch({ type: HOMEPAGE.ROTATE, payload: value })
            }
          />
        </div>
      </div>
    </Frame>
  );
}
