import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required:true,
    },
    description:{
        type: String,
    },
    img: {
        type: String,

    },
    type: {
        type: Number,
        required: true
    },
    prices:{
        type: [Number],
        required:true
    }
})

export default mongoose.models.Product || mongoose.model("Product", ProductSchema)