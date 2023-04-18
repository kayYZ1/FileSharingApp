import React from "react";
import Link from "next/link";

const DownloadFile = ({ downloadLink }) => {
  return (
    <div className="p-1">
      <h1 className="my-3 text-lg font-medium">
        Your file has been uploaded to cloudinary storage
      </h1>
      <div className="text-center">
        <span className="break-all"></span>
        <button className="w-44 bg-slate-300 p-2 focus:outline-none">
          <Link href={downloadLink}>Manage your file</Link>
        </button>
      </div>
    </div>
  );
};

export default DownloadFile;
