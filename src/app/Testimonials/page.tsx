import React from 'react';
import Image from 'next/image';

const TestimonialsPage = () => {
  return (
    <section id="testimonials" className='pt-8 pb-20 bg-[#F6F6F6]'>
        <div className='pl-11 '>
        <h1 className='md:hidden lg:hidden pt-8 text-2xl text-center font-bold text-[#000000]'>What Our Student Say</h1>
          <h1 className='hidden md:flex lg:flex pt-8 text-3xl font-bold text-[#000000]'>Customer testimonials</h1>
          <p className='pt-2 text-sm text-center md:text-start lg:text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div className='w-full flex flex-col md:flex-row lg:flex-row justify-around pt-12 p-5 gap-3'>
          <div className='pl-6 pb-5 border border-[#000000] hover:bg-[#000000] hover:text-[#FFFFFF]'>
            <div className='pt-4 pb-4'>
            <Image src={"/Image/5stars.svg"} alt={"5 stars"} width={70} height={70} />
            </div>
            <div>
              <p className='pr-12 text-[16px] md:text-sm lg:text-[16px]'>"Lorem ipsum dolor sit amet,<br /> 
              consectetur adipiscing elit.<br /> 
              Suspendisse varius enim in eros <br />
              elementum tristique. Duis cursus, mi<br /> 
              quis viverra ornare."</p>
              <div className='flex pt-3 gap-3'>
              <Image src={"/Image/image1.svg"} alt={"James Nduku Image"} width={50} height={50} />
              <div>
              <h2 className='text-[16px] font-semibold text-[#000000] hover:text-[#FFFFFF]'>James Nduku</h2>
              <h3 className='text-[14px] font-normal'>Software Developer</h3>
              </div>
              </div>
            </div>
        </div>
            <div className='pl-6 pb-5 border border-[#000000] hover:bg-[#000000] hover:text-[#FFFFFF]'>
            <div className='pt-4 pb-4'>
            <Image src={"/Image/5stars.svg"} alt={"5 stars"} width={70} height={70} />
            </div>
            <div>
              <p className='pr-12 text-[16px] md:text-sm lg:text-[16px]'>"Lorem ipsum dolor sit amet,<br /> 
              consectetur adipiscing elit.<br /> 
              Suspendisse varius enim in eros <br />
              elementum tristique. Duis cursus, mi<br /> 
              quis viverra ornare."</p>
              <div className='flex pt-3 gap-3'>
              <Image src={"/Image/image2.svg"} alt={"Erick Kipkemboi Image"} width={50} height={50} />
              <div>
              <h2 className='text-[16px] font-semibold text-[#000000] hover:text-[#FFFFFF]'>Erick Kipkemboi</h2>
              <h3 className='text-[14px] font-normal'>Scrum Master</h3>
              </div>
              </div>
            </div>
          </div>
          <div className='pl-6 pb-5 border border-[#000000] hover:bg-[#000000] hover:text-[#FFFFFF]'>
            <div className='pt-4 pb-4'>
            <Image src={"/Image/5stars.svg"} alt={"5 stars"} width={70} height={70} />
            </div>
            <div>
              <p className='pr-12 text-[16px] md:text-sm lg:text-[16px]'>"Lorem ipsum dolor sit amet,<br /> 
              consectetur adipiscing elit.<br /> 
              Suspendisse varius enim in eros <br />
              elementum tristique. Duis cursus, mi<br /> 
              quis viverra ornare."</p>
              <div className='flex pt-3 gap-3'>
              <Image src={"/Image/image3.svg"} alt={"Stephen Kerubo Image"} width={50} height={50} />
              <div>
              <h2 className='text-[16px] font-semibold text-[#000000] hover:text-[#FFFFFF]'>Stephen Kerubo</h2>
              <h3 className='text-[14px] font-normal'>UI/UX Designer</h3>
              </div>
              </div>
            </div>
          </div>
        </div>
        <div className='pt-11 flex justify-between'>
        <div className=' pl-11'>
          <Image src={"/Image/dots.svg"} alt={"dots"} width={60} height={60} />
        </div>
        <div className='flex pr-11 gap-2'>
        <Image src={"/Image/button1.svg"} alt={"button1"} width={25} height={25} />
        <Image src={"/Image/button2.svg"} alt={"button2"} width={25} height={25} />
        </div>
        </div>
      </section>
  )
}

export default TestimonialsPage;
