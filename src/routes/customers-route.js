import express from "express";

import {
    get,
    create,
    update,
    delete_,
    getAll,
} from "../controller/customers-controller.js";

const router = express.Router();

router.get("/", getAll);
router.post("/", create);
router.get("/:id", get);
router.delete("/:id", delete_);
router.patch("/:id", update);

export default router;
