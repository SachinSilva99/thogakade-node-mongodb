import Item from "../models/item.js";
import mongoose from "mongoose";

class ItemService {
    async create(item) {
        try {
            console.log(item);
            const currentItem = new Item(item);
            await currentItem.save();
            return currentItem._id;
        } catch (err) {
            console.error("Error creating item:", err);
            throw err;
        }
    }

    async getAll() {
        return Item.find();
    }

    async delete(id) {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw new Error("Invalid ObjectId");
        }
        const item = await Item.findById(id).exec();

        if (!item) {
            throw new Error(`Item with ID ${id} not found`);
        }
        return Customer.deleteOne({ _id: id });
    }

    async get(id) {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw new Error("Invalid ObjectId");
        }
        const item = await Item.findById(id).exec();

        if (!item) {
            throw new Error(`Item with ID ${id} not found`);
        }
        return item;
    }

    async update(id, item) {
        //works
        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw new Error("Invalid ObjectId");
        }

        const existingItem = await Item.findById(id).exec();

        if (!existingItem) {
            throw new Error("Customer not found");
        }
        existingItem.description = item.description;
        existingItem.qty = item.qty;
        existingItem.price = item.price;
        await existingItem.save();
    }
}
export default new ItemService();
