import {Schema, model} from "mongoose";

const customerSchema = new Schema({
    name: String,
    address: String,
    phoneNumber: String,
});

export default model("Customer", customerSchema);
