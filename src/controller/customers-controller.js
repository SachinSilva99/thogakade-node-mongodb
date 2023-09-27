import customerService from "../services/customer-service.js";

const create = (req, res) => {
    //works
    const customer = req.body;
    if (customer === null || Object.keys(customer).length === 0) {
        console.log("hello");
        res.status(400).send("bad request: empty body");
    } else {
        customerService
            .create(customer)
            .then((data) => res.status(201).json(data))
            .catch((er) => console.error(er));
    }
};
const get = (req, res) => {
    //works
    customerService
        .get(req.params.id)
        .then((r) => res.status(200).json(r))
        .catch((er) => {
            console.error(er.message);
            res.status(404).send("Resource not found : " + er.message);
        });
};
const getAll = (req, res) => {
    //works
    customerService
        .getAll()
        .then((data) => res.status(200).json(data))
        .catch((er) => console.error(er));
};
const delete_ = (req, res) => {
    //works
    customerService
        .delete(req.params.id)
        .then(() => res.sendStatus(204))
        .catch((er) => {
            console.error(er.message);
            res.status(404).send("Resource not found : " + er.message);
        });
};
const update = (req, res) => {
    const id = req.params.id;
    const customer = req.body;
    customerService
        .update(id, customer)
        .then(() => res.sendStatus(204))
        .catch((er) => {
            console.error(er.message);
            res.status(404).send("Resource not found : " + er.message);
        });
};
export { create, update, get, getAll, delete_ };
