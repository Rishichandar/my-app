


import React, { useRef, useState, useEffect } from 'react';

// Remove all the import statements for images
// import brandlogo1 from 'public/brand image/brandlogo1.png';
// ...

export default function Logocontainer() {
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target); 
                }
            },
            {
                threshold: 0.1, 
            }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);

    // Array of image paths
    const brandLogos = [
        '/brand image/brandlogo1.png',
        '/brand image/brandlogo2.png',
        '/brand image/brandlogo3.png',
        '/brand image/brandlogo4.png',
        '/brand image/brandlogo5.png',
        '/brand image/brandlogo6.png',
        '/brand image/brandlogo7.png',
        '/brand image/brandlogo8.png',
        '/brand image/brandlogo9.png',
        '/brand image/brandlogo10.png',
        '/brand image/brandlogo11.png',
        '/brand image/brandlogo12.png',
        '/brand image/brandlogo13.png',
        '/brand image/brandlogo14.png',
        '/brand image/brandlogo15.png',
        '/brand image/brandlogo16.png',
        '/brand image/brandlogo17.png',
        '/brand image/brandlogo18.png',
        '/brand image/brandlogo19.png'
    ];

    return (
        <>
            <section>
                <div className="grid place-items-center mt-[100px]">
                    <section className="text-center">
                        <h2 className="text-4xl leading-[55px] font-semibold text-[#2c2c51] mb-4">
                            Integrations
                        </h2>
                        <p>
                            Connect{' '}
                            <a
                                href="https://posbytz.com/integration/"
                                className="text-lg text-gray-600 font-roboto"
                            >
                                third-party software integrations
                            </a>{' '}
                            to PosBytz to keep your business running smoothly
                        </p>
                    </section>
                </div>
                <div
                    id="logo-container"
                    className="flex justify-center items-center p-6"
                    ref={containerRef}
                >
                    <ul className={`grid grid-cols-7 gap-logo-gap ${isVisible ? 'animate-fade-in' : ''}`}>
                        {brandLogos.map((logo, index) => (
                            <li
                                key={index}
                                className={`animate-rotate-left delay-${(index + 1) * 1000}`}
                            >
                                <img
                                    src={logo}
                                    alt={`Brand Logo ${index + 1}`}
                                    className="w-[100px] h-[100px] rounded-lg"
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    );
}
