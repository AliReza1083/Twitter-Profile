import React from "react";
import Link from "next/link";
import Image from "next/image";

import HeaderIMG from "../../assets/Header img.png";

import Container from "../ContainerWidth";
import Button from "./Button";

export default function Hero() {
  return (
    <Container className="relative h-screen 2xl:h-auto py-28 2xl:py-56 flex sm:items-center overflow-hidden">
      <div className="w-full max-w-[600px]">
        <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-4 !leading-[1.2]">
          Create an image of your{" "}
          <span
            className=""
            style={{ textShadow: "0 0px 30px rgba(9, 101, 192, .5)" }}
          >
            Twitter profile
          </span>
        </h1>
        <Button />
      </div>
      <div className="absolute right-0 bottom-24 md:bottom-0 -z-40 w-[650px] lg:w-[700px] xl:w-[900px]">
        <Image src={HeaderIMG} alt="" />
        <div className="w-full h-full bg-gradient-to-t md:bg-gradient-to-l from-transparent to-black absolute top-0 left-0"></div>
      </div>
    </Container>
  );
}
