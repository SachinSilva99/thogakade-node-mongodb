import itemService from "../services/item-service.js";

const create = (req, res) => {
    //works
    const item = req.body;
    if (item === null || Object.keys(item).length === 0) {
        res.status(400).send("bad request: empty body");
    } else {
        itemService
            .create(item)
            .then((data) => res.status(201).json(data))
            .catch((er) => console.error(er));
    }
};
const get = (req, res) => {
    //works
    itemService
        .get(req.params.id)
        .then((r) => res.status(200).json(r))
        .catch((er) => {
            console.error(er.message);
            res.status(404).send("Resource not found : " + er.message);
        });
};
const getAll = (req, res) => {
    //works
    itemService
        .getAll()
        .then((data) => res.status(200).json(data))
        .catch((er) => console.error(er));
};
const delete_ = (req, res) => {
    //works
    itemService
        .delete(req.params.id)
        .then(() => res.sendStatus(204))
        .catch((er) => {
            console.error(er.message);
            res.status(404).send("Resource not found : " + er.message);
        });
};
const update = (req, res) => {
    const id = req.params.id;
    const item = req.body;
    item.update(id, item)
        .then(() => res.sendStatus(204))
        .catch((er) => {
            console.error(er.message);
            res.status(404).send("Resource not found : " + er.message);
        });
};
export { create, update, get, getAll, delete_ };
