import React, { useEffect, useState } from "react";
import { GetServerSidePropsContext, NextPage } from "next";
import Card from "../components/Card/Card";
import { Pagination, TextInput } from "flowbite-react";
import axios from "axios";
import { useRouter } from "next/router";
import {
  ListCompanyData,
  ListCompanyInterface,
} from "../util/interface/listCompany";
import Search from "../assets/Search";

const Producers: NextPage<ListCompanyData> = ({ company = [], count = 1 }) => {
  const router = useRouter();

  const [page, setPage] = useState(router.query.page || 1);
  const [limit, setLimit] = useState(router.query.limit || 20);

  useEffect(() => {
    router.push({
      query: { page, limit },
    });
  }, [page, limit]);

  const onPageChange = (targetPage: number) => {
    setPage(targetPage);
  };

  return (
    <div className="container mx-auto px-2 sm:px-4">
      <div className="flex gap-2 items-center mt-5 mb-5">
        <div className="rounded bg-blue-600 w-4 h-4"></div>
        <h1 className="font-bold text-2xl">Производители</h1>
      </div>
      <div className="flex justify-between items-center flex-col sm:flex-row">
        <TextInput
          placeholder="Введите название компании..."
          icon={Search}
          style={{
            minWidth: "300px",
          }}
        />
        {count > 1 && (
          <Pagination
            prefix="qwe"
            currentPage={+page}
            onPageChange={onPageChange}
            showIcons={true}
            totalPages={count}
          />
        )}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 my-10">
        {company ? (
          company.map((card: ListCompanyInterface) => (
            <Card
              key={card.id}
              title={card.title}
              description={card.description}
              priceTop={card.priceTop}
              priceBottom={card.priceBottom}
            />
          ))
        ) : (
          <div>Список компании пуст</div>
        )}
      </div>
    </div>
  );
};

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { page, limit } = context.query;

  const res = await axios(`${process.env.BASE_URL_API}/company`, {
    params: {
      page: page ? page : 1,
      limit: limit ? limit : 20,
    },
  });
  const data = await res.data;

  return { props: { company: data.company, count: data.count } };
};

export default Producers;
