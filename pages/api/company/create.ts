import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../../util/mongodb";

export default async function createCompany(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === "POST") {
    try {
      const { data } = req.body;

      if (!data) {
        return res.status(500).json({
          message: "Поле data не задано",
          success: false,
        });
      }

      const { db } = await connectToDatabase();
      const collection = await db.collection("company");

      await collection.insertOne(data);

      return res.status(200).json({
        message: "Компания успешно создана",
        success: true,
      });
    } catch (error) {
      return res.status(500).json({
        message: new Error(error as any).message,
        success: false,
      });
    }
  }

  return res.status(400).json({
    message: new Error("Ошибка").message,
    success: false,
  });
}
