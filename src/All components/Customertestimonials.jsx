

import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Customertestimonials = ({reviews}) => {
   
    const PrevArrow = ({ onClick }) => (
        <button
            className="absolute top-1/2 left-[-30px] transform -translate-y-1/2 bg-white shadow-lg border rounded-full p-2"
            onClick={onClick}
            aria-label="Previous Slide"
            style={{ zIndex: '5', position: 'relative', left: '1050px' }}
        >
            <svg className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
        </button>
    );

    const NextArrow = ({ onClick }) => (
        <button
            className="absolute top-1/2 right-[-30px] transform -translate-y-1/2 bg-white shadow-lg border rounded-full p-2"
            onClick={onClick}
            aria-label="Next Slide"
            style={{ zIndex: '5', position: 'relative', bottom: '300px', right: '40px', float: 'right' }}
        >
            <svg className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
        </button>
    );

    const settings = {
        dots: true, // Show dots for navigation
        infinite: true,
        speed: 500,
        slidesToShow: 2, // Show two reviews at a time
        slidesToScroll: 1, // Scroll one review at a time
        arrows: true, // Show arrows for navigation
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        centerMode: true, // Center the current slide
        centerPadding: '0', // Remove extra padding on the sides
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2, // Show two reviews at a time on larger screens
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1, // Show one review at a time on smaller screens
                },
            },
        ],
    };

    return (
        <section className="mt-[60px] px-4">
            <section className="text-[#051441] font-medium font-sans text-[40px] leading-[50px] mb-10 ml-[90px] ">
                <h2>Customer Testimonials</h2>
            </section>
            <div className="relative mx-auto max-w-[1200px]"> {/* Adjust max width here */}
                <Slider {...settings}>
                    {reviews.map((review, index) => (
                        <div key={index} className="p-6 bg-white border border-white shadow-lg rounded-lg mx-2 h-[250px] relative">
                            <div className="flex items-center mb-4">
                                <img src={review.logo} alt="Customer Logo" className="w-16 h-16 rounded-full mr-4" />
                                <div>
                                    <h3 className="font-semibold text-lg">{review.author}</h3>
                                    <div className="flex items-center">
                                        {[...Array(review.stars)].map((_, i) => (
                                            <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 17.27L18.18 21 16.54 14.97 22 9.24 15.81 8.63 12 2 8.19 8.63 2 9.24 7.46 14.97 5.82 21 12 17.27z" />
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-600 text-center">{review.content}</p>
                        </div>
                    ))}
                </Slider>
            </div>
            <section className="w-full h-[410px] bg-[#F0F0F2] mt-[70px] grid grid-cols-2 items-center">
                <section className="flex flex-col justify-center items-start pl-[50px]">
                    <h2 className="text-black font-roboto text-[45px] font-bold leading-[55px]">
                        Run Your Business <span className="text-[#FF8C00]">With PosBytz</span>
                        <br />
                        <span className="text-[#FF8C00]">ERP Software</span>
                    </h2>
                    <button className="bg-orange-500 w-[200px] rounded-full text-white h-[50px] text-[18px] font-semibold cursor-pointer mt-[40px]">
                        Signup for Free
                    </button>
                </section>
                <section className="flex justify-center">
                    <img src="https://posbytz.com/wp-content/uploads/2023/07/Untitled-13.png" className="w-[300px] h-[300px]" />
                </section>
            </section>
        </section>
    );
}

export default Customertestimonials;
