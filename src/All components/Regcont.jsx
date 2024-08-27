

import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import { Link } from 'react-router-dom';

const businessTypes = [
    {
        category: 'Restaurant',
        options: ['Restaurant', 'Bar & Restaurant', 'Resto bar & bub', 'Others'],
    },
    {
        category: 'Qsr',
        options: ['cafe', 'Ice cream parlour', 'Food Truck', 'Juice Shop', 'Pizza shop', 'Chats and Cakes', 'Food court', 'Cafetaria'],
    },
    {
        category: 'Retail',
        options: ['Meat & Fish', 'Rice Traders', 'Super market', 'Liquor', 'Fancy store'],
    },
    {
        category: 'Fashion & Lifestyle',
        options: ['Boutique', 'Textile', 'Florist', 'Jewelry', 'Toys'],
    },
];

const Regcont = () => {

    const [email, setEmail] = useState('');

    const [errors, setErrors] = useState({});
    const [phone, setPhone] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const handleErrors = () => {
        const newErrors = {};
        // Add validation logic here if needed
        if (!selectedOption) {
            newErrors.option = 'Please select an option.';
        }
        setErrors(newErrors);
    };



    const validateForm = () => {
        let formErrors = {};
        let valid = true;

        if (!email) {
            formErrors.email = 'Email is required';
            valid = false;
        }
        if (!selectedOption) {
            formErrors.option = 'Please select an option.';
        }
        if (!phone) {
            formErrors.phone = 'Phone no is required.';
        }



        setErrors(formErrors);
        return valid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            console.log('Form submitted successfully');
        } else {
            console.log('Validation failed', errors);
        }
    };

    return (
        <section className="flex justify-center items-center bg-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-7 ml-[80px]">
                <section className="flex justify-center items-center">
                    <img
                        src="https://posbytz.s3.ap-south-1.amazonaws.com/partners/1/image_1705919272447.png"
                        className="w-[760px] h-[650px]"
                        alt="Login"
                    />
                </section>
                <section className="flex flex-col justify-center items-center">
                    <div className="mb-4">
                        <img
                            src="https://posbytz.s3.ap-south-1.amazonaws.com/partners/1/logo_1630189049088.png"
                            className="w-[200px] h-auto mr-[190px]"
                            alt="Logo"
                        />
                    </div>
                    <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-lg h-[420px]">
                        <h2 className="text-2xl font-semibold mb-4">Register Account</h2>
                        <p className="text-gray-800 text-center mt-[5px] text-[12px] mr-[65px]" style={{ color: 'grey' }}>
                            Free on-boarding support. No credit card required.
                        </p>
                        <form onSubmit={handleSubmit} noValidate>
                            <div className="mt-2 relative">
                                <select
                                    id="options"
                                    value={selectedOption}
                                    onChange={(e) => setSelectedOption(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                    style={{ border: '0.3px groove grey' }}
                                    onBlur={handleErrors} // Optional: validate on blur
                                >
                                    <option value="" disabled>Select Business Type</option>
                                    {businessTypes.map((type) => (
                                        <React.Fragment key={type.category}>
                                            <option value="" disabled className='text-[20px]'>
                                                {type.category}
                                            </option>
                                            {type.options.map((option) => (
                                                <option key={option} value={option}>
                                                    {option}
                                                </option>
                                            ))}
                                        </React.Fragment>
                                    ))}




                                </select>
                                {errors.option && (
                                    <p className="text-red-500 text-sm mt-2 absolute">{errors.option}</p>
                                )}
                            </div>
                            <div className="mb-4">
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md relative top-[25px]"
                                    placeholder="Enter your email"
                                    style={{ border: '1px groove grey' }}
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-sm mt-6 absolute">{errors.email}</p>
                                )}
                            </div>
                            <div className='mt-[50px]'>
                                <PhoneInput
                                    country={'India'} // Default country code
                                    value={phone}
                                    inputStyle={{
                                        border: 'none',
                                        boxShadow: 'none',
                                        background: 'transparent',
                                        height: '50px',
                                        width: '260px',
                                        paddingLeft: '50px', // Adjust padding to move placeholder text
                                        paddingRight: '10px', // Add right padding if needed
                                        fontSize: '15px',
                                        color: '#222d39',
                                        fontFamily: 'Poppins, sans-serif'
                                    }}
                                    buttonStyle={{
                                        background: 'white',
                                        border: 'none'
                                    }}
                                    containerStyle={{
                                        width: '335px',
                                        border: '1px solid grey',
                                        borderRadius: '4px',
                                        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                                        height: '45px'
                                    }}
                                    dropdownStyle={{ borderRadius: '4px' }}
                                    placeholder="Your Phone Number"
                                />
                                {errors.phone && (
                                    <p className="text-red-500 text-sm mt-2 absolute">{errors.phone}</p>
                                )}
                            </div>


                            <p className="text-gray-800 text-center mt-[5px] text-[12px] mr-[45px] relative top-[40px]" style={{ color: 'black' }}>By clicking Register,I accept the <a href="https://posbytz.com/terms-and-conditions/" target="_blank" className="text-blue-800">Terms &amp; Conditions</a></p>
                            <button
                                type="submit"
                                className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 mt-[70px]"
                            >
                                Register
                            </button>
                        </form>
                    </div>
                    <p className='mt-[30px]'>
                        Already a have a account?{' '}
                        <Link to="/Login" className="text-blue-800 cursor-pointer">
                            Login
                        </Link>
                    </p>
                </section>
            </div>
        </section>
    );
};

export default Regcont;
