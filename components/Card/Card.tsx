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
  dateRegistr,
  userName,
  userProfession,
  people,
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
            {dateRegistr && (
              <div className="text-sm text-gray-600 text-ellipsis overflow-hidden">
                {dateRegistr}
              </div>
            )}
            {people && (
              <div className="text-sm text-gray-600 text-ellipsis overflow-hidden">
                Персонал:
                <span className="text-blue-400 font-medium text-lg">
                  {people}
                </span>
              </div>
            )}
            {priceTop && (
              <div className="text-sm">
                Прибыль:{" "}
                <span className="text-green-600 font-medium">{priceTop}</span>
              </div>
            )}
            {priceBottom && (
              <div className="text-sm">
                Убытки:{" "}
                <span className="text-red-600 font-medium">{priceBottom}</span>
              </div>
            )}
            <div className="flex flex-col">
              {userName && <div className="text-sm">{userName}</div>}
              {userProfession && (
                <div className="text-sm text-gray-600">{userProfession}</div>
              )}
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default Card;
