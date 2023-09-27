import { Schema, model } from "mongoose";

const itemSchema = new Schema({
    code: { type: String, unique: true },
    description: String,
    price: Number,
    qty: Number,
});

export default model("Item", itemSchema);
