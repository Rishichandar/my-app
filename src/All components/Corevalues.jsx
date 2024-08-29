
import { useState, useEffect } from "react";

const about = [
    {
        type: 'heading',
        data: "These are some of the values we live by as a company. We work by them too. We’re building a platform and products we believe in that helps common people to build their business and scale with powerful solution, elegance, and simplicity."
    }
];

const Corevalues = ({icon}) => {
   

    return (
        <>
            <section className="flex justify-center items-center w-full h-full pt-[100px]">
                <section className="grid grid-cols-2 gap-10">
                    <section id="left-container">
                        <h2 className="font-roboto text-[35px] font-bold text-[#1E201E]">Our Core Values</h2>
                        {about.map((item, index) => {
                            if (item.type === "heading") {
                                return <p key={index} className="text-gray-800 font-roboto text-[19px] leading-[30px] w-[600px]">{item.data}</p>;
                            }
                        })}
                        <section className="grid grid-cols-2 gap-4 pt-10">
                            {icon.map((item, index) => (
                                <div key={index} className="flex items-center space-x-4">
                                    <img src={item.icon} alt={item.Text} className="w-7 h-7" /> {/* Reduced size */}
                                    <p className="text-gray-800 font-roboto text-[18px] leading-[30px] font-bold">{item.Text}</p>
                                </div>
                            ))}
                        </section>
                    </section>
                    <section id="right-container" className="flex items-center justify-center">
                        <img src="https://posbytz.com/wp-content/uploads/2024/01/Our-core-values.png" alt="Core Values" />
                    </section>
                </section>
            </section>
        </>
    );
};

export default Corevalues;
