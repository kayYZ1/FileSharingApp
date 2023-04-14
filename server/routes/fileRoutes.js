import { Router } from "express";
import multer from "multer";

import {
  addFile,
  getFile,
  downloadFile,
} from "../controllers/fileController.js";

const router = Router();

const storage = multer.diskStorage({});

let upload = multer({ storage });

router.post("/upload", upload.single("myFile"), addFile);
router.get("/:id", getFile);
router.get("/:id/download", downloadFile);

export default router;
