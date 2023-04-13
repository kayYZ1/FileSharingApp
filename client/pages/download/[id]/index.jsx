import axios from 'axios'
import React from 'react'

import RenderFile from "../../../components/RenderFile"

const index = ({ file: {format, name, sizeInBytes, id} }) => {
  return (
    <div className="flex flex-col items-center justify-center py-3 space-y-4 bg-slate-200 rounded-md shadow-xl w-96">
      {!id ? <span>This ID doesn't seem to exist. Check the url again</span> : <>
        <img src="../../public/assets/images/file-download.png" alt="" className="w-16 h-16"/>
        <h1 className="text-xl">OK</h1>
        <RenderFile file={{ format, name, sizeInBytes}} />
        <button className="w-44 my-5 bg-slate-300 p-2 rounded-md focus:outline-none">Download</button>
      </>}
    </div>
  )
}

export default index

export async function getServerSideProps(context) {
  const { id } = context.query
  let file
  try {
    const { data } = await axios.get(`http://localhost:9999/file/${id}`)
    file = data
  } catch (error) {
    console.log(error.response.data)
    file = {}
  }
  return {
    props: {
      file,
    }
  }
}
