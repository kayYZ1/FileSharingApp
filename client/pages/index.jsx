import { useState } from "react";
import axios from "axios";

import DropZoneComponent from "../components/DropZoneComponent.jsx";
import RenderFile from "../components/RenderFile.jsx";
import DownloadFile from "../components/DownloadFile.jsx";

export default function Home() {
  const [file, setFile] = useState(null);
  const [id, setId] = useState(null);
  const [downloadLink, setDownloadLink] = useState(null);
  const [uploadState, setUploadState] = useState("Upload");

  const handleUpload = async () => {
    if (uploadState === "Uploading") return;
    setUploadState("Uploading");
    const formData = new FormData();
    formData.append("myFile", file);
    try {
      const { data } = await axios({
        method: "post",
        data: formData,
        url: "/file/upload",
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setDownloadLink(data.downloadLink);
      setId(data.id);
      setUploadState("Uploaded")
      console.log(data)
      console.log(data.id)
      console.log(data.downloadLink);
    } catch (error) {
      console.log(error.response.data);
      setUploadState("Upload failed");
    }
  };

  const reset = async () => {
    setFile(null)
    setDownloadLink(null)
    setUploadState("Upload")
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="my-5 text-3xl font-medium">PDF Uploader</h1>
      <div className="w-96 flex flex-col items-center bg-slate-100 shadow-xl justify-center">
        {!downloadLink && <DropZoneComponent setFile={setFile} /> }

        {file && (
          <RenderFile
            file={{
              format: file.type.split("/")[1],
              name: file.name,
              sizeInBytes: file.size,
            }}
          />
        )}

        {!downloadLink && file && (
          <button className="w-44 my-4 bg-slate-300 p-2 focus:outline-none" onClick={handleUpload}>
            {uploadState}
          </button>
        )}

        {downloadLink && (
          <div className="p-2 text-center">
            <DownloadFile downloadLink={downloadLink}/>
            <button className="w-44 my-2 bg-slate-300 p-2 focus:outline-none" onClick={reset}>
              Upload new file
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
