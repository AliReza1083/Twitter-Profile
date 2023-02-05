import React, { useState } from "react";
import Link from "next/link";

interface IButtonProp {
  value?: string;
}

export default function Button({ value }: IButtonProp) {
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <Link
      href={"/creating"}
      className={`bg-white py-2 px-8 rounded-lg text-black inline-block mt-8 ${
        loading && "animate-pulse"
      }`}
      onClick={() => setLoading(true)}
    >
      {loading ? "Taking you there..." : `${value ? value : "Create Now"}`}
    </Link>
  );
}
