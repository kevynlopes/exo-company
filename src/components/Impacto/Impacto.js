"use client";

import React from "react";
import "./Impacto.css";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

function Impacto() {
  const [numero, setNumero] = useState(0);
  const [numero2, setNumero2] = useState(0);

  const interval = useRef();
  const interval2 = useRef();

  useEffect(() => {
    interval.current = setInterval(() => {
      if (numero < 300) {
        setNumero((numeroAntigo) => numeroAntigo + 1);
      } else {
        clearInterval(interval.current);
      }
    }, 10);

    return () => {
      clearInterval(interval.current);
    };
  }, [numero]);

  useEffect(() => {
    interval2.current = setInterval(() => {
      if (numero2 < 400) {
        setNumero2((numeroAntigo) => numeroAntigo + 1);
      } else {
        clearInterval(interval2.current);
      }
    }, 10);

    return () => {
      clearInterval(interval2.current);
    };
  }, [numero2]);

  return (
    <div className="relative flex items-center max-sm:flex-col">
      <div>
        <div className="flex items-center gap-4 relative max-sm:pl-16 sm:pl-64 pt-28">
          <h3 className="font-bold max-sm:text-6xl text-7xl pr-60 text-[#CC2284]">
            +{numero}
          </h3>
          <p className="text-[#909BD5] sm:text-3xl w-[160px] absolute max-sm:pl-40 pl-52">
            <span className="font-bold">EMPRESAS</span> CRESCERAM CONOSCO
          </p>
        </div>
        <div className="flex items-center gap-4 relative max-sm:pl-16 sm:pl-64 pt-28">
          <h3 className="font-bold max-sm:text-6xl text-7xl pr-60 text-[#CC2284]">
            +{numero2}
          </h3>
          <p className="text-[#909BD5] sm:text-3xl w-[160px] absolute max-sm:pl-40 pl-52">
            <span className="font-bold">PROJETOS</span> INDEPENDENTES
          </p>
        </div>
        <div className="flex items-center gap-4 relative max-sm:pl-8 sm:pl-64 pt-28">
          <h3 className="font-bold max-sm:text-6xl text-7xl text-[#CC2284]">
            milhões
          </h3>
          <p className="text-[#909BD5] sm:text-3xl absolute max-sm:pl-56 pl-72 max-sm:w-[90%]">
            <span className="font-bold">DE PESSOAS</span> IMPACTADAS DIARIAMENTE
          </p>
        </div>
      </div>
      <div className="sm:absolute sm:pl-[900px]">
        <Image src={"logo-exo2.svg"} alt="Rectangle" width={700} height={400} />
      </div>
    </div>
  );
}

export default Impacto;
