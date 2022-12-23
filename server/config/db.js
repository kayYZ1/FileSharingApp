import mongoose from "mongoose"

mongoose.set("strictQuery", false)

const connectionDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser:true
        })
    } catch (error) {
        console.log("Connection error", error.message)
    }
    const connection = mongoose.connection;
    if (connection.readyState >= 1) {
        console.log("Connected to database.")
    } else {
        connection.on("error", () => {
            console.log("Connection failed.")
        })
    }
}

export default connectionDB;