import type { NextApiRequest, NextApiResponse } from "next";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // console.log(req);
  res.status(200).json(req.body);
}
