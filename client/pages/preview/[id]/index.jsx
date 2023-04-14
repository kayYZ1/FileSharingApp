import axios from "axios";
import React from "react";

import RenderFile from "../../../components/RenderFile";

const index = ({ file: { format, name, sizeInBytes, id }, urlDownloadLink }) => {
  const copyLink = () => {
    navigator.clipboard.writeText(`http://localhost:3000/${urlDownloadLink}`)
  }

  return (
    <div className="flex flex-col items-center justify-center py-3 space-y-4 bg-slate-100 rounded-md shadow-xl w-96">
      {!id ? (
        <span className="p-10">This ID doesn't seem to exist. Check the url again</span>
      ) : (
        <>
          <h1 className="text-xl">Download <span className="underline">{name}</span></h1>
          <RenderFile file={{ format, name, sizeInBytes }} />
          <div className="flex flex-row w-100">
            <button>
              <img
                src="/assets/images/file-download.png"
                alt="Download"
                className="w-14 pr-3"
              />
            </button>
            <button onClick={copyLink}>
              <img
                src="/assets/images/copy.png"
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
  const urlDownloadLink = context.resolvedUrl
  let file;
  try {
    const { data } = await axios.get(`http://localhost:9999/file/${id}`);
    console.log(data)
    file = data;
    console.log(file)
  } catch (error) {
    console.log(error.response.data);
    file = {};
  }
  return {
    props: {
      file, urlDownloadLink
    },
  };
}
