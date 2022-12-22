import express from "express";
import cors from "cors"
import dotenv from "dotenv"

import connectDB from "./config/db.js"

const app = express()

dotenv.config()
connectDB()
app.use(cors())

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(
        `Server is listening on ${PORT}`
    )
});