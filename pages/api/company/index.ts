import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../../util/mongodb";

export default async function company(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 20;
    const search = req.query.search;

    const skip = (page - 1) * limit;

    const isSearch = () => (search ? { $text: { $search: search } } : {});

    const { db } = await connectToDatabase();
    const collection = db.collection("company");

    collection.createIndex({ title: "text" });

    const [company, count] = await Promise.all([
      collection.find(isSearch()).skip(skip).limit(limit).toArray(),

      collection.find(isSearch()).count(),
    ]);

    return res.json({
      data: {
        company,
        count: Math.ceil(count / limit),
      },
      message: "Компании успешно загруженны",
      success: true,
    });
  } catch (error) {
    return res.status(400).json({
      message: new Error(error as any).message,
      success: false,
    });
  }
}
