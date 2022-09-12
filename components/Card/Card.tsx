import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import noImg from "/public/no-image.png";

interface CardProps {
  title: string;
  description: string;
}

const Card: FC<CardProps> = ({ title, description }) => {
  return (
    <div className="flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col">
      <Link href="#">
        <a>
          <div className="relative h-[200px] w-full">
            <Image src={noImg} alt={title} layout="fill" />
          </div>
          <div className="flex flex-col gap-4 p-6">
            <h2 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h2>
            <p className="text-sm text-gray-600">{description}</p>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default Card;
