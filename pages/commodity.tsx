import React from "react";
import { NextPage } from "next";

const Commodity: NextPage = () => {
  return (
    <div className="container mx-auto">
      <div className="flex gap-2 items-center mt-5 mb-5">
        <div className="rounded bg-blue-600 w-4 h-4"></div>
        <h1 className="font-bold text-2xl">Товары</h1>
      </div>
      <p className="text-center my-10 text-xl font-bold">
        Данная страница находится в разработке
      </p>
    </div>
  );
};

export default Commodity;
