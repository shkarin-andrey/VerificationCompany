// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { ListCompanyData } from "../../../util/interface/listCompany";
import { listCompany } from "../../../data/listCompany.json";

export default function company(
  req: NextApiRequest,
  res: NextApiResponse<ListCompanyData>
) {
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 20;

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const count = Math.floor(listCompany.length / limit);

  const company = listCompany.slice(startIndex, endIndex);

  return res.status(200).json({
    company,
    count,
  });
}
