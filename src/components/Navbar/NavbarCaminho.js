import React from "react";

function NavbarCaminho({ children, href, alt }) {
  return (
    <div>
      <button className="text-white text-lg transition hover:scale-110 relative group font-extralight">
        <a href={href} alt={alt}>
          {children}
          <span className="absolute -bottom-1 left-1/2 w-0 h-[7%] bg-[#CB1688] group-hover:w-1/2 group-hover:transition-all"></span>
          <span className="absolute -bottom-1 right-1/2 w-0 h-[7%] bg-[#CB1688] group-hover:w-1/2 group-hover:transition-all"></span>
        </a>
      </button>
    </div>
  );
}

export default NavbarCaminho;
