import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

const DropZoneComponent = () => {
    const onDrop = useCallback((acceptedFiles) => {
        console.log(acceptedFiles)
    }, []);

    const { getRootProps, getInputProps, isDragAccept, isDragReject } = useDropzone({
        onDrop, 
        multiple: false, 
        accept:"image/jpeg,image/png,audio/mpeg"
    })

    return (
        <div className="p-4 w-full">
            <div {...getRootProps()} className="w-full h-80 rounded-md cursor-pointer focus:outline-none">
                <input {...getInputProps()}/>
                <div className="flex flex-col h-full space-y-3 items-center justify-center">
                    <img src="/assets/images/folder.png" alt="folder" className="w-16 h-16"/>
                    {isDragReject ? (
                        <p>Only pdf, word and excel files are allowed</p> ) : (
                            <div>
                                <p>Drag and drop files</p>
                                <p className="mt-2 text-base text-slate-500">Pdf, Docx, Xlsx only</p>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default DropZoneComponent