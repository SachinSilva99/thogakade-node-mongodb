import Customer from "../models/customer.js";
import mongoose from "mongoose";

class CustomerService {
    async create(customer) {
        try {
            const customerS = new Customer(customer);
            await customerS.save();
            return customerS._id;
        } catch (err) {
            console.error("Error creating customer:", err);
            throw err;
        }
    }

    async getAll() {
        return Customer.find();
    }

    async delete(id) {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw new Error("Invalid ObjectId");
        }
        const customer = await Customer.findById(id).exec();

        if (!customer) {
            throw new Error(`Customer with ID ${id} not found`);
        }
        return Customer.deleteOne({_id: id});
    }

    async get(id) {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw new Error("Invalid ObjectId");
        }
        const customer = await Customer.findById(id).exec();

        if (!customer) {
            throw new Error(`Customer with ID ${id} not found`);
        }
        return customer;
    }

    async update(id, customer) {
        //works
        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw new Error("Invalid ObjectId");
        }

        const existingCustomer = await Customer.findById(id).exec();

        if (!existingCustomer) {
            throw new Error("Customer not found");
        }
        existingCustomer.name = customer.name;
        existingCustomer.address = customer.address;
        existingCustomer.phoneNumber = customer.phoneNumber;
        await existingCustomer.save();
    }
}

export default new CustomerService();
