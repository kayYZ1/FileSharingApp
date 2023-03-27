import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;
const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY;
const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET;
const CLOUDINARY_API_CLOUD = process.env.CLOUDINARY_API_CLOUD;

export const devConfig = {
  PORT,
  DB_USER,
  DB_PASSWORD,
  DB_NAME,
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
  CLOUDINARY_API_CLOUD,
};
