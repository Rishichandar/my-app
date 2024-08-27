
import React from 'react';
import img from '../All Pages/Assets/images.png';

export default function Toptitle() {
    return (
        <>
            <section>
                <section className="flex justify-center items-start h-[50vh] text-center pt-[110px]">
                    <p className="text-black font-roboto text-[50px] font-bold leading-[65px]">
                        Your All-in-one Cloud based
                        <br />
                        Restaurant & Retail ERP Software
                    </p>
                </section>

                <section className="flex justify-center text-center p-[20px]">
                    <p className="text-gray-800 font-roboto text-[20px] leading-[30px] max-w-[800px] mt-[-79px]">
                        PosBytz ERP software is the perfect solution for simplifying your business operations
                        <br />
                        from Ecommerce, inventory, Accounting, CRM, and HR & Payroll.
                    </p>
                </section>
                <button
                    className="bg-[#fb8500] w-[185px] rounded-[25px] text-center text-whitesmoke border-none h-[50px] text-[15px] font-semibold cursor-pointer absolute top-[67%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] z-[-1]"
                >
                    Get Started
                </button>
                <section className="flex justify-center pt-[20px]">
                    <img src={img} alt="Your Image" className="max-w-full h-auto" />
                </section>
            </section>
        </>
    );
}
