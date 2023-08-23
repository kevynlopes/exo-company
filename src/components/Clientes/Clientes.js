import Image from "next/image";
import React from "react";

function Clientes() {
  return (
    <div>
      <div className="flex justify-center">
        <h3 className="text-transparent text-7xl font-bold bg-clip-text bg-gradient-to-br from-[#CB1688] to-[#83B4D8] pb-12">
          Alguns de nossos clientes
        </h3>
      </div>
      <div className="flex justify-center flex-col items-center">
        <div className="flex flex-wrap">
          <Image src={"cliente.svg"} alt="Rectangle" width={200} height={0} />
          <Image src={"cliente1.svg"} alt="Rectangle" width={200} height={0} />
          <Image src={"cliente2.svg"} alt="Rectangle" width={200} height={0} />
          <Image src={"cliente3.svg"} alt="Rectangle" width={200} height={0} />
          <Image src={"cliente4.svg"} alt="Rectangle" width={200} height={0} />
        </div>
        <div className="flex flex-wrap">
          <Image src={"cliente5.svg"} alt="Rectangle" width={200} height={0} />
          <Image src={"cliente6.svg"} alt="Rectangle" width={200} height={0} />
          <Image src={"cliente7.svg"} alt="Rectangle" width={200} height={0} />
          <Image src={"cliente8.svg"} alt="Rectangle" width={200} height={0} />
          <Image src={"cliente9.svg"} alt="Rectangle" width={200} height={0} />
        </div>
      </div>
    </div>
  );
}

export default Clientes;
