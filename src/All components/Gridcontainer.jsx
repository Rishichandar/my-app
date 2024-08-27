
import { useState, useEffect } from "react";
import React from 'react';
import axios from 'axios';

export default function Gridcontainer() {

    //for data generation
    const [data, setData] = useState([]);
    console.log("data", data);

    useEffect(() => {
        // Fetch data from combinedData.json
        const fetchData = async () => {
            try {
                const response = await axios.get('/combinedData.json'); // Make sure combinedData.json is served correctly
                setData(response.data.data);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchData();
    }, []);
    return (
        <>
            <section className="flex flex-col items-center justify-center min-h-screen mt-[-40px] text-center">
                <h2 className="text-black font-roboto text-[50px] font-semibold leading-[65px] mb-4">
                    Reasons to Choose PosBytz ERP Software
                </h2>
                <span className="text-lg mb-2 text-black font-roboto text-[35px] ">One of the Best Cloud ERP Software for</span>
                <span className="text-lg mb-2 text-black font-roboto text-[32px] ">Small & Medium businesses</span>
                <h3 className="text-[60px] font-roboto font-bold leading-[65px] mb-6 text-[#ff8c00]">
                    PosBytz ERP
                </h3>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 ml-[100px] mt-[-150px]">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="border-solid border-4 border-[#B0FF37] transition-all duration-300 p-5 bg-white shadow-md rounded-custom overflow-hidden h-[450px] w-[300px]"
                    >
                        <img src={item.img} alt={item.title} className="w-15 h-20 object-cover mb-4 ml-[90px]" />
                        <h3 className="text-custom text-25 font-medium mb-2 font-roboto flex justify-center items-center" style={{ color: "orange" }}>{item.title}</h3>
                        <span className="text-sm text-black-500 mb-2 flex justify-center items-center">{item.subtitle}</span>
                        <p className="text-base text-gray-500 flex justify-center items-center">{item.about}</p>
                    </div>
                ))}
            </section>
        </>
    )
}
