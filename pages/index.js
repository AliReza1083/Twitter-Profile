import { useSelector } from "react-redux";
import Upload from "./components/Upload";

import CountUp from "react-countup";

export default function Home() {
  const selector = useSelector((state) => state.images);
  return (
    <div className="flex flex-col gap-8 items-center justify-center h-screen ">
      <h1 className="text-5xl font-medium">Upload and send it Database</h1>
      <p>
        There are <CountUp end={selector.length} duration={1} /> images
      </p>
      <Upload />
    </div>
  );
}
