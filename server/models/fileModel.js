import mongoose from "mongoose";

const fileSchema = new mongoose.Schema(
  {
    filename: {
      type: String,
      required: true,
    },
    secureUrl: {
      type: String,
      required: true,
    },
    format: {
      type: String,
      required: true,
    },
    sizeInBytes: {
      type: String,
      required: true,
    },
    sender: {
      type: String,
    },
    receiver: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const File = mongoose.model("Files", fileSchema);
export default File;
