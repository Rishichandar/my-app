
import React, { useRef, useState, useEffect } from 'react';

// brand logos
import brandlogo1 from '../brand image/brandlogo1.png';
import brandlogo2 from '../brand image/brandlogo2.png';
import brandlogo3 from '../brand image/brandlogo3.png';
import brandlogo4 from '../brand image/brandlogo4.png';
import brandlogo5 from '../brand image/brandlogo5.png';
import brandlogo6 from '../brand image/brandlogo6.png';
import brandlogo7 from '../brand image/brandlogo7.png';
import brandlogo8 from '../brand image/brandlogo8.png';
import brandlogo9 from '../brand image/brandlogo9.png';
import brandlogo10 from '../brand image/brandlogo10.png';
import brandlogo11 from '../brand image/brandlogo11.png';
import brandlogo12 from '../brand image/brandlogo12.png';
import brandlogo13 from '../brand image/brandlogo13.png';
import brandlogo14 from '../brand image/brandlogo14.png';
import brandlogo15 from '../brand image/brandlogo15.png';
import brandlogo16 from '../brand image/brandlogo16.png';
import brandlogo17 from '../brand image/brandlogo17.png';
import brandlogo18 from '../brand image/brandlogo18.png';
import brandlogo19 from '../brand image/brandlogo19.png';

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
                        {[brandlogo1, brandlogo2, brandlogo3, brandlogo4, brandlogo5, brandlogo6, brandlogo7, brandlogo8, brandlogo9, brandlogo10, brandlogo11, brandlogo12, brandlogo13, brandlogo14, brandlogo15, brandlogo16, brandlogo17, brandlogo18, brandlogo19].map((logo, index) => (
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
