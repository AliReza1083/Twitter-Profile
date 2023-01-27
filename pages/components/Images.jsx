import React from "react";
import Image from "next/image";

const Images = ({ image }) => {
  return (
    <Image
      className="w-auto h-auto object-cover mb-8 rounded-xl hover:-translate-y-4 duration-100"
      key={image.id}
      src={image.image}
      width={300}
      height={200}
      alt={image.image}
      priority
      data-aos="fade-up"
    />
  );
};

export default Images;
