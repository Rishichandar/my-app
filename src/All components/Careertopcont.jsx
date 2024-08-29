


const Careertopcont = () => {
    return (
        <>
            <section className="relative w-full h-[630px]">
                <section
                    className="w-full h-full bg-[#E1D7C6] grid grid-cols-2 items-center justify-center text-white"
                    style={{ position: "absolute", top: '15px', zIndex: '-1' }}
                >
                    <section id="content" className="flex flex-col items-start justify-center pl-[70px]">
                        <h2 className="font-roboto text-[20px] font-bold" style={{ color: '#3C3D37' }}>CAREERS AT POSBYTZ</h2>
                        <h1 className="font-roboto text-[56px] font-bold text-[#1E201E]">Why Join us?</h1>
                        <p className="text-gray-800 font-roboto text-[19px] leading-[30px]" style={{ color: '#3C3D37' }}>
                            Explore social-friendly, upskilling opportunities and join our mission to make work life simpler, more pleasant and more productive.
                        </p>
                        <button className="bg-[#ff8c00] text-white rounded-full text-sm font-semibold w-[200px] h-[50px] mt-4 cursor-pointer">
                            SIGN UP FOR FREE
                        </button>
                    </section>
                    <section id="Image-container" className="flex justify-center items-center">
                        <img 
                            src="https://posbytz.com/wp-content/uploads/2024/01/Why-join-us-01-1024x768.png" 
                            alt="Why Join Us" 
                            className="w-[80%] h-[auto] object-cover"
                        />
                    </section>
                </section>
            </section>
        </>
    )
}

export default Careertopcont;
