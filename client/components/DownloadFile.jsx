import React from 'react'

const DownloadFile = ({downloadPageLink}) => {
  return (
    <div className="p-1">
        <h1 className="my-2 text-lg font-medium">
            Download the file.
        </h1>
        <div className="flex space-x-3">
            <span className="break-all">{downloadPageLink}</span>
            <img src="../public/assets/copy.png" alt="" className="object-contain w-8 h-8 cursor-pointer"/>
        </div>
    </div>
  )
}

export default DownloadFile