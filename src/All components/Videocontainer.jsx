

import { useState } from 'react';

export default function Videocontainer() {
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => {
        setIsPlaying(true);
    };

    // Array to hold the content data
    const contentArray = [
        {
            heading: "How it Works?",
            description: "Checkout how you can Automate your Business with PosBytz ERP Software",
            links: [
                {
                    text: "Retail",
                    url: "https://posbytz.com/retail/"
                },
                {
                    text: "Restaurant",
                    url: "https://posbytz.com/restaurant/"
                }
            ]
        }
    ];

    return (
        <>
            {contentArray.map((content, index) => (
                <section
                    key={index}
                    className="flex flex-col items-center justify-center text-center mt-[600px]"
                >
                    <h2 className="text-black font-roboto text-[60px] font-bold leading-[65px]">
                        {content.heading}
                    </h2>
                    <span className='mt-8 font-semibold'>
                        {content.description}
                    </span>
                    <div className='mt-6'>
                        <p>
                            Discover how our{" "}
                            {content.links.map((link, idx) => (
                                <span key={idx}>
                                    <a
                                        href={link.url}
                                        className=''
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ color: "#ff9900" }}
                                    >
                                        {link.text}
                                    </a>
                                    {idx < content.links.length - 1 && " and "}
                                </span>
                            ))}{" "}
                            ERP software can revolutionize your business operations today!
                        </p>
                    </div>
                </section>
            ))}
            <section id="vid" className="w-full max-w-5xl h-[80vh] flex justify-center items-center ml-[180px] mt-[30px]">
                {!isPlaying ? (
                    <div
                        className="relative w-full h-full cursor-pointer"
                        onClick={handlePlay}
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: 'url("https://i.ytimg.com/vi_webp/xxQzhDkWPpc/maxresdefault.webp")' }}
                        />
                        <div className="absolute inset-0 flex justify-center items-center">
                            <button className="p-4 bg-gray-800 rounded-full">
                                <svg className="w-12 h-12 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                            </button>
                        </div>
                    </div>
                ) : (
                    <video
                        controls
                        className="w-full h-full"
                        autoPlay
                        src="blob:https://www.youtube.com/ea6181bc-cefd-4518-9f42-5c88d859494b"
                    >
                        Your browser does not support the video tag.
                    </video>
                )}
            </section>
        </>
    );
}
