import type { NextApiRequest, NextApiResponse } from "next";
import data from "../../../data/listCompany.json";
import { ListCompanyInterface } from "../../../util/interface/listCompany";

export default function findCompany(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const id = req.query.id;
  const company = data.find((item: ListCompanyInterface) => item.id === id);

  return res.status(200).json({
    company,
  });
}
