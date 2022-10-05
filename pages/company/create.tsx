import React from "react";
import { NextPage } from "next";
import { Button, Textarea } from "flowbite-react";
import { useFormik } from "formik";
import Input from "../../components/Input";
import axios from "axios";

const CreateCompany: NextPage = () => {
  const formik = useFormik({
    initialValues: {
      title: "",
      INN: "",
      userName: "",
      userProfession: "",
      expense: "",
      income: "",
      NGEE: "",
      OKVED: "",
      actualAddress: "",
      legalAddress: "",
      streetAddress: "",
      fullName: "",
      littleName: "",
      phones: "",
      site: "",
    },
    onSubmit: async (values) => {
      const NGEE = values.NGEE.split(",").map((item) => item.trim());

      const user = {
        userName: values.userName,
        userProfession: values.userProfession,
      };

      const data = {
        title: values.title,
        INN: values.INN,
        user,
        companyInfo: {
          NGEE,
          address: {
            legalAddress: values.legalAddress,
            actualAddress: values.actualAddress,
            streetAddress: values.streetAddress,
          },
          OKVED: values.OKVED,
          littleName: values.littleName,
          fullName: values.fullName,
          phones: values.phones,
          site: values.site,
        },
        finance: { income: values.income, expense: values.expense },
      };

      const res = await axios({
        url: `/api/company/create`,
        method: "POST",
        data: { data },
      });

      console.log(res);
    },
  });

  return (
    <div className="container mx-auto px-2 sm:px-4">
      <div className="flex gap-2 items-center mt-5 mb-5">
        <div className="rounded bg-blue-600 w-4 h-4"></div>
        <h1 className="font-bold text-2xl">Создание новой компании</h1>
      </div>
      <div className="flex flex-col">
        <h2 className="text-center font-bold text-2xl text-gray-600 my-5">
          Основная имнформация
        </h2>
        <form
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
          onSubmit={formik.handleSubmit}
        >
          <div>
            <div className="text-center">
              Название компании:
              <Input
                type="text"
                name="title"
                value={formik.values.title}
                onChange={formik.handleChange}
              />
            </div>
            <div className="mt-5 text-center">
              ИНН:
              <Input
                type="text"
                name="INN"
                value={formik.values.INN}
                onChange={formik.handleChange}
              />
            </div>
            <div className="mt-5 text-center">
              ФИО руководтиеля:
              <Input
                type="text"
                name="userName"
                value={formik.values.userName}
                onChange={formik.handleChange}
              />
            </div>
            <div className="mt-5 text-center">
              Должность руководтиеля:
              <Input
                type="text"
                name="userProfession"
                value={formik.values.userProfession}
                onChange={formik.handleChange}
              />
            </div>
            <div className="mt-5 text-center">
              Прибыль:{" "}
              <Input
                type="string"
                name="income"
                value={formik.values.income}
                onChange={formik.handleChange}
              />
            </div>
            <div className="text-center">
              Убыток:{" "}
              <Input
                type="string"
                name="expense"
                value={formik.values.expense}
                onChange={formik.handleChange}
              />
            </div>
          </div>
          <div className="grid gap-3 sm:gap-5 lg:grid-cols-2 lg:col-span-2">
            <div className="font-bold">Направления в структуре НГЭЭ:</div>
            <div>
              <Textarea
                rows={4}
                name="NGEE"
                value={formik.values.NGEE}
                onChange={formik.handleChange}
              />
            </div>
            <div className="font-bold">Основной вид деятельности (ОКВЭД):</div>
            <Textarea
              rows={4}
              name="OKVED"
              value={formik.values.OKVED}
              onChange={formik.handleChange}
            />
            <div className="font-bold">Сокращенное наименование:</div>
            <Input
              type="text"
              name="littleName"
              value={formik.values.littleName}
              onChange={formik.handleChange}
            />
            <div className="font-bold">Полное наименование:</div>
            <Input
              type="text"
              name="fullName"
              value={formik.values.fullName}
              onChange={formik.handleChange}
            />
            <div className="font-bold">Юридический адрес:</div>
            <Input
              type="text"
              name="legalAddress"
              value={formik.values.legalAddress}
              onChange={formik.handleChange}
            />
            <div className="font-bold">Фактический адрес:</div>
            <Input
              type="text"
              name="actualAddress"
              value={formik.values.actualAddress}
              onChange={formik.handleChange}
            />
            <div className="font-bold">Почтовый адрес:</div>
            <Input
              type="text"
              name="streetAddress"
              value={formik.values.streetAddress}
              onChange={formik.handleChange}
            />
            <div className="font-bold">Телефоны:</div>
            <Input
              type="text"
              name="phones"
              value={formik.values.phones}
              onChange={formik.handleChange}
            />
            <div className="font-bold">Web-сайты:</div>
            <Input
              type="text"
              name="site"
              value={formik.values.site}
              onChange={formik.handleChange}
            />
          </div>
          <div>
            <Button type={"submit"}>Сохранить</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateCompany;
