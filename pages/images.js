import Masonry from "react-masonry-css";

import Image from "next/image";
import Images from "./components/Images";
import { useSelector } from "react-redux";

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
};

const images = () => {
  const selector = useSelector((state) => state.images);

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid py-12"
      columnClassName="my-masonry-grid_column"
    >
      {/* array of JSX items */}
      {selector.map((image) => (
        <Images image={image} />
      ))}
    </Masonry>
  );
};

export default images;
