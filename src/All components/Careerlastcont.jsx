
import React from 'react';

const Careerlastcont = () => {
    return (
        <>

            <div className="relative w-full h-[450px]">
                <section
                    id="image"
                    // className="absolute inset-0 bg-cover bg-center bg-no-repeat z-10"
                    className='bg-fixed bg-contain w-full, h-[450px] '
                    style={{
                        backgroundImage: "url('https://posbytz.com/wp-content/uploads/2024/02/FUN-@-WORK.png')",
                    }}
                >
                    <div className="absolute inset-0 bg-orange-500 opacity-50"></div>

                    <div className="relative z-20 flex items-center justify-start h-full px-10">
                        <div className="text-left">
                            <h1 className="text-6xl font-bold mb-4 text-white">FUN @ WORK</h1>
                            <p className="text-gray-100 font-roboto text-[19px] leading-[30px] text-white">
                                Our HR Team Work To Bring Joy And Happiness At Work By Enabling
                            </p>
                        </div>
                    </div>
                </section>
            </div>


        </>
    );
};

export default Careerlastcont;
