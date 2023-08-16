import React from "react";

function SobreButton({ children }) {
  return (
    <div className="hover:scale-110 transition flex justify-center items-center bg-gradient-to-r from-[#CB1688] to-[#83B4D8] text-white p-8 rounded-full font-bold sm:font-semibold h-[56px] text-center w-96 max-sm:w-72 max-sm:text-sm">
      {children}
    </div>
  );
}

export default SobreButton;
