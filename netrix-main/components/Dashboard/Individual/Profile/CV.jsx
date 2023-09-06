import { Report } from 'notiflix'
import React, { useEffect, useRef, useState } from 'react'
import { MdCloudUpload } from 'react-icons/md'

function CV() {
    const preventDefault = (e) => e.preventDefault()
    const [file, setFile] = useState(false)
    const btn = useRef()
    const mimes = "application/vnd.oasis.opendocument.text, application/epub+zip, application/epub+zip, application/pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    useEffect(() => {
        if (file) {
            if (!mimes.includes(file.type)) {
                setFile(false)
                Report.failure("Invalid File",
                    "Not Suported File Type. The only type of files supported are: Only .doc, .docx, .pdf, .odt or .rtf (Optional)",
                    "I Understand")
            }
        }
    }, [file])
    return (
        <div className='lg:border-b-[1px] border-gray-300 py-10'>
            <div className='flex flex-col lg:flex-row lg:px-14 items-start'>
                <h1 className="text-netBlue font-medium lg:font-black text-xl lg:pb-0 pb-5">
                    Upload your resume/cv
                </h1>
                <div style={{ flex: 1 }}></div>
                <div className='cursor-pointer border-[1px] border-gray-600 p-5 text-center rounded-md w-full lg:w-fit lg:max-w-[70%]'
                    onClick={() => btn.current.click()}
                    onDragOver={preventDefault}
                    onDrop={e => {
                        e.preventDefault()
                        const droppedFiles = Array.from(e.dataTransfer.files);
                        setFile(droppedFiles[0])
                    }}
                >
                    <input type="file" ref={btn} accept={mimes} className="hidden" onChange={e => {
                        if (e.target.files) {
                            setFile(e.target.files[0])
                        }
                    }} />
                    <div className="rounded-full bg-gray-300 p-3 w-fit mx-auto">
                        <MdCloudUpload size={30} />
                    </div>
                    <br />
                    {file ?
                        <div>
                            {file.name}
                            <br />
                            {file.size > (1.1 * 1000 * 1000) ? (file.size / 1100000).toFixed(2)+"MB" : (file.size / 1000).toFixed(2)+"KB"}
                        </div>
                        :
                        <div>
                            <span className="font-bold text-netBlue">
                                Click to upload&nbsp;
                            </span>
                            or drag and drop it here<br />
                            <span className="opacity-60">
                                Only .doc, .docx, .pdf, .odt or .rtf
                                (Optional)
                            </span>
                        </div>}
                </div>
                <div style={{ flex: 1 }}></div>
            </div>
        </div>
    )
}

export default CV