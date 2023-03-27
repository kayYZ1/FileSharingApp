import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";

import fileRoute from "./routes/fileRoutes.js";
import connectionDB from "./config/db.js";

const app = express();

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_API_CLOUD,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

connectionDB();

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use("/api/files", fileRoute);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
