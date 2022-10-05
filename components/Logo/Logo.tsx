import Link from "next/link";
import Image from "next/image";
import React, { FC } from "react";

const Logo: FC = () => {
  return (
    <Link href="/">
      <a className="flex items-center gap-3">
        <div className="w-10 h-10 relative">
          <Image
            src="/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="ОПО Logo"
            layout={"fill"}
          />
        </div>
        <span className="self-center whitespace-nowrap text-2xl font-bold dark:text-white">
          ОПО
        </span>
      </a>
    </Link>
  );
};

export default Logo;
