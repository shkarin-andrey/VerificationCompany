import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { CardProps } from "./Card.interface";
import { Button } from "flowbite-react";
import axios from "axios";

const Card: FC<CardProps> = ({
  id,
  title,
  href,
  expense,
  income,
  OKVED,
  logo,
  setDeleted,
}) => {
  const logoCompany = logo.split("/").slice(-1).join("");
  const pathLogoCompany = require(`../../public/assets/logo/${logoCompany}`);

  const editCard = () => {
    console.log("edit " + id);
  };

  const deleteCard = async () => {
    const res = await axios({
      url: `/api/company/delete`,
      method: "DELETE",
      data: { id },
    });

    if (res.status === 200) {
      setDeleted(true);
    }
  };

  return (
    <div className="rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 w-full overflow-hidden">
      <Link href={href}>
        <a>
          <div className="relative h-[200px] w-full">
            <Image
              src={pathLogoCompany.default.src}
              alt={title}
              layout="fill"
            />
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
      <div className="flex flex-col px-3 py-5">
        <hr />
        <div className="flex gap-5 justify-between mt-5">
          <Button onClick={editCard}>Редактировать</Button>
          <Button onClick={deleteCard} color="failure">
            Удалить
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
