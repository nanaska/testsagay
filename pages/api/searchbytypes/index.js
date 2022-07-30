// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import {PrismaClient} from "@prisma/client"

const prisma = new PrismaClient()



export default async function handler(req, res) {

    if(req.query.type&& !req.query.pizzaFilterType && !req.query.rollsFilterType){
        const product = await prisma.product.findMany({
            where: {

                type: Number(req.query.type),

            }
        })
        await prisma.$disconnect()
        return(
            res.status(200).json(product)
        )
    }
    if(req.query.type && req.query.pizzaFilterType && !req.query.rollsFilterType){
        const product = await prisma.product.findMany({
            where: {

                type: Number(req.query.type),
                pizzaFilterType: Number(req.query.pizzaFilterType)

            }
        })
        await prisma.$disconnect()
        return(
            res.status(200).json(product)
        )
    }
    if(req.query.type && req.query.rollsFilterType && !req.query.pizzaFilterType){
        console.log(req.query.rollsFilterType)
        const product = await prisma.product.findMany({
            where: {

                type: Number(req.query.type),
                rollsFilterType: Number(req.query.rollsFilterType)

            }
        })
        await prisma.$disconnect()
        return(
            res.status(200).json(product)
        )
    }
    if(!req.query.type){
        console.log(req.query.rollsFilterType)
        const product = await prisma.product.findMany({

        })
        await prisma.$disconnect()
        return(
            res.status(200).json(product)
        )
    }

}
