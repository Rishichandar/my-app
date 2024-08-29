


import React, { useEffect, useState } from 'react';


const GridComponent = ({gridData}) => {
   

    return (
        <section className="text-center mb-[50px]">
            <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Our Services</h2>
                <p className="text-lg text-gray-600">
                    Explore our comprehensive range of services designed to enhance your business operations.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {gridData.map((item, index) => (
                    <div key={index} className="border p-4 rounded-lg shadow-lg bg-white flex flex-col items-center p-6 bg-white border border-white shadow-lg rounded-lg mx-2 h-[300px] relative">
                        <div className="flex flex-col items-center mb-4">
                            <div className="flex items-center justify-center bg-white p-2 rounded-full border-4 border-orange-500">
                                <div
                                    className="w-10 h-10"
                                    dangerouslySetInnerHTML={{ __html: item.img }}
                                />
                            </div>
                            <div className="text-center mt-4">
                                <h3 className="text-xl font-semibold text-[#051441]">{item.title}</h3>
                            </div>
                        </div>
                        <p className="text-gray-700 text-center" style={{ color: 'grey' }}>{item.about}</p>
                        <span className='pt-10' style={{color:'grey'}}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                        </span>
                    </div>
                ))}
            </div>

        </section>
    );
};

export default GridComponent;
