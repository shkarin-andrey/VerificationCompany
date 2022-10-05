import { ObjectId } from "mongodb";
import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../../util/mongodb";

export default async function deleteCompany(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === "DELETE") {
    try {
      const id = req.body.id;

      if (!id) {
        return res.status(500).json({
          message: "Поле id не задано",
          success: false,
        });
      }

      const _id = new ObjectId(<string>id);

      const { db } = await connectToDatabase();
      const collection = await db.collection("company");

      await collection.deleteOne({ _id });

      return res.status(200).json({
        message: "Компания успешно удалена",
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
