import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const HeroPage = () => {
  return (
    <div>
      <div className='flex flex-col md:flex-row lg:flex-row justify-center'>
        <div className='w-full md:w-1/2 lg:w-1/2 pl-14 pt-8 md:pt-40 lg:pt-40 justify-center'>
          <h1 className='text-[#000000] text-4xl font-bold'>Learn new skills <br /> online with ease</h1>
          <p className='text-[#000000] text-[16px] md:text-[18px] lg:text-[18px] pt-5 hidden md:flex lg:flex'>Discover a wide range of courses covering a variety of <br /> subjects, taught by expert instructors.</p>
          <p className='text-[#000000] text-[16px] md:text-[18px] lg:text-[18px] pt-5 md:hidden lg:hidden'>Discover a wide range of courses covering a <br /> variety of subjects, taught by expert instructors.</p>
          <div className='flex gap-[8px] pt-10 pb-10'>
          <Button variant="black" >Start learning now</Button>
          <Button variant="white" >Explore Courses</Button>
          </div>
        </div>
        <div className='w-full md:w-1/2 lg:w-1/2 pl-0 md:pl-48 lg:pl-48'>
          <Image 
          src={"/Image/figmapic.svg"}
          alt={"figma pic"}
          width={640}
          height={900}
          />
        </div>
      </div>
      <div className='flex flex-col md:flex-row lg:flex-row justify-between align items-center bg-[#F7F7F7] pt-[40px] pb-[40px] pl-2'>
      <div>
        <h2 className='text-[#000000] font-bold w-[320] h-[68] hidden md:flex lg:flex'>Trusted by 2000+ companies <br /> worldwide.</h2>
        <h2 className='text-[#000000] font-bold w-[320] h-[68] pr-36 pb-2 md:hidden lg:hidden'>Trusted by the world&apos;s best companies <br />
        [social proof to build credibility]</h2>
      </div>
      <div>
      <div className='flex flex-row md:flex-row lg:flex-row'>
        <Image src={"/Image/Airbnb Logo.svg"} alt={"logo 1"} width={123.8} height={38.52} />
        <Image src={"/Image/Airbnb Logo1.svg"} alt={"logo 2"} width={123.8} height={38.52} />
        <Image src={"/Image/Airbnb Logo2.svg"} alt={"logo 3"} width={123.8} height={38.52} />
        <Image src={"/Image/Airbnb Logo3.svg"} alt={"logo 4"} width={123.8} height={38.52} />
        
        <div className='flex'>
        <Image src={"/Image/Airbnb Logo4.svg"} alt={"logo 5"} width={123.8} height={38.52} />
        <Image src={"/Image/Airbnb Logo5.svg"} alt={"logo 6"} width={123.8} height={38.52}/>
        </div>
      </div>
      </div>
    </div>
    </div>
  );
};

export default HeroPage;
