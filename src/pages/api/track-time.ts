import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  console.log("I tracked time here!", req.body);

  res.status(200).json({ message: "Hello from Next.js!" });
}
