import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function HelloWorldFunction(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      const contacts = await prisma.contact.findMany({});
      res.status(200).send(contacts);

    case "POST":
      const contactData = await req.body;
      const contact = await prisma.contact.create({ data: contactData });
      res.status(201).send(contact);

    default:
      break;
  }
}
