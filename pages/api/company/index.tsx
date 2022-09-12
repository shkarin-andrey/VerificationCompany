// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { listCompany } from "../data/listCompany";

interface Data {
  company: ListCompanyInterface[];
  count: number;
}

export interface ListCompanyInterface {
  id: string;
  title: string;
  description: string;
  dateRedistr?: string;
  priceTop?: string;
  priceBottom?: string;
  action: string;
  user: string;
  people?: string;
  legalAction?: string[];
}

export default function company(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { page, limit } = req.query;

  console.log(typeof listCompany);

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
