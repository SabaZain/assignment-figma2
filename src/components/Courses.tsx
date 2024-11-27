import { Card } from "./ui/card";
import { Button } from '@/components/ui/button';

const CardLayout: React.FC = () => {
    return(
        <section id="courses" className='pt-8 pb-24'>
        
        <div>
          <h1 className='pt-8 text-center text-3xl font-bold text-[#000000]'>Courses</h1>
          <p className='pt-2 text-[18px] text-center text-sm'>Your Ultimate Guide to learning</p>
        </div>
        <ul className='pt-8 flex justify-center align items-center gap-4 font-normal underline'>
            <li>Popular</li>
            <li>Recommended</li>
            <li>Best Price</li>
          </ul>
        <div className="flex flex-col md:flex-row lg:flex-row justify-around pl-5 md:pl-0 lg:pl-0 ">
             
            <Card
             ImageSrc="/Image/main1.svg"
             subtitle="Design"
             title="UX/UI Design 201"
             description="Lorem ipsum dolor sit amet, consectetur adipiscing 
            elit. Suspendisse varius enim in eros."
            />
            <Card
             ImageSrc="/Image/main2.svg"
             subtitle="Programmimg"
             title="Introduction to Python"
             description="Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Suspendisse varius enim in eros."
            />
            <Card
             ImageSrc="/Image/main3.svg"
             subtitle="Business"
             title="Data Analysis for Beginners"
             description="Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Suspendisse varius enim in eros."
            />
            </div>
            <div className="flex flex-col md:flex-row lg:flex-row justify-around pl-5 md:pl-0 lg:pl-0 ">
            <Card
             ImageSrc="/Image/main4.svg"
             subtitle="Art"
             title="Art Specialization"
             description="Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Suspendisse varius enim in eros."
            />
            <Card
             ImageSrc="/Image/main5.svg"
             subtitle="Law"
             title="Rule of Law"
             description="Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Suspendisse varius enim in eros."
            />
            <Card
             ImageSrc="/Image/main6.svg"
             subtitle="Tech"
             title="Introduction to webflow"
             description="Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Suspendisse varius enim in eros."
            />
           </div>
           <div className="mt-8 flex justify-center">
           <Button variant="white"  >View All Courses</Button>
           </div>
    </section>
   );
};
export default CardLayout
