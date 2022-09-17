// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { ListCompanyData } from "../../../util/interface/listCompany";
import data from "../../../data/listCompany.json";

export default function company(
  req: NextApiRequest,
  res: NextApiResponse<ListCompanyData>
) {
  const page = Number(req.query.page);
  const limit = Number(req.query.limit);
  const search = req.query.search;

  const searchComapny = () => {
    return data.listCompany.filter((item: any) => {
      const name = item.title.toLowerCase().search(search);

      if (name !== -1) {
        return item;
      }
    });
  };

  const listCompany = search ? searchComapny() : data.listCompany;

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const count = Math.floor(listCompany.length / limit);

  const company = listCompany.slice(startIndex, endIndex);

  return res.status(200).json({
    company,
    count,
  });
}
