// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { ListCompanyData } from "../../../util/interface/listCompany";
import { listCompany } from "../data/listCompany";

export default function company(
  req: NextApiRequest,
  res: NextApiResponse<ListCompanyData>
) {
  const { page, limit } = req.query;

  const limitCards = Number(limit) || 20;
  const offset = Number(limitCards) * Number(page);
  const count = Math.floor(listCompany.length / limitCards);

  if (page) {
    const company = listCompany.splice(offset, limitCards);

    return res.status(200).json({
      company,
      count,
    });
  }

  return res.status(200).json({
    company: listCompany,
    count,
  });
}
