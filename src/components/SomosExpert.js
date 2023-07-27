import React from "react";
import Image from "next/image";

export default function SomosExpert() {
  return (
    <div className="flex justify-center gap-4 items-center bg-gradient-to-r from-[#7CC7D4] to-[#FDFF99] from-40% h-24 text-white drop-shadow-md ">
      <p className="text-6xl font-bold">S O M O S</p>
      <Image
        src={"done_outline.svg"}
        height={50}
        width={40}
        alt="teste"
        className="object-cover pointer-events-none"
      />
      <p className="text-6xl font-bold">E X P E R T</p>
    </div>
  );
}
