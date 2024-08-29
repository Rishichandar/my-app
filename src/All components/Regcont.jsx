


import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import { Link } from 'react-router-dom';

const businessTypes = [
    {
        category: 'Restaurant',
        options: ['Restaurant', 'Bar & Restaurant', 'Resto bar & pub', 'Others'],
    },
    {
        category: 'Qsr',
        options: ['Cafe', 'Ice cream parlour', 'Food Truck', 'Juice Shop', 'Pizza shop', 'Chats and Cakes', 'Food court', 'Cafetaria'],
    },
    {
        category: 'Retail',
        options: ['Meat & Fish', 'Rice Traders', 'Supermarket', 'Liquor', 'Fancy store'],
    },
    {
        category: 'Fashion & Lifestyle',
        options: ['Boutique', 'Textile', 'Florist', 'Jewelry', 'Toys'],
    },
];

const Regcont = () => {
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let formErrors = {};
        let valid = true;

        if (!email) {
            formErrors.email = 'Email is required';
            valid = false;
        }
        if (!selectedOption) {
            formErrors.option = 'Please select an option.';
            valid = false;
        }
        if (!phone) {
            formErrors.phone = 'Phone no is required.';
            valid = false;
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
            <div className="flex flex-col justify-center items-center pt-7">
                <div className="mb-4 mr-10">
                    <img
                        src="https://posbytz.s3.ap-south-1.amazonaws.com/partners/1/logo_1630189049088.png"
                        className="w-[200px] h-auto mr-[145px]"
                        alt="Logo"
                    />
                </div>
                <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-lg h-[420px] mb-[60px]">
                    <h2 className="text-2xl font-semibold mb-4">Register Account</h2>
                    <p className="text-gray-800 text-center mt-[5px] text-[12px]" style={{ color: 'grey' }}>
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
                        <div className="mb-4 mt-4 relative top-5">
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                placeholder="Enter your email"
                                style={{ border: '1px groove grey' }}
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm mt-3 absolute">{errors.email}</p>
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

                        <p className="text-gray-800 text-center mt-[5px] text-[12px] relative top-8" style={{ color: 'black' }}>
                            By clicking Register, I accept the <a href="https://posbytz.com/terms-and-conditions/" target="_blank" className="text-blue-800">Terms &amp; Conditions</a>
                        </p>
                        <button
                            type="submit"
                            className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 mt-[40px]"
                        >
                            Register
                        </button>
                    </form>
                </div>
                <p className='relative bottom-[35px]'>
                    Already have an account?{' '}
                    <Link to="/Login" className="text-blue-800 cursor-pointer">
                        Login
                    </Link>
                </p>
            </div>
        </section>
    );
};

export default Regcont;
