"use client";

import "./Servicos.css";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import image1 from "@/images/IMG_1054.svg";
import image2 from "@/images/IMG_1055.svg";
import image3 from "@/images/IMG_1056.svg";
import image4 from "@/images/IMG_1057.svg";
import image5 from "@/images/IMG_1058.svg";
import image6 from "@/images/IMG_1059.svg";
import image7 from "@/images/IMG_1060.svg";
import image8 from "@/images/IMG_1061.svg";
import image9 from "@/images/IMG_1062.svg";
import image10 from "@/images/IMG_1063.svg";
import image11 from "@/images/IMG_1064.svg";
import Image from "next/image";

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
];

function Servicos() {
  const carousel = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#CB1688] to-[#83B4D8]">
        Cases e Trabalhos
      </p>
      <div className="App">
        <motion.div
          ref={carousel}
          className="carousel"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            className="inner"
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {images.map((image, index) => (
              <motion.div key={index} className="item">
                <Image src={image} alt="image" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Servicos;
