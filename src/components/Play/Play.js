import React from "react";
import Image from "next/image";

function Play() {
  return (
    <div className="pt-24 pb-24">
      <div className="flex justify-center items-center gap-4 bg-gradient-to-r from-[#9050BB] to-[#C82685] from-40% drop-shadow-md p-4">
        <Image src={"play.svg"} alt="Rectangle" width={50} height={15} />
        <h3 className="text-white sm:text-4xl font-bold">
          FESTA DO PEAO SERTANEJA
        </h3>
      </div>
      <div>
        <Image src={"video.svg"} alt="Rectangle" width={1920} height={1080} />
      </div>
    </div>
  );
}

export default Play;
