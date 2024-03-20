import UseTransition from "@/hooks/use-transition";
import Image from "next/image";
import React from "react";

interface Props {
  name: string;
  image: string;
}

export default function CategoryItem({ image, name }: Props) {
  return (
    <UseTransition>
      <Image
        src={image}
        height={2000}
        width={2000}
        className="w-32 h-32 object-cover"
        alt=""
      ></Image>
      <div className="text-xs mt-3">{name}</div>
    </UseTransition>
  );
}
