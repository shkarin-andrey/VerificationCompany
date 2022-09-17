import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import noImg from "/public/no-image.png";
import { CardProps } from "./Card.interface";

const Card: FC<CardProps> = ({
  title,
  description,
  priceTop,
  priceBottom,
  href,
}) => {
  return (
    <div className="rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 w-full">
      <Link href={href}>
        <a>
          <div className="relative h-[200px] w-full">
            <Image src={noImg} alt={title} layout="fill" />
          </div>
          <div className="flex flex-col gap-4 px-3 py-5 sm:p-5">
            <h2 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h2>
            <p className="text-sm text-gray-600 text-ellipsis overflow-hidden max-h-[100px]">
              {description}
            </p>
            {priceTop && (
              <span>
                Заработали:{" "}
                <span className="text-green-600 font-medium">{priceTop}</span>
              </span>
            )}
            {priceBottom && (
              <span>
                Потратили:{" "}
                <span className="text-red-600 font-medium">{priceBottom}</span>
              </span>
            )}
          </div>
        </a>
      </Link>
    </div>
  );
};

export default Card;
