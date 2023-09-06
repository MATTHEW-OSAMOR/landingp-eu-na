import React from 'react'
function Employment() {
    return (
        <div className='relative'>
            <div className='lg:border-b-[1px] lg:border-gray-300 py-10 lg:mb-0 mb-10 bg-white lg:bg-transparent rounded-2xl px-3 lg:px-0 lg:rounded-none'>
                <div className="flex flex-col lg:flex-row lg:px-14 lg:items-center">
                    <h1 className="text-netBlue font-medium lg:font-black text-xl pb-5 lg:pb-0">
                        Employment History
                    </h1>
                    <div style={{ flex: 1 }}></div>
                    <div className='grow shrink-0'>
                        <div className='grid lg:grid-cols-2 w-full gap-3' >
                            <input
                                type="text" placeholder='Role'
                                className="text-gray-700 rounded-md border-[1px] w-full p-5 bg-transparent border-gray-600" />
                            <input
                                type="text" placeholder='Company'
                                className="text-gray-700 rounded-md border-[1px] w-full p-5 bg-transparent border-gray-600" />
                            <input
                                type="text" placeholder='Country'
                                className="text-gray-700 rounded-md border-[1px] w-full p-5 bg-transparent border-gray-600" />
                            <input
                                type="text" placeholder='Jobtype'
                                className="text-gray-700 rounded-md border-[1px] w-full p-5 bg-transparent border-gray-600" />
                        </div>
                        <button className="mt-3 bg-netYellow px-5 py-3 font-semibold text-sm rounded-md hover:bg-yellow-500 active:bg-yellow-600">
                            + Add Job
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Employment