const Emailsupport = () => {
    return (
        <>
            <section>
                <section className="text-center mx-auto mt-[80px]">
                    <h2 className="text-black font-roboto text-[40px] font-normal">Email Support</h2>
                    <div className="mt-3">
                        <p className="text-gray-800" style={{ color: 'grey' }}>Please submit your questions, comments, and other inquires below along with your contact</p>
                        <p className="text-gray-800 mt-3" style={{ color: 'grey' }}>information. One of our team members will reach out to you promptly.</p>
                    </div>
                </section>
                <section className="mt-[50px] flex flex-col items-center space-y-4">
                    <input
                        size="40"
                        maxLength="400"
                        className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required 
                                text-[15px] leading-[60px] font-normal font-poppins text-[#222d39]
                                h-[70px] rounded-[4px] bg-white shadow-xl w-[540px] border border-white 
                                pl-[30px]"
                        aria-required="true"
                        aria-invalid="false"
                        placeholder="Your Name"
                        value=""
                        type="text"
                        name="your-name"
                    />
                    <input
                        size="40"
                        maxLength="400"
                        className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required 
                                text-[15px] leading-[60px] font-normal font-poppins text-[#222d39]
                                h-[70px] rounded-[4px] bg-white shadow-xl w-[540px] border border-white 
                                pl-[30px]"
                        aria-required="true"
                        aria-invalid="false"
                        placeholder="Buissness Name"
                        value=""
                        type="text"
                        name="Buissness Name"
                    />
                    <input
                        size="40"
                        maxLength="400"
                        className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required 
                                text-[15px] leading-[60px] font-normal font-poppins text-[#222d39]
                                h-[70px] rounded-[4px] bg-white shadow-xl w-[540px] border border-white 
                                pl-[30px]"
                        aria-required="true"
                        aria-invalid="false"
                        placeholder="Your Email"
                        value=""
                        type="text"
                        name="Your Email"
                    />
                    <input
                        size="40"
                        maxLength="400"
                        className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required 
                                text-[15px] leading-[60px] font-normal font-poppins text-[#222d39]
                                h-[70px] rounded-[4px] bg-white shadow-xl w-[540px] border border-white 
                                pl-[30px]"
                        aria-required="true"
                        aria-invalid="false"
                        placeholder="Subject"
                        value=""
                        type="text"
                        name="Subject"
                    />
                    <textarea
                        rows="3"
                        maxLength="400"
                        className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required 
                            text-[15px] leading-[60px] font-normal font-poppins text-[#222d39]
                            h-[90px] rounded-[4px] bg-white shadow-xl w-[540px] border border-white 
                            pl-[30px] resize-none"
                        aria-required="true"
                        aria-invalid="false"
                        placeholder="Your Message"
                        name="Your-Message"
                    />
                    <section className='pt-6'>
                        <button className="bg-orange-500 text-white text-sm font-semibold w-[160px] h-[50px] mr-[380px]">
                            Submit Ticket
                        </button>
                    </section>


                </section>
                <section className="grid grid-cols-2 items-center justify-center ml-[200px] mt-[100px] relative bottom-[20px]">
                    <div className="flex flex-col justify-center items-start">
                        <h2 className="text-black font-roboto text-[30px] font-normal">Whatsapp Support</h2>
                        <div className="mt-3">
                            <p className="text-gray-800" style={{color:'grey'}}>Send message to our Whatsapp number. One of our team members will reach out to you promptly.</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <button className="bg-orange-500 text-white rounded-full text-sm font-semibold w-[160px] h-[45px] cursor-pointer ">
                            Send message
                        </button>
                    </div>
                </section>


            </section>

        </>
    )
}

export default Emailsupport;