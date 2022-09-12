import React, { useEffect, useState } from "react";
import { GetServerSidePropsContext, NextPage } from "next";
import Card from "../components/Card/Card";
import { Pagination } from "flowbite-react";
import axios from "axios";
import { useRouter } from "next/router";
import {
  ListCompanyData,
  ListCompanyInterface,
} from "../util/interface/listCompany";

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
    <div className="container mx-auto">
      <h1>Производители</h1>
      <Pagination
        currentPage={+page}
        onPageChange={onPageChange}
        showIcons={true}
        totalPages={count}
      />
      <div className="grid grid-cols-4 gap-5">
        {company.map((card: ListCompanyInterface) => (
          <Card
            key={card.id}
            title={card.title}
            description={card.description}
            priceTop={card.priceTop}
            priceBottom={card.priceBottom}
          />
        ))}
      </div>
    </div>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { page, limit } = context.query;

  const res = await axios(`${process.env.REACT_APP_BASE_URL}/company`, {
    params: {
      page: page ? page : 1,
      limit: limit ? limit : 20,
    },
  });
  const data = await res.data;

  return { props: { company: data.company, count: data.count } };
}

export default Producers;
