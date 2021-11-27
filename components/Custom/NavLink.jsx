import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const NavLink = ({ href, pathname, isLink }) => {
  const router = useRouter();

  return (
    <li>
      {isLink ? (
        <Link href={href}>
          <span className="font-light cursor-pointer	">{pathname}</span>
        </Link>
      ) : (
        <button onClick={() => router.push(href)}>{pathname}</button>
      )}
    </li>
  );
};

export default NavLink;
