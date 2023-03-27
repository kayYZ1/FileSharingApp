import mongoose from "mongoose";

import { devConfig } from "./devVariables.js";

mongoose.set("strictQuery", false);

const connectionDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${devConfig.DB_USER}:${devConfig.DB_PASSWORD}@studentactivitydb.yb8s7zp.mongodb.net/${devConfig.DB_NAME}`,
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }
    );
  } catch (error) {
    console.log("Connection error", error.message);
  }
  const connection = mongoose.connection;
  if (connection.readyState >= 1) {
    console.log("Connected to database.");
  } else {
    connection.on("error", () => {
      console.log("Connection failed.");
    });
  }
};

export default connectionDB;
