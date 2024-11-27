import React from 'react';
import Image from 'next/image';

const TeamPage = () => {
  return (
    <section id="services" className='pt-8 pb-8 bg-[#F6F6F6]'>
        <div>
          <h1 className='pt-8 text-center text-3xl font-bold text-[#000000]'>Our team</h1>
          <p className='pt-2 text-sm text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        </div>
        <div className='flex flex-col md:flex-row lg:flex-row justify-evenly'>
          <div className='pt-8 hover:scale-105 transition-transform'>
          <div className='pl-52 md:pl-16 lg:pl-16 pb-5 '>
            <Image src={"/Image/team1.svg"} alt={"team member"} width={80} height={80} />
            </div>
          <div className='pl-5 text-center'>
            <h1 className='text-[#000000] text-[20px] font-semibold'>James Nduku</h1>
            <h2 className='text-[#000000] text-[18px] font-normal'>Marketing Coordinator</h2>
            <ul className='flex pl-48 md:pl-11 lg:pl-11 pt-4 gap-1'>
              <li><Image src={"/Image/link1.svg"} alt={"linkedin"} width={20} height={20} /></li>
              <li><Image src={"/Image/link2.svg"} alt={"twitter"} width={20} height={20} /></li>
              <li><Image src={"/Image/link3.svg"} alt={"dribble"} width={20} height={20} /></li>
            </ul>
            </div>
          </div>
        
        
           <div className='pt-8 hover:scale-105 transition-transform'>
           <div className='pl-52 md:pl-16 lg:pl-16 pb-5'>
            <Image src={"/Image/team2.svg"} alt={"team member"} width={80} height={80} />
            </div>
            <div className='pl-5 text-center'>
            <h1 className='text-[#000000] text-[20px] font-semibold'>Joseph Munyambu</h1>
            <h2 className='text-[#000000] text-[18px] font-normal'>Nursing Assistant</h2>
            <ul className='flex pl-48 md:pl-11 lg:pl-11 pt-4 gap-1'>
              <li><Image src={"/Image/link1.svg"} alt={"linkedin"} width={20} height={20} /></li>
              <li><Image src={"/Image/link2.svg"} alt={"twitter"} width={20} height={20} /></li>
              <li><Image src={"/Image/link3.svg"} alt={"dribble"} width={20} height={20} /></li>
            </ul>
          </div>
          </div>

        
          <div className='pt-8 hover:scale-105 transition-transform'>
          <div className='pl-52 md:pl-16 lg:pl-16 pb-5'>
            <Image src={"/Image/team3.svg"} alt={"team member"} width={80} height={80} />
            </div>
            <div className='pl-5 text-center'>
            <h1 className='text-[#000000] text-[20px] font-semibold'>Joseph Ngumbau</h1>
            <h2 className='text-[#000000] text-[18px] font-normal'>Medical Assistant</h2>
            <ul className='flex pl-48 md:pl-11 lg:pl-11 pt-4 gap-1'>
              <li><Image src={"/Image/link1.svg"} alt={"linkedin"} width={20} height={20} /></li>
              <li><Image src={"/Image/link2.svg"} alt={"twitter"} width={20} height={20} /></li>
              <li><Image src={"/Image/link3.svg"} alt={"dribble"} width={20} height={20} /></li>
            </ul>
          </div>
          </div>
          </div>

          <div className='flex flex-col md:flex-row lg:flex-row justify-evenly'>
          <div className='pt-12 hover:scale-105 transition-transform'>
          <div className='pl-52 md:pl-11 lg:pl-11 pb-5'>
            <Image src={"/Image/team4.svg"} alt={"team member"} width={80} height={80} />
            </div>
          <div className='pl-5 text-center'>
            <h1 className='text-[#000000] text-[20px] font-semibold'>Erick Kipkemboi</h1>
            <h2 className='text-[#000000] text-[18px] font-normal'>Web Designer</h2>
            <ul className='flex pl-48 md:pl-11 lg:pl-11 pt-4 gap-1'>
              <li><Image src={"/Image/link1.svg"} alt={"linkedin"} width={20} height={20} /></li>
              <li><Image src={"/Image/link2.svg"} alt={"twitter"} width={20} height={20} /></li>
              <li><Image src={"/Image/link3.svg"} alt={"dribble"} width={20} height={20} /></li>
            </ul>
            </div>
          </div>
        

           <div className='pt-12 hover:scale-105 transition-transform'>
           <div className='pl-52 md:pl-12 lg:pl-12 pb-5'>
            <Image src={"/Image/team5.svg"} alt={"team member"} width={80} height={80} />
            </div>
            <div className='pl-5 text-center'>
            <h1 className='text-[#000000] text-[20px] font-semibold'>Stephen Kerubo</h1>
            <h2 className='text-[#000000] text-[18px] font-normal'>President of Sales</h2>
            <ul className='flex pl-48 md:pl-11 lg:pl-11 pt-4 gap-1'>
              <li><Image src={"/Image/link1.svg"} alt={"linkedin"} width={20} height={20} /></li>
              <li><Image src={"/Image/link2.svg"} alt={"twitter"} width={20} height={20} /></li>
              <li><Image src={"/Image/link3.svg"} alt={"dribble"} width={20} height={20} /></li>
            </ul>
          </div>
          </div>

        
          <div className='pt-12 hover:scale-105 transition-transform'>
          <div className='pl-52 md:pl-11 lg:pl-11 pb-5'>
            <Image src={"/Image/team6.svg"} alt={"team member"} width={80} height={80} />
            </div>
            <div className='pl-5 text-center'>
            <h1 className='text-[#000000] text-[20px] font-semibold'>John Leboo</h1>
            <h2 className='text-[#000000] text-[18px] font-normal'>Dog Trainer</h2>
            <ul className='flex pl-48 md:pl-11 lg:pl-11 pt-4 gap-1'>
              <li><Image src={"/Image/link1.svg"} alt={"linkedin"} width={20} height={20} /></li>
              <li><Image src={"/Image/link2.svg"} alt={"twitter"} width={20} height={20} /></li>
              <li><Image src={"/Image/link3.svg"} alt={"dribble"} width={20} height={20} /></li>
            </ul>
          </div>
          </div>
          </div>

      </section>
  )
}

export default TeamPage;