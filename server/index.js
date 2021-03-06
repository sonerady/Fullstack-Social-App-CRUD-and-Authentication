import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import memoryRouter from "./routers/memoryRouter.js";

dotenv.config();

const app = express();

app.use(express.json({ limit: "20mb" })); // gelen isteği ayrıştıran bir fonksiyondur. ayrıştırması ge rekir.
app.use(cors());

app.use("/memories", memoryRouter);

app.listen(process.env.PORT, () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("connected to db"))
    .catch((err) => console.log(err));
});
