import 'react-phone-input-2/lib/style.css';


const Contactbluediv = () => {
    

    return (
        <>
            <section className="relative w-full h-[460px]">
                <img
                    src="https://posbytz.com/wp-content/themes/saasland/assets/img/banners/banner_bg2.png"
                    alt="Background"
                    className="w-full h-full object-cover"
                    style={{ zIndex: '5' }}
                />
                <section
                    className="w-full h-full bg-[#694F8E] flex flex-col items-center justify-center text-white"
                    style={{ position: "absolute", top: '5px', zIndex: '-1' }}
                >
                    {/* Title */}
                    <h1 className="text-4xl font-bold mb-4">Contact Us</h1>

                    {/* Breadcrumb */}
                    <ol className="flex space-x-4">
                        <li>Home</li>
                        <svg className="h-6 w-6 text-gray-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 18 15 12 9 6" />
                        </svg>
                        <li>Contact us</li>
                    </ol>
                </section>

             

            </section>
        </>
    );
};

export default Contactbluediv;
