import React from "react";
import { GetServerSidePropsContext, NextPage } from "next";
import axios from "axios";

const Producers: NextPage = ({ company }: any) => {
  return (
    <div className="container mx-auto px-2 sm:px-4">
      <div className="flex gap-2 items-center mt-5 mb-5">
        <div className="rounded bg-blue-600 w-4 h-4"></div>
        <h1 className="font-bold text-2xl">{company.title}</h1>
      </div>
    </div>
  );
};

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { id } = context.query;

  const res = await axios(`${process.env.BASE_URL_API}/company/${id}`);
  const data = await res.data;

  return { props: { company: data.company } };
};

export default Producers;
