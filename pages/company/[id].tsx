import React from "react";
import { GetServerSidePropsContext, NextPage } from "next";
import axios from "axios";
import { ListCompanyInterface } from "../../util/interface/listCompany";
import { Avatar } from "flowbite-react";

const Company: NextPage<{ company: ListCompanyInterface }> = ({ company }) => {
  const avatarUserCompany = company.user.userAvatar
    .split("/")
    .slice(-1)
    .join("");
  const pathAvatarUserCompany = require(`../../public/assets/avatars/${avatarUserCompany}`);

  return (
    <div className="container mx-auto px-2 sm:px-4">
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-5 mb-5 font-bold text-2xl">
        <div className="flex items-center gap-2 text-center">
          <div className="rounded bg-blue-600 w-4 h-4"></div>
          <h1>{company.title}</h1>
        </div>
        <h2 className="text-blue-600">ИНН: {company.INN}</h2>
      </div>
      <div className="flex flex-col">
        <h2 className="text-center font-bold text-2xl text-gray-600 my-5">
          Основная имнформация
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div>
            <div className="flex justify-center">
              <Avatar img={pathAvatarUserCompany.default.src} size="xl" />
            </div>
            <div className="text-lg font-bold text-center">
              {company.user.userName}
            </div>
            <div className="font-medium text-gray-600 text-center">
              {company.user.userProfession}
            </div>
            <div className="mt-5 text-center">
              Прибыль:{" "}
              <span className="font-medium text-green-600">
                {new Intl.NumberFormat().format(
                  Number(company.finance.income) || 0
                )}
              </span>{" "}
              руб.
            </div>
            <div className="text-center">
              Убыток:{" "}
              <span className="font-medium text-red-600">
                {new Intl.NumberFormat().format(
                  Number(company.finance.expense) || 0
                )}
              </span>{" "}
              руб.
            </div>
          </div>
          <div className="grid gap-3 sm:gap-5 lg:grid-cols-2 lg:col-span-2">
            <div className="font-bold">Направления в структуре НГЭЭ:</div>
            <div>
              {company.companyInfo.NGEE.map((item, i) => (
                <div key={`ngee-${i}`}>{item}</div>
              ))}
            </div>
            <div className="font-bold">Основной вид деятельности (ОКВЭД):</div>
            <div className="font-medium">{company.companyInfo.OKVED}</div>
            <div className="font-bold">Сокращенное наименование:</div>
            <div>{company.companyInfo.littleName}</div>
            <div className="font-bold">Полное наименование:</div>
            <div>{company.companyInfo.fullName}</div>
            <div className="font-bold">Юридический адрес:</div>
            <div>{company.companyInfo.address.legalAddress}</div>
            <div className="font-bold">Фактический адрес:</div>
            <div>{company.companyInfo.address.actualAddress}</div>
            <div className="font-bold">Почтовый адрес:</div>
            <div>{company.companyInfo.address.streetAddress}</div>
            <div className="font-bold">Телефоны:</div>
            <div className="flex flex-col">
              {company.companyInfo.phones?.split(", ").map((item, i) => (
                <a
                  href={`tel:${item.match(/\d/g)?.join("")}`}
                  key={`phones-${i}`}
                  className="font-medium hover:text-blue-500 transition-colors"
                >
                  {item}
                </a>
              )) || "-"}
            </div>
            <div className="font-bold">Web-сайты:</div>
            <a
              href={`https://${company.companyInfo.site}`}
              className="font-medium hover:text-blue-500 transition-colors"
            >
              {company.companyInfo.site || "-"}
            </a>
          </div>
          <div>
            <h1>РЕКЛАМА</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { id } = context.query;

  const res = await axios(`${process.env.BASE_URL_API}/company/${id}`);
  const { data } = await res.data;

  return { props: { company: data.company } };
};

export default Company;
