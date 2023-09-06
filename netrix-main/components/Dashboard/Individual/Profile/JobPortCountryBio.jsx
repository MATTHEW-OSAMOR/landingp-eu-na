import React, { useEffect, useState } from 'react'
import { all as getCountries } from "country-codes-list"
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md'

function JobPortCountry() {
    const [menuOpen, setMenuOpen] = useState(false)
    const countries = getCountries()
    const [details, setDetails] = useState({ job: "", portfolio: "", country: "Nigeria", about:"" })

    useEffect(() => {
        if (menuOpen) {
            const menu = document.querySelector("#menu")
            const target = document.querySelector(`#${details.country}`)
            if (target) {
                menu.scrollTop = document.querySelector(`#${details.country}`).offsetTop;
            }
            // .scrollIntoView({behavior:"smooth",})
        }
    }, [menuOpen, details])
    const handleChange = (e) => {
        const temp = { ...details }
        temp[e.target.name] = e.target.value
        setDetails(temp)
    }
    return (
        <div>

            <div className='lg:border-b-[1px] lg:border-gray-300 py-10 lg:mb-0 mb-10 bg-white lg:bg-transparent rounded-2xl px-3 lg:px-0 lg:rounded-none'>
                <div className="flex flex-col lg:flex-row lg:px-14 lg:items-center">
                    <h1 className="text-netBlue font-medium lg:font-black text-xl">
                        Job
                    </h1>
                    <div style={{ flex: 1 }}></div>
                    <input placeholder='e.g Product Manager' name="job" onChange={handleChange} value={details.job} type="text" className="text-gray-700 rounded-md border-[1px] w-full lg:w-[60%] p-5 bg-transparent border-gray-600" />
                </div>
            </div>

            <div className='lg:border-b-[1px] lg:border-gray-300 py-10 lg:mb-0 mb-10 bg-white lg:bg-transparent rounded-2xl px-3 lg:px-0 lg:rounded-none'>
                <div className="flex flex-col lg:flex-row lg:px-14 lg:items-center">
                    <h1 className="text-netBlue font-medium lg:font-black text-xl">
                        Porfolio link
                    </h1>
                    <div style={{ flex: 1 }}></div>
                    <input placeholder='e.g https://example.com' name="portfolio" onChange={handleChange} value={details.portfolio} type="text" className="text-gray-700 rounded-md border-[1px] w-full lg:w-[60%] p-5 bg-transparent border-gray-600" />
                </div>
            </div>

            <div className='lg:border-b-[1px] lg:border-gray-300 py-10 lg:mb-0 mb-10 bg-white lg:bg-transparent rounded-2xl px-3 lg:px-0 lg:rounded-none'>
                <div className="flex flex-col lg:flex-row lg:px-14 lg:items-center">
                    <h1 className="text-netBlue font-medium lg:font-black text-xl">
                        Country
                    </h1>
                    <div style={{ flex: 1 }}></div>
                    <div className='relative w-full lg:w-[60%]'>
                        <div type="text" className="text-gray-700 items-center rounded-md border-[1px] w-full gap-3 p-5 bg-transparent border-gray-600 flex" onClick={() => {
                            setMenuOpen(!menuOpen)
                        }}>
                            <span>
                                {countries.find(c => c.countryNameEn == details.country)?.flag}
                            </span>
                            <span>{details.country}</span>
                            <div style={{ flex: 1 }}></div>
                            {!menuOpen ? <MdArrowDropDown size={30} /> : <MdArrowDropUp size={30} />}
                        </div>
                        <br />
                        <div className={`h-[300px] overflow-auto rounded-lg w-fit ${menuOpen ? "block" : "hidden"} absolute bg-white`} id="menu">
                            {
                                countries.map(cCountry => {
                                    return <div key={cCountry.countryNameEn} id={cCountry.countryNameEn}
                                        onClick={() => {
                                            handleChange({
                                                target: {
                                                    name: "country",
                                                    value: cCountry.countryNameEn
                                                }
                                            })
                                            setMenuOpen(false)
                                        }}
                                        className={`cursor-pointer border-b-[1px] border-gray-300 hover:bg-gray-200 py-10 flex ${details.country == cCountry.countryNameEn ? "bg-gray-200" : "bg-white"} gap-2 px-3`}>
                                        <span>
                                            {cCountry.flag}
                                        </span>
                                        <span>{cCountry.countryNameEn}</span>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className='lg:border-b-[1px] lg:border-gray-300 py-10 lg:mb-0 mb-10 bg-white lg:bg-transparent rounded-2xl px-3 lg:px-0 lg:rounded-none'>
                <div className="flex flex-col lg:flex-row lg:px-14 lg:items-center">
                    <div>
                        <h1 className="text-netBlue font-medium lg:font-black text-xl">
                            Bio
                        </h1>
                        <h1 className="text-xl opacity-40">
                            Write a short introduction
                        </h1>
                    </div>
                    <div style={{ flex: 1 }}></div>
                    <textarea type="text" rows={4} className="text-gray-700 rounded-md border-[1px] w-full lg:w-[60%] p-5 bg-transparent border-gray-600" 
                        placeholder='Contents Here..' name='about' onChange={handleChange} value={details.about}
                    ></textarea>
                </div>
            </div>
        </div>
    )
}

export default JobPortCountry