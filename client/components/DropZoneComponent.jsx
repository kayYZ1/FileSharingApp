import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const DropZoneComponent = ({ setFile }) => {
  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
    setFile(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps, isDragAccept, isDragReject } =
    useDropzone({
      onDrop,
      multiple: false,
      accept: { "application/pdf": [".pdf"] },
    });

  return (
    <div className="p-4 w-full">
      <div
        {...getRootProps()}
        className="w-full h-80 rounded-md cursor-pointer focus:outline-none"
      >
        <input {...getInputProps()} />
        <div
          className={
            "flex flex-col h-full space-y-3 border-2 border-slate-300 rounded-xl items-center justify-center" +
            (isDragReject === true ? "border-red-500" : "") +
            (isDragAccept === true ? "border-green-500" : "")
          }
        >
          <img
            src="/assets/images/folder.png"
            alt="folder"
            className="w-16 h-16"
          />
          {isDragReject ? (
            <p>Only pdfs are allowed</p>
          ) : (
            <div>
              <p>Drag and drop your file</p>
              <p className="mt-2 text-base text-slate-500">
                Only .pdf extension will be accepted.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DropZoneComponent;
