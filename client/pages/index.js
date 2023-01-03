import { useState } from "react"
import axios from "axios"

import DropZoneComponent from "../components/DropZoneComponent.js"
import RenderFile from "../components/RenderFile.js"

export default function Home() {
  const [file, setFile] = useState(null)
  const [id, setId] = useState(null)
  const [downloadPageLink, setDownloadPageLink] = useState(null)
  const [uploadState, setUploadState] = useState(null)

  const handleUpload = async () => {
    if (uploadState === "Uploading") return
    const formData = new FormData()
    formData.append("myFile", file)
    try {
      const { data } = await axios({
        method: "post",
        data: formData,
        url: "api/files/upload",
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      setDownloadPageLink(data.downloadPageLink)
      setId(data.id)
    } catch (error) {
      console.log(error.response.data)
      setUploadState("Upload failed")
    }
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="my-4 text-3xl font-medium">Share a pdf</h1>
      <div className="w-96 flex flex-col items-center bg-slate-100 shadow-xl rounded-xl justify-center">
        <DropZoneComponent setFile={setFile}/>
        
        {file &&
        <RenderFile file={{
          format: file.type.split("/")[1],
          name: file.name,
          sizeInBytes: file.size
        }} />}

        <button className="w-44 my-5 bg-slate-300 p-2 rounded-md focus:outline-none" onClick={handleUpload}>Upload</button>
      </div>
    </div>
  )
}