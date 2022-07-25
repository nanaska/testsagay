import dbConnect from "../../../../util/mongo";
import Product from "../../../../models/product";

export default async function handler(req,res,id){
    const {method} = req;

    dbConnect()

    if (method === "GET"){
        try{
            const { index } = req.query

            const products = await Product.find({title: {$regex: String(`${index}`)}});

            res.status(201).json(products)


        }catch (e){
            res.status(500).json(e);
        }
    }

}