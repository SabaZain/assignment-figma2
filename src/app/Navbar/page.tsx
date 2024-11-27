"use client"
import React, { useState } from 'react';
import { IoMenu } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };
  return (
    
    <div>
      <div className='bg-[#F7F7F7] hidden md:flex lg:flex justify-between align items-center pr-28'>
      <div className='flex gap-[10px] pl-20 p-[8px] divide-x divide-black '>
        <span className='text-[14px] font-normal'>Phone Number: 956 742 455 678</span>
        <span className='text-[14px] font-normal pl-2'>Email:info@ddsgnr.com</span>
        </div>
        <div className='flex align items-center gap-[16px] text-xl'>
        <FaFacebookF />
        <FaInstagram />
        <FaTwitter />
        <FaLinkedin />
      </div>
      </div>
      <div className='flex justify-between md:justify-evenly lg:justify-evenly align items-center bg-[#F7F7F7] p-4 md:p-[4px] lg:p-[4px]  border border-[#000000] mb-0'>
        <Image src={"/Image/Ddsgnr.svg"} alt={"union logo"} width={120} height={120} />
        <div className='md:hidden lg:hidden cursor-pointer' onClick={toggleMenu} aria-label='Toggle menu' aria-expanded={isOpen}>
        <IoMenu size={30} />
        </div>
        <ul className='hidden md:flex lg:flex justify-between align items-center gap-10 pt-[5px] pb-[5px] pr-2 pl-2 bg-[#FFFFFF]'>
          <li className='text-[16px] font-normal text-[#000000] hover:text-teal-700'><a href="/">Home</a></li>
          <li className='text-[16px] font-normal text-[#000000] hover:text-teal-700'><a href="#courses">Courses</a></li>
          <li className='text-[16px] font-normal text-[#000000] hover:text-teal-700'><a href="#services">Services</a></li>
          <li className='text-[16px] font-normal text-[#000000] hover:text-teal-700'><a href="#achievement">Achievement</a></li>
          <li className='text-[16px] font-normal text-[#000000] hover:text-teal-700'><a href="#aboutus">About Us</a></li>
          <li className='text-[16px] font-normal text-[#000000] hover:text-teal-700'><a href="#testimonials">Testimonial</a></li>
        </ul>
        <div className='hidden md:flex lg:flex-row gap-[8px] mt-[8px] mb-[8px] pl-[20px] pr-[20px] '>
        <Button variant="white">Login</Button>
        <Button variant="black">Sign Up</Button>
        </div>
      </div>

      {isOpen && (
        <div className='md:hidden lg:hidden'>
          <ul className='bg-slate-300 '>
          <li className='text-[16px] font-normal text-[#000000] hover:text-teal-700'><a href="/" onClick={() => setIsOpen(false)}>Home</a></li>
          <li className='text-[16px] font-normal text-[#000000] hover:text-teal-700'><a href="#courses" onClick={() => setIsOpen(false)}>Courses</a></li>
          <li className='text-[16px] font-normal text-[#000000] hover:text-teal-700'><a href="#services" onClick={() => setIsOpen(false)}>Services</a></li>
          <li className='text-[16px] font-normal text-[#000000] hover:text-teal-700'><a href="#achievement" onClick={() => setIsOpen(false)}>Achievement</a></li>
          <li className='text-[16px] font-normal text-[#000000] hover:text-teal-700'><a href="#aboutus" onClick={() => setIsOpen(false)}>About Us</a></li>
          <li className='text-[16px] font-normal text-[#000000] hover:text-teal-700'><a href="#testimonials" onClick={() => setIsOpen(false)}>Testimonial</a></li>
          </ul>
        </div>
      )}
</div>
    
  );
};

export default Navbar;
