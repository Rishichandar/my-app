
import Brandscarousel from './Brandscarousel';

export default function Trustedbrands() {
    

    return (
        <>
           <section className="mt-[190px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
                {/* Left Column */}
                <div className="flex flex-col justify-center ml-4 md:ml-[100px] mb-8">
                    <h2 className="text-[#2c2c51] font-sans text-[40px] font-light leading-[55px]">
                        Trusted by
                    </h2>
                    <h2 className="text-[#2c2c51] font-sans text-[50px] font-bold leading-[55px]">
                        Great Brands
                    </h2>
                    <p className="font-thin leading-[55px] text-gray-700 mt-[10px]">
                        Over 5000+ businesses in 15 countries have registered with PosBytz.
                    </p>
                    <button className="bg-orange-500 w-[180px] rounded-full text-white border-none h-[40px] text-[15px] font-semibold cursor-pointer mt-[40px]">
                        Get Started for Free
                    </button>
                </div>
                
                {/* Right Column */}
                <div  className="w-full max-w-4xl ml-[-60px]">
                    <Brandscarousel />
                </div>
            </div>
        </section>
        </>
    );
}
