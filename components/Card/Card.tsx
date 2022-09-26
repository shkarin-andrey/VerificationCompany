import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import noImg from "/public/no-image.png";
import { CardProps } from "./Card.interface";

const Card: FC<CardProps> = ({ title, href, expense, income, OKVED }) => {
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
            <div className="text-gray-500">{OKVED}</div>
            <div className="flex flex-col">
              <div>
                Прибыль:{" "}
                <span className="font-medium text-green-600">
                  {new Intl.NumberFormat().format(income || 0)}
                </span>{" "}
                руб.
              </div>
              <div>
                Убыток:{" "}
                <span className="font-medium text-red-600">
                  {new Intl.NumberFormat().format(expense || 0)}
                </span>{" "}
                руб.
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default Card;
