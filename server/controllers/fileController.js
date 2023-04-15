import { v2 as cloudinary } from "cloudinary";
import https from "https";

import File from "../models/fileModel.js";

export const addFile = async (req, res) => {
  try {
    if (!req.file)
      return res.status(400).json({ message: "File not uploaded." });

    console.log(req.file);

    let uploadedFile;
    try {
      uploadedFile = await cloudinary.uploader.upload(req.file.path, {
        folder: "sharemeYT",
        resource_type: "auto",
      });
    } catch (error) {
      console.log(error.message);
      return res.status(400).json({ message: "Cloudinary error" });
    }
    const { originalname } = req.file;
    const { bytes, format, secure_url } = uploadedFile;
    if (!secure_url) {
      return res
        .status(400)
        .json({ message: "Cloudinary error: secure_url not found." });
    }

    const file = await File.create({
      filename: originalname,
      sizeInBytes: bytes,
      secureUrl: secure_url,
      format,
    });
    res.status(200).json({
      id: file._id,
      downloadLink: `${process.env.API_BASE_ENDPOINT}/preview/${file._id}`,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: "Server error.",
    });
  }
};

export const getFile = async (req, res) => {
  try {
    const id = req.params.id;
    const file = await File.findById(id);
    if (!file) {
      return res.status(404).json({ message: "File does not exist." });
    }

    const { filename, format, sizeInBytes } = file;
    return res.status(200).json({
      name: filename,
      format,
      sizeInBytes,
      id,
      downloadLink: `${process.env.API_BASE_ENDPOINT}/preview/${id}`,
    });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};

export const downloadFile = async (req, res) => {
  try {
    const id = req.params.id;
    const file = await File.findById(id);
    if (!file) {
      return res.status(404).json({ message: "File does not exist." });
    }
    https.get(file.secureUrl, (fileStream) => fileStream.pipe(res));
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};
