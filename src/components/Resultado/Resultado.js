import Image from "next/image";
import React from "react";

function Resultado() {
  return (
    <div>
      <Image
        className="bg-black rounded-tl-[200px]"
        src={"equipeExo.svg"}
        alt="Rectangle"
        width={1920}
        height={0}
      />
    </div>
  );
}

export default Resultado;
