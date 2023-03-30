import { Router } from "express";
import multer from "multer";

import { addFile, getFile } from "../controllers/fileController.js";

const router = Router();

const storage = multer.diskStorage({});

let upload = multer({ storage });

router.post("/upload", upload.single("myFile"), addFile);
router.post("/:id", getFile)

export default router;
