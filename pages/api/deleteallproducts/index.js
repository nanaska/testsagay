import prisma from '../../../lib/prisma';
export default async function handler(req, res) {
    const product = await prisma.Product.deleteMany()
    prisma.$disconnect()


    res.status(200).json(product)
}
