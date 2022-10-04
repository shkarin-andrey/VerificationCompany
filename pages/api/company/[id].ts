import { ObjectId } from "mongodb";
import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../../util/mongodb";

export default async function findCompany(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    const id = req.query.id;
    const _id = new ObjectId(<string>id);

    const { db } = await connectToDatabase();
    const collection = await db.collection("company");

    const company = await collection.findOne({ _id });

    return res.json({
      data: {
        company,
      },
      message: "Компания успешно найдена",
      success: true,
    });
  } catch (error) {
    return res.json({
      message: new Error(error as any).message,
      success: false,
    });
  }
}
