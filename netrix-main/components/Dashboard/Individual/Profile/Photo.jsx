import Image from 'next/image'
import { Report } from 'notiflix'
import React, { useEffect, useRef, useState } from 'react'
import { MdCloudUpload } from 'react-icons/md'

function Photo() {
    const preventDefault = (e) => e.preventDefault()
    const [file, setFile] = useState(false)
    const btn = useRef()
    const mimes = "image/jpeg, image/png, image/svg, image/gif"
    const [preview, setPreview] = useState(false)
    useEffect(() => {
        if (file) {
            if (!mimes.includes(file.type)) {
                setFile(false)
                setPreview(false)
                return Report.failure("Invalid File",
                    "Not Suported File Type. The only type of files supported are: Only SVG, PNG, JPEG or GIF Images",
                    "I Understand")

            }
            if (file.size > (5 * 1100 * 1000)) {
                setFile(false)
                setPreview(false)
                return Report.failure("File Too Large",
                    "Current Image Is too large. please compress image to reduce size. The Maximum image file size is 5MB",
                    "I Understand")
            }

            const reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onload = () => {
                setPreview(reader.result)
            }
        }
    }, [file])

    return (
        <div>
            <div className='lg:border-b-[1px] lg:border-gray-300 py-10 lg:mb-0 mb-10 bg-white lg:bg-transparent rounded-2xl px-3 lg:px-0 lg:rounded-none'>
                <div className='flex flex-col lg:flex-row lg:px-14 lg:items-center'>
                    <h1 className="text-netBlue font-medium lg:font-black text-xl">
                        Your Photo
                    </h1>
                    <div style={{ flex: 1 }}></div>
                    <div className='flex flex-col lg:flex-row lg:justify-end lg:items-center'>
                        <Image width={120} height={120} src={preview || "https://th.bing.com/th/id/OIP.h0hPZzAziPf3v-srHQTdWQHaHa?pid=ImgDet&rs=1"} alt="profile"
                            className='w-[120px] h-[120px] rounded-full border-[2px] border-gray-900 lg:me-8 mx-auto my-5 lg:my-0' />
                        <div style={{ flex: 1 }}></div>
                        <div className='cursor-pointer border-[1px] border-gray-600 p-5 text-center rounded-md '
                            onClick={() => btn.current.click()}
                            onDragOver={preventDefault}
                            onDrop={e => {
                                e.preventDefault()
                                const droppedFiles = Array.from(e.dataTransfer.files);
                                setFile(droppedFiles[0])
                            }}
                        >
                            <div className="rounded-full bg-gray-300 p-3 w-fit mx-auto">
                                <MdCloudUpload size={30} />
                            </div>
                            <input type="file" ref={btn} accept={mimes} className="hidden" onChange={e => {
                                if (e.target.files) {
                                    setFile(e.target.files[0])
                                }
                            }} />
                            <br />
                            {file ?
                                <div>
                                    {file.name}
                                    <br />
                                    {file.size > (1.1 * 1000 * 1000) ? (file.size / 1000000).toFixed(2) + "MB" : (file.size / 1000).toFixed(2) + "KB"}
                                </div>
                                :
                                <div>
                                    <span className="font-bold text-netBlue">
                                        Click to upload&nbsp;
                                    </span>
                                    or drag and drop<br />
                                    <span className="opacity-60">
                                        SVG, PNG, JPEG or GIF (max. 800x400px)
                                    </span>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Photo