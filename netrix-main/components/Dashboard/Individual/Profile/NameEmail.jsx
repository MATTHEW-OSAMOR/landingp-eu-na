import React, { useState } from 'react'

function NameEmail() {
    const [details, setDetails] = useState({ firstName: "", lastName: "", email:"" })
    const handleChange = (e) => {
        const temp = { ...details }
        temp[e.target.name] = e.target.value
        setDetails(temp)
    }
    return (
        <>
            <div className='lg:border-b-[1px] lg:border-gray-300 py-10 lg:mb-0 mb-10 bg-white lg:bg-transparent rounded-2xl px-3 lg:px-0 lg:rounded-none'>
                <div className="flex flex-col lg:flex-row lg:px-14 lg:items-center">
                    <h1 className="text-netBlue font-medium lg:font-black text-xl">
                        Full Name
                    </h1>
                    <div style={{ flex: 1 }}></div>
                    <div className='w-full lg:w-[60%]'>
                        <input type="text"
                            value={details.firstName} name="firstName" onChange={handleChange}
                            placeholder='First Name' className="text-gray-700 rounded-md w-full mb-2 border-[1px] p-5 bg-transparent border-gray-600 block"
                        />
                        <input type="text"
                            value={details.lastName} name="lastName" onChange={handleChange}
                            placeholder='Last Name' className="text-gray-700 rounded-md w-full border-[1px] p-5 bg-transparent border-gray-600"
                        />
                    </div>
                </div>
            </div>

            <div className='lg:border-b-[1px] lg:border-gray-300 py-10 lg:mb-0 mb-10 bg-white lg:bg-transparent rounded-2xl px-3 lg:px-0 lg:rounded-none'>
                <div className="flex flex-col lg:flex-row lg:px-14 lg:items-center">
                    <h1 className="text-netBlue font-medium lg:font-black text-xl">
                        Email Address
                    </h1>
                    <div style={{ flex: 1 }}></div>
                    <input type="text"  placeholder="e.g johndoe@gmail.com"
                        value={details.email}  onChange={handleChange} name="email"
                        className="text-gray-700 rounded-md border-[1px] w-full lg:w-[60%] p-5 bg-transparent border-gray-600"
                    />
                </div>
            </div>
        </>
    )
}

export default NameEmail