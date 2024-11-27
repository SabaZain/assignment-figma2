import React from 'react';

const AchievementPage = () => {
  return (
    <section id="achievement" className='pt-8 pb-8'>
        <div>
          <h1 className='pt-8 text-center text-3xl font-bold text-[#000000]'>Our Achivements</h1>
          <p className='text-center text-sm md:text-[18px] lg:text-[18px] font-normal pt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra <br /> 
         ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
         <div className='flex-row md:flex lg:flex justify-center align items-center gap-32 mt-8 pl-24 md:pl-0 lg:pl-0'>
          <div className='flex gap-20 md:gap-32 lg:gap-32 pb-6'>
          <div>
            <h2 className='text-[30px] font-bold'>+200</h2>
            <p className='text-[14px] font-light pl-1'>Courses</p>
          </div>
          <div>
            <h2 className='text-[30px] font-bold'>50K</h2>
            <p className='text-[14px] font-light pl-1'>Mentors</p>
          </div>
          </div>
          <div className='flex gap-20 md:gap-32 lg:gap-32 pb-6'>
          <div>
            <h2 className='text-[30px] font-bold'>370k</h2>
            <p className='text-[14px] font-light pl-1'>Students</p>
          </div>
          <div>
            <h2 className='text-[30px] font-bold'>100+</h2>
            <p className='text-[14px] font-light pl-1'>Recognition</p>
          </div>
         </div>
         </div>
        </div>
      </section>
  )
}

export default AchievementPage;
