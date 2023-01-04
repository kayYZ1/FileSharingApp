import express from "express"
import multer from "multer"
import {v2 as cloudinary} from "cloudinary"

const router = express.Router()

const storage = multer.diskStorage({})

let upload = multer({
    storage
})

router.post("/upload", upload.single("myFile"), async (req,res) => {
    try {
        if (!req.file) return res.status(400).json({ message: "File not uploaded." })
        console.log(req.file)
        let uploadedFile;
        try {
            uploadedFile = await cloudinary.uploader.upload(req.file.path, {
                folder: "sharemeYT",
                resource_type: "auto"
            })
        } catch (error) {
            console.log(error.message)
            return res.status(400).json({message:"Cloudinary error"})
        }
        const { originalname } = req.file
        const { secure_url, bytes, format } = uploadedFile

        const file = await File.create({
            filename: originalname,
            sizeInBytes: bytes,
            secure_url,
            format
        })
        res.status(200).json(file);
    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            message: "Server error."
        })
    }
})

export default router