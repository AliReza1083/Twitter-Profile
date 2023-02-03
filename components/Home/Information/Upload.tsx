import Image from "next/image";

import Frame from "./Frame";

import { FaCloudUploadAlt } from "react-icons/fa";
import { Upload as UploadSVG } from "../../../assets/Upload";

export default function Upload() {
  return (
    <Frame>
      <div className="">
        <div className="flex gap-2 items-center">
          <span className="text-xl bg-white text-black p-2 rounded-lg">
            <FaCloudUploadAlt />
          </span>
          <h2 className="text-lg font-semibold">Upload your image</h2>
        </div>
        <p className="mt-3">
          When you are done with your design, you have several options which you
          can upload it.
        </p>
        <div className="flex justify-center p-8">
          <UploadSVG />
        </div>
      </div>
    </Frame>
  );
}
