
import React, { useState, useEffect } from 'react';

export default function Feature({ features }) {
   
    const [selectedItem, setSelectedItem] = useState(1);
    

    const handleItemClick = (index) => {
        setSelectedItem(index === selectedItem ? null : index);
    };

    return (
        <>
            <section>
                <h2 className='text-black font-roboto text-[50px] font-bold leading-[65px] text-center mt-[40px] mb-[36px]'>
                    Features of Our ERP Software?
                </h2>
                <section className='mt-[30px] flex justify-between list-none p-0 m-0 cursor-pointer'>
                    {features.map((feature, index) => (
                        <li
                            key={index}
                            onClick={() => handleItemClick(index)}
                            className='flex flex-col items-center gap-[10px] flex-1 text-center'
                        >
                            <img src={feature.img} className='max-w-[100px] h-auto' alt={feature.title} />
                            <span className='font-roboto text-[14px] font-semibold text-gray-800'>{feature.title}</span>
                        </li>
                    ))}
                </section>

                {features.map((feature, index) => (
                    selectedItem === index && (
                        <section key={index} className='first grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 absolute left-[100px]'>
                            <div>
                                <h3 className='mb-5 text-orange-600 font-semibold'>{feature.additionalHeading}</h3>
                                <ul className='space-y-4 font-semibold'>
                                    {feature.points && feature.points.map((point, idx) => (
                                        <li key={idx} className="flex items-center gap-2">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                id="Layer_1"
                                                data-name="Layer 1"
                                                viewBox="0 0 17.61 17.3"
                                                className="w-4 h-4"
                                            >
                                                <defs>
                                                    <style>{".cls-1{fill:#f58120;}"}</style>
                                                </defs>
                                                <path
                                                    className="cls-1"
                                                    d="M316.15,487c-.94,1.16-1.84,2.35-2.67,3.58-2.29,3.4-4.19,7-6.2,10.58-.51.89-1,1.77-1.58,2.65-.41.67-.55.66-1,0s-.72-1.29-1.06-1.94a30.6,30.6,0,0,0-5-7.06,1.92,1.92,0,0,1-.17-.27c3,.86,4.74,3,6.6,5.14C308.58,495.22,311.74,490.56,316.15,487Z"
                                                    transform="translate(-298.54 -487)"
                                                />
                                            </svg>
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex justify-center items-center">
                                <img src={feature.extraImage} className="w-full h-auto max-w-sm" alt="Extra Feature Image" />
                            </div>
                        </section>
                    )
                ))}
            </section>
        </>
    );
}
