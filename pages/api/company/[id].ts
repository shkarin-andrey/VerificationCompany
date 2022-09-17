// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import data from "../../../data/listCompany.json";

export default function findCompany(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const id = req.query.id;
  const listCompany = data.listCompany;

  const company = listCompany.find((item) => item.id === id);

  return res.status(200).json({
    company,
  });
}
