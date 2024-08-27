

import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
import React, { useState } from 'react';

const Contactcenterdiv = () => {
    const [phone, setPhone] = useState('');
    const [country, setCountry] = useState('United States');

    const handleCountryChange = (value, country) => {
        setPhone(value);
        setCountry(country.name);
    };

    return (
        <>
            <section>
                {/* Centered Content */}
                <section className="text-center mx-auto mt-[80px]">
                    <h2 className="text-black font-roboto text-[40px] font-normal">For all general Inquiries</h2>
                    <p className="text-gray-600">
                        <span className="block">Please submit your questions, comments,</span>
                        <span className="block">and other inquiries below along with your contact information.</span>
                        <span className="block">One of our team members will reach out to you promptly.</span>
                    </p>
                </section>

                <section className="mt-[50px] flex flex-col items-center space-y-4">
                    {/* Row for Name and Email */}
                    <div className="flex space-x-4">
                        <input
                            size="40"
                            maxLength="400"
                            className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required 
                                text-[15px] leading-[60px] font-normal font-poppins text-[#222d39]
                                h-[50px] rounded-[4px] bg-white shadow-xl w-[260px] border border-white 
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
                                h-[50px] rounded-[4px] bg-white shadow-xl w-[260px] border border-white 
                                pl-[30px]"
                            aria-required="true"
                            aria-invalid="false"
                            placeholder="Your Email"
                            value=""
                            type="text"
                            name="Your Email"
                        />
                    </div>

                    {/* Row for Phone Number and Country */}
                    <div className="flex space-x-4">
                        <PhoneInput
                            country={'us'} // Default country code
                            value={phone}
                            onChange={handleCountryChange}
                            inputStyle={{
                                border: 'none',
                                boxShadow: 'none',
                                background: 'transparent',
                                height: '50px',
                                width: '260px',
                                paddingLeft: '30px',
                                fontSize: '15px',
                                color: '#222d39',
                                fontFamily: 'Poppins, sans-serif'
                            }}
                            buttonStyle={{
                                background: 'white',
                                border: 'none'
                            }}
                            containerStyle={{
                                width: '260px',
                                border: '1px solid white',
                                borderRadius: '4px',
                                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)'
                            }}
                            dropdownStyle={{ borderRadius: '4px' }}
                            placeholder="Your Phone Number"
                        />
                        <input
                            size="40"
                            maxLength="400"
                            className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required 
                                text-[15px] leading-[60px] font-normal font-poppins text-[#222d39]
                                h-[50px] rounded-[4px] bg-white shadow-xl w-[260px] border border-white 
                                pl-[30px]"
                            aria-required="true"
                            aria-invalid="false"
                            placeholder="Country"
                            value={country}
                            type="text"
                            name="country"
                            readOnly
                        />
                    </div>

                    {/* Subject */}
                    <input
                        size="40"
                        maxLength="400"
                        className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required 
                            text-[15px] leading-[60px] font-normal font-poppins text-[#222d39]
                            h-[65px] rounded-[4px] bg-white shadow-xl w-[540px] border border-white 
                            pl-[30px]"
                        aria-required="true"
                        aria-invalid="false"
                        placeholder="Subject"
                        value=""
                        type="text"
                        name="Subject"
                    />

                    {/* Your Message */}
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
                    <section className='pt-6 relative bottom-[15px]'>
                        <button className="bg-orange-500 text-white text-sm font-semibold w-[160px] h-[50px] mr-[380px]">
                            Submit details
                        </button>
                    </section>

                </section>
            </section>
        </>
    );
}

export default Contactcenterdiv;
