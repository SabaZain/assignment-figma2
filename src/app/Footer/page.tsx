import React from 'react';
import Image from 'next/image';
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";


const Footer = () => {
  return (
    
    <div className='pt-24 pb-24'>
    <div className='flex flex-col md:flex-row lg:flex-row justify-between pl-8'>
      <div>
        <h1 className='text-[18px] text-[#000000] font-semibold text-center md:text-start lg:text-start'>Subscribe to our newsletter</h1>
        <p className='text-[16px] text-[#000000] font-normal text-center md:text-start lg:text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div>
        <div className='flex-col md:flex-row lg:flex-row gap-[8px] pb-4 pr-12 '>
            <input
            type='email'
            placeholder='Enter your email'
            className='border border-[#000000] rounded text-[16px] font-normal p-[6px] pr-20 m-1' />
           <button className='border border-[#000000] rounded text-[14px] font-normal p-[7px] pl-[215px] md:pl-1 lg:pl-1 m-1 hover:bg-[#000000] hover:text-[#FFFFFF]'>Subscribe</button>
        </div>
        <div>
            <p className='text-[12px] text-center md:text-start lg:text-start'>By subscribing you agree to with our Privacy Policy</p>
        </div>
      </div>
      </div>
      <div className='pt-20 pb-10 m-3 ml-36 md:ml-8 lg:ml-8  mr-24 flex flex-col md:flex-row lg:flex-row justify-between gap-2'>
        <div className='ml-10'> 
        <Image src={"/Image/Ddsgnr.svg"} alt={"union logo"} width={90} height={30} />
        </div>

        <div>
            <h1 className='text-[16px] text-[#000000] font-semibold text-center md:text-start lg:text-start'>Courses</h1>
            <ul className='text-[14px] font-normal text-center md:text-start lg:text-start'>
                <li className='p-1'>Business</li>
                <li className='p-1'>Development</li>
                <li className='p-1'>Technology</li>
                <li className='p-1'>Design</li>
                <li className='p-1'>Programming</li>
            </ul>
        </div>
        <div>
            <h1 className='text-[16px] text-[#000000] font-semibold text-center md:text-start lg:text-start'>Resources</h1>
            <ul className='text-[14px] font-normal text-center md:text-start lg:text-start'>
                <li className='p-1'>Career</li>
                <li className='p-1'>Resume</li>
                <li className='p-1'>Learning</li>
                <li className='p-1'>Interview Preparation</li>
                <li className='p-1'>Jobs</li>
            </ul>
        </div>
        <div>
            <h1 id="aboutus" className='text-[16px] text-[#000000] font-semibold text-center md:text-start lg:text-start'>About Us</h1>
            <ul className='text-[14px] font-normal text-center md:text-start lg:text-start'>
                <li className='p-1'>Contact</li>
                <li className='p-1'>Help/Support</li>
                <li className='p-1'>FAQ</li>
                <li className='p-1'>Terms and Conditions</li>
                <li className='p-1'>Partners</li>
            </ul>
        </div>
    </div>

    <hr className='border-[#000000] w-[400] md:w-[1158px] lg:w-[1158px] ml-9 mr-9' />
    
    <div className='pt-3 m-3 ml-9 mr-10 flex flex-col md:flex-row lg:flex-row justify-between '>
    <div className='flex flex-col md:flex-row lg:flex-row gap-5'>
    <h1 className='text-[14px] text-[#000000] font-normal text-center md:text-start lg:text-start'>2023 Ddsgnr. All right reserved.</h1> 
    <ul className='flex md:flex-row lg:flex-row gap-5 text-center md:text-start lg:text-start ml-6 md:ml-0 lg:ml-0'>
        <li className='text-[14px] text-[#000000] font-normal underline'>Privacy Policy</li>
        <li className='text-[14px] text-[#000000] font-normal underline'>Terms of Service</li>
        <li className='text-[14px] text-[#000000] font-normal underline'>Cookies Settings</li>
    </ul>
    </div>
    <div>
    <ul className='flex gap-2 pt-8 md:pt-0 lg:pt-0 ml-28 md:ml-0 lg:ml-0'>
        <li><FaFacebookF /></li>
        <li><FaInstagram /></li>
        <li><FaTwitter /></li>
        <li><FaLinkedin /></li>
    </ul>
    </div>
    </div>
</div>

  )
}

export default Footer;
