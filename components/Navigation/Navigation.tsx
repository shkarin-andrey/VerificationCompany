import React, { FC } from "react";
import { Navbar } from "flowbite-react";
import Link from "next/link";
import Logo from "../Logo";
import { links } from "./Navigation.routers";
import { useRouter } from "next/router";
import Login from "../Login";
import { useAppSelector } from "./../../hooks/useAppSelector";
import AvatarDropdown from "../AvatarDropdown";

const Navigation: FC = () => {
  const { user } = useAppSelector((state) => state.auth);
  const router = useRouter();

  const isActive = (href: string) => {
    if (router.pathname === href) {
      return "text-blue-700";
    }

    return "text-gray-700";
  };

  return (
    <Navbar fluid={true} rounded={true}>
      <Logo />

      <div className="flex md:order-2">
        {user ? <AvatarDropdown user={user} /> : <Login />}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        {links.map((link, i) => {
          return (
            <Link href={link.href} key={`link-${i}`}>
              <li>
                <a
                  className={`block py-2 pr-4 pl-3 md:p-0 ${
                    links.length - 1 !== i ? "border-b" : ""
                  } border-gray-100 ${isActive(
                    link.href
                  )} hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white cursor-pointer`}
                >
                  {link.value}
                </a>
              </li>
            </Link>
          );
        })}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
