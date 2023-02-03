import Frame from "./Frame";

import { FOUR_GRADIENT, GRADIENTS } from "../../../content/Gradient";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { HOMEPAGE } from "@/store/HomePage/HomeTypes";
import { Actions } from "@/store/hook";

export default function BackgroundColors() {
  const state = useSelector((state: RootState) => state.homepage.rotate);
  const dispatch = useDispatch();

  return (
    <Frame>
      <div className="flex gap-2 items-center">
        <span className="text-xl bg-white text-black p-2 rounded-lg grid grid-cols-2 gap-[2px]">
          {FOUR_GRADIENT.map((gradient, index) => (
            <div
              key={index}
              className="w-3 h-3 rounded-sm"
              style={{
                background: `linear-gradient(0deg, ${gradient.from}, ${gradient.to})`,
              }}
            ></div>
          ))}
        </span>
        <h2 className="text-lg font-semibold">Change background theme</h2>
      </div>
      <p className="mt-3">
        There are background themes which you can use them to make your image
        profile to look beautiful.
      </p>
      <div className="grid grid-cols-3 items-center justify-center px-[10%] gap-4 my-8">
        {GRADIENTS.map((gradient, index) => (
          <div
            key={index}
            className="w-full h-24 rounded-lg active:scale-90 duration-100"
            style={{
              background: `linear-gradient(${state}deg, ${gradient.from}, ${gradient.to})`,
            }}
            onClick={() =>
              dispatch<Actions>({ type: HOMEPAGE.GRADIENT, payload: gradient })
            }
          ></div>
        ))}
      </div>
    </Frame>
  );
}
