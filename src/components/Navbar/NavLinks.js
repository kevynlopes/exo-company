"use client";

import React from "react";
import { usePathname } from "next/navigation";
import NavLink from "./NavLink";

export default function NavLinks() {
  const pathName = usePathname().split("/");
  return (
    <div className="flex max-sm:gap-4 gap-12 text-white max-sm:text-sm p-4">
      <NavLink href="/" pathName={pathName}>
        Home
      </NavLink>
      <NavLink href="/servicos" pathName={pathName}>
        Serviços
      </NavLink>
    </div>
  );
}
