import { Router } from "express";
import multer from "multer";

import { addFile } from "../controllers/fileController.js";

const router = Router();

const storage = multer.diskStorage({});

let upload = multer({ storage });

router.post("/upload", upload.single("myFile"), addFile);

export default router;
