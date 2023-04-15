import axios from "axios";
import React, { useState } from "react";
import fileDownload from "js-file-download";

import RenderFile from "../../../components/RenderFile";
import CopiedLinkPopup from "../../../components/CopiedLinkPopup";
import PreviousPageButton from "../../../components/PreviousPageButton";

const index = ({
  file: { format, name, sizeInBytes, id },
  urlDownloadLink,
}) => {
  const [isCopied, setIsCopied] = useState(false);
  
  const handleDownload = async () => {
    const { data } = await axios.get(
      `http://localhost:9999/file/${id}/download`,
      {
        responseType: "blob",
      }
    );
    fileDownload(data, name);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(`http://localhost:3000/${urlDownloadLink}`);
    setIsCopied(true)
  };

  return (
    <div className="flex flex-col items-center justify-center py-3 space-y-4 bg-slate-100 rounded-md shadow-xl w-96">
      {!id ? (
        <span className="p-10">
          This ID doesn't seem to exist. Check the url again
        </span>
      ) : (
        <>
          <PreviousPageButton />
          <h1 className="text-xl">
            Download <span className="underline">{name}</span>
          </h1>
          <RenderFile file={{ format, name, sizeInBytes }} />
          <div className="flex flex-row w-100">
            <button onClick={handleDownload}>
              <img
                src="/assets/images/download.png"
                alt="Download"
                className="w-14 pr-3"
              />
            </button>
            {isCopied ? <CopiedLinkPopup setIsCopied={setIsCopied}/> : ""}
            <button onClick={handleCopy}>
              <img
                src="/assets/images/copy.jpg"
                alt="Download"
                className="w-14 pl-3"
              />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default index;

export async function getServerSideProps(context) {
  const { id } = context.query;
  const urlDownloadLink = context.resolvedUrl;
  let file;
  try {
    const { data } = await axios.get(`http://localhost:9999/file/${id}`);
    file = data;
  } catch (error) {
    console.log(error.response.data);
    file = {};
  }
  return {
    props: {
      file,
      urlDownloadLink,
    },
  };
}
