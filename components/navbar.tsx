"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { rubik } from '@/app/ui/fonts';


const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={`${rubik.className} relative z-50`}>

            <div className="flex justify-between items-center px-4 md:px-7 h-[80px] border-2 border-gray-200">
                <button
                    className="md:hidden p-2"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>


                <div className="hidden md:flex items-center justify-between flex-1 ml-8">
                    <ul className="flex justify-start gap-4">
                        <li><a href="/home" className="hover:text-gray-600">Home</a></li>
                        <li><a href="/whyus" className="hover:text-gray-600">Why Us?</a></li>
                        <li><a href="/services" className="hover:text-gray-600">Services</a></li>
                    </ul>
                    <Image
                        src="/connect.jpg"
                        width={130}
                        height={100}
                        className="hidden md:block"
                        alt="Screenshots of the dashboard project showing desktop version"
                    />
                    <ul className="flex justify-start gap-6">
                        <li><a href="/home" className="hover:text-gray-600">Home Loan</a></li>
                        <li><a href="/whyus" className="hover:text-gray-600">Post Property</a></li>
                        <li><a href="/services" className="hover:text-gray-600">Saved</a></li>
                        <li><a href="/services" className="hover:text-gray-600">Sign In</a></li>
                    </ul>
                </div>
            </div>


            <div className={`md:hidden absolute w-full bg-white border-b-2 border-x-2 border-gray-200 transition-all duration-300 ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                }`}>
                <div className="px-4 py-4 space-y-4">
                    <ul className="space-y-2">
                        <li><a href="/home" className="block hover:text-gray-600">Home</a></li>
                        <li><a href="/whyus" className="block hover:text-gray-600">Why Us?</a></li>
                        <li><a href="/services" className="block hover:text-gray-600">Services</a></li>
                    </ul>
                    <hr className="border-gray-200" />
                    <ul className="space-y-2">
                        <li><a href="/home" className="block hover:text-gray-600">Home Loan</a></li>
                        <li><a href="/whyus" className="block hover:text-gray-600">Post Property</a></li>
                        <li><a href="/services" className="block hover:text-gray-600">Saved</a></li>
                        <li><a href="/services" className="block hover:text-gray-600">Sign In</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;