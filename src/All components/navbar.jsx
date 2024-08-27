
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';


const Navbar = () => {
    const location = useLocation();
    const [bgColor, setBgColor] = useState('bg-white');
    const [textColor, setTextColor] = useState('text-black');
    const [textColor1, setTextColor1] = useState('text-white');
    const [image, setImage] = useState("https://posbytz.com/wp-content/uploads/2021/09/logo_default_2x.svg");

    useEffect(() => {
        const handleScroll = () => {
            if (location.pathname === '/About-us' || location.pathname === '/Support' || location.pathname === '/Contact-us') {
                if (window.scrollY > 100) {
                    setBgColor('bg-white');
                    setTextColor('text-[black]');
                    setImage("https://posbytz.com/wp-content/uploads/2021/09/logo_default_2x.svg");
                } else {
                    setBgColor('bg-[#694F8E]');
                    setTextColor('text-[white]');
                    setImage("https://posbytz.com/wp-content/uploads/2021/09/logo_light.svg");
                    setTextColor1("text-black");
                }
            } else {
                // Reset to default colors for other pages
                setBgColor('bg-white');
                setTextColor('text-[black]');
                setTextColor1('text-gray-800');
                setImage("https://posbytz.com/wp-content/uploads/2021/09/logo_default_2x.svg");
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [location.pathname]);

    return (
        <nav className={`fixed top-0 w-full z-50 shadow-lg p-3.5 flex items-center h-[78px] ${bgColor}`}>
            {/* Logo */}
            <div className="relative flex items-center">
                <Link to="/">
                    <img
                        src={image}
                        alt="Posbytz Logo"
                        className="w-[130px] h-[80px] cursor-pointer"
                    />
                </Link>
            </div>

            {/* Links */}
            <ul className={`flex flex-grow justify-center gap-5 m-0 list-none ${textColor}`}>
                <li>
                    <Link to="/Explore" className="text-gray-800 text-sm font-semibold hover:text-orange-600">Explore</Link>
                </li>
                <li>
                    <Link to="/Partner" className="text-gray-800 text-sm font-semibold hover:text-orange-600">Partner</Link>
                </li>
                <li>
                    <Link to="/pricing" className="text-gray-800 text-sm font-semibold hover:text-orange-600">Pricing</Link>
                </li>
                <li>
                    <Link to="/Blog" className="text-gray-800 text-sm font-semibold hover:text-orange-600">Blog</Link>
                </li>

                {/* Company with Dropdown */}
                <li className={`relative group ${textColor}`}>
                    <Link className="text-gray-800 text-sm font-semibold hover:text-orange-600">Company</Link>
                    {/* Dropdown Container */}
                    <div className={`absolute left-[-35px] mt-2 w-40 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ${textColor1}`}>
                        <Link to="/About-us"><span className="block px-4 py-2 text-gray-800 hover:bg-gray-100">About Us</span></Link>
                        <Link to="/Contact-us"><span className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Contact us</span></Link>
                    </div>
                </li>

                <li>
                    <Link to="/Support" className="text-gray-800 text-sm font-semibold hover:text-orange-600">Support</Link>
                </li>
                <li>
                    <Link to="/Login" className="text-gray-800 text-sm font-semibold hover:text-orange-600">Login</Link>
                </li>
                <li>
                    <Link to="/Language" className="text-gray-800 text-sm font-semibold hover:text-orange-600">Language</Link>
                </li>
                <li>
                    <Link to="/Career" className="text-gray-800 text-sm font-semibold hover:text-orange-600">Career</Link>
                </li>
            </ul>

            {/* Button */}
            <button className="bg-orange-500 text-white rounded-full text-sm font-semibold w-[140px] h-[50px] flex items-center justify-center cursor-pointer absolute right-4">
                Get Started
            </button>
        </nav>
    );
};

export default Navbar;
