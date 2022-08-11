 import prisma from '../../../lib/prisma';;




export default async function handler(req, res) {

    const product = await prisma.Product.create({
        data: {
            title: req.body.title,
            price: req.body.price,
            description: req.body.description,
            img: req.body.img,
            type: {
                create: {
                    name: req.body.producttype
                }
            },
            filterType: {
                create: {
                    name: req.body.filtertype
                }
            },
        }
    })
    prisma.$disconnect()
    res.status(200).json(product)
}
