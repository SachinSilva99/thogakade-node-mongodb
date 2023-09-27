import express from "express";
import customerRoutes from "./routes/customers-route.js";
import itemRoutes from "./routes/items-route.js";
import { connect } from "mongoose";

connect("mongodb://localhost/playground")
    .then(() => console.log("connected mongodb"))
    .catch((err) => console.log(err));

const app = express();
app.use(express.json());

const PORT = 5000;

app.use("/customers", customerRoutes);
app.use("/items", itemRoutes);

app.get("/", (req, res) => res.send("Welcome to the Users API!"));

app.all("*", (req, res) =>
    res.send("You've tried reaching a route that doesn't exist.")
);

app.listen(PORT, () =>
    console.log(`Server running on port: http://localhost:${PORT}`)
);
