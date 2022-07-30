// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import {PrismaClient} from "@prisma/client"

const prisma = new PrismaClient()



export default async function handler(req, res) {

  const product = await prisma.product.create({
    data: {
      title: req.body.title,
      description: req.body.description,
      type: req.body.type,
      price: req.body.price,
      img: req.body.img,
      relevant: req.body.relevant,
      pizzaFilterType: req.body.pizzaFilterType,
      rollsFilterType: req.body.rollsFilterType
    }
  })
  res.status(200).json(product)
}
