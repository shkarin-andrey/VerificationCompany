import React, { useEffect, useState } from "react";
import { GetServerSidePropsContext, NextPage } from "next";
import Card from "../../components/Card/Card";
import { TextInput } from "flowbite-react";
import axios from "axios";
import { useRouter } from "next/router";
import {
  ListCompanyData,
  ListCompanyInterface,
} from "../../util/interface/listCompany";
import Search from "../../assets/Search";
import Pagination from "../../components/Pagination/Pagination";
import useMediaQuery from "../../hooks/useMediaQuery";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { searchFilter } from "../../redux/reducers/producersSlice";

const Producers: NextPage<ListCompanyData> = ({ company, count = 1 }) => {
  const router = useRouter();
  const matches = useMediaQuery("(min-width: 640px)");

  const dispatch = useAppDispatch();
  const { search } = useAppSelector((state) => state.producers);

  const [value, setValue] = useState("");
  const [timer, setTimer] = useState<ReturnType<typeof setTimeout> | null>(
    null
  );

  const [page, setPage] = useState(router.query.page || 1);
  const [limit, setLimit] = useState(router.query.limit || 20);

  const pageRangeDisplayed = matches ? 5 : 2;

  useEffect(() => {
    if (search.length < 3) {
      router.push({
        query: { page, limit },
      });
    } else {
      router.push({
        query: { page, limit, search },
      });
    }
  }, [page, limit, search]);

  const inputSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const search = e.target.value;
    setValue(search);

    if (timer) {
      clearInterval(timer);
    }
    setTimer(
      setTimeout(() => {
        dispatch(searchFilter(search.toLowerCase()));
        setPage(1);
      }, 500)
    );
  };

  return (
    <div className="container mx-auto px-2 sm:px-4">
      <div className="flex gap-2 items-center mt-5 mb-5">
        <div className="rounded bg-blue-600 w-4 h-4"></div>
        <h1 className="font-bold text-2xl">Производители</h1>
      </div>
      <div className="flex justify-between items-center flex-col lg:flex-row gap-4">
        <TextInput
          placeholder="Введите название компании..."
          onChange={inputSearch}
          value={value}
          icon={Search}
          style={{
            minWidth: "300px",
          }}
        />
        {count > 1 && (
          <Pagination
            setPage={setPage}
            pageCount={count}
            pageRangeDisplayed={pageRangeDisplayed}
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
              href={`producers/${card.id}`}
            />
          ))
        ) : (
          <div>Список производителей пуст</div>
        )}
      </div>
    </div>
  );
};

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { page, limit, search } = context.query;

  const res = await axios(`${process.env.BASE_URL_API}/company`, {
    params: {
      page: page ? page : 1,
      limit: limit ? limit : 20,
      search,
    },
  });
  const data = await res.data;

  return { props: { company: data.company, count: data.count } };
};

export default Producers;
