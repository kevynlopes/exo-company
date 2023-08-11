import React from "react";

function SobreButton({ children }) {
  return (
    <div className="flex justify-center">
      <button className="w-[60%]  h-16 bg-gradient-to-r from-[#BF2F96] to-[#909BD5] from-40% rounded-full">
        <p className="text-white text-xl  font-bold">{children}</p>
      </button>
    </div>
  );
}

export default SobreButton;
