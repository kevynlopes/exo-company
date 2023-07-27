import cn from "@/utils/cn";
import Link from "next/link";

function NavLink({ pathName, children, href }) {
  const isActive = pathName[1] === href.split("/")[1];

  return (
    <Link
      className={cn("hover:scale-110 transition", {
        "border-b-2 border-white font-bold": isActive,
      })}
      href={href}
    >
      {children}
    </Link>
  );
}

export default NavLink;
