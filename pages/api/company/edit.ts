import { ObjectId } from "mongodb";
import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../../util/mongodb";

export default async function editCompany(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === "POST") {
    try {
      const { id, data } = req.body;

      if (!id) {
        return res.status(500).json({
          message: "Поле id не задано",
          success: false,
        });
      }

      if (!data) {
        return res.status(500).json({
          message: "Поле data не задано",
          success: false,
        });
      }

      const _id = new ObjectId(<string>id);

      const { db } = await connectToDatabase();
      const collection = await db.collection("company");

      await collection.updateOne({ _id }, { $set: data });

      return res.status(200).json({
        message: "Компания успешно редактирована",
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
