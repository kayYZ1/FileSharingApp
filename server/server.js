import express from "express";
import cors from "cors"
import dotenv from "dotenv"
import fileRoute from "./routes/files.js"

import connectDB from "./config/db.js"

const app = express()

dotenv.config()
connectDB()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
app.use("/api/files", fileRoute)

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`)
});