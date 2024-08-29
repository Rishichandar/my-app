import React, { useEffect, useState } from 'react';



const about = [
    {
        type: 'heading',
        data: "As part of the thriving product based company, we’re proud to offer benefits that help you feel and do your best. Access a range of benefits, resources and expert guidance to help you prioritize your well-being, so you can thrive with a healthy body and mind."
    }
];
const Worklife = ({activity}) => {
    
    return (
        <>
            <section className="flex justify-center items-center w-full h-full pt-[100px]">
                <section className="grid grid-cols-2 gap-10">
                    <section id="image-container" className="flex items-center justify-center">
                        <img src="https://posbytz.com/wp-content/uploads/2024/01/Working-life-Balance.png"></img>

                    </section>
                    <section id="content-container">
                        <h2 className="font-roboto text-[35px] font-bold text-[#1E201E]">Working Life Balance</h2>
                        {about.map((item, index) => {
                            if (item.type === "heading") {
                                return <p key={index} className="text-gray-800 font-roboto text-[19px] leading-[30px] w-[600px]">{item.data}</p>;
                            }
                        })}
                        <section className='pt-[70px]'>
                            {activity.map((item, index) => (
                                <div key={index} className="flex items-center space-x-4">
                                    <i aria-hidden="true" class="fas fa-check text-orange-500"></i> {/* Reduced size */}

                                    <p className="text-gray-800 font-roboto text-[16px] leading-[30px] " style={{ color: "grey" }}>{item.Activity}</p>
                                </div>
                            ))}
                        </section>



                    </section>
                </section>
            </section>
        </>
    )
}
export default Worklife;