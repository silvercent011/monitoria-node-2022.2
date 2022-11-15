import { NextApiRequest, NextApiResponse } from "next";

export default function ApiIndex(req: NextApiRequest, res: NextApiResponse) {
  res.send({ message: "hello world" });
}
