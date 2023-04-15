import React from 'react'

const RenderFile = ({file:{format, sizeInBytes, name}}) => {
  return (
    <div className="flex items-center w-full p-4 ml-2">
        <img src={`/assets/images/${format}.jpg`} className="w-14 h-14" alt="" />
        <span className="mx-2">{name}</span>
        <span className="ml-auto">{sizeInMb(sizeInBytes)}</span>
    </div>
  )
}

const sizeInMb = (bytes) => `${(bytes/(1024*1024)).toFixed(2)}mb`


export default RenderFile