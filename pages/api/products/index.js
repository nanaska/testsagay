import dbConnect from "../../../util/mongo";
import Product from "../../../models/product";

export default async function handler(req,res){
    const {method, query } = req;

    dbConnect()

    if (method === "GET"){
        try{

            const products = await Product.find();
            res.status(201).json(products)


        }catch (e){
            res.status(500).json(e);
        }
    }

}