import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function ContactRoute(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;
  switch (req.method) {
    case "GET":
      const contact = await prisma.contact.findFirst({
        where: {
          id: id as string,
        },
      });

      return res.status(200).send(contact);

    case "PATCH":
      const dataToUpdate = req.body;
      const contactUpdate = await prisma.contact.update({
        where: { id: id as string },
        data: dataToUpdate,
      });
      return res.status(200).send(contactUpdate);

    case "DELETE":
      const contactToDelete = await prisma.contact.delete({
        where: {
          id: id as string,
        },
      });
      return res.status(200).send(contactToDelete);
    default:
      break;
  }
}
