import mongoose from "mongoose"

mongoose.set("strictQuery", false)

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true
        })
    } catch (error) {
        console.log("Connection error", error.message)
    }
}

const connection = mongoose.connection;
if (connection.readyState >= 1) {
    console.log("Connected to db")
} else {
    connection.on("error", () => {
        console.log("connection failed")
    })
}

export default connectDB;