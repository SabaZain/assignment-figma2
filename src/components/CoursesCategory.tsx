import { Card1 }  from "./ui/card";
import { Button } from '@/components/ui/button';

const CardLayout1: React.FC = () => {
    return(
        <section className='pt-8 pb-24'>
        
        <div className="mb-12">
          <h1 className='pt-8 text-2xl md:text-2xl lg:text-3xl text-center pr-4 md:pr-52 lg:pr-52 font-bold text-[#000000]'>Explore Courses By Category</h1>
          <p className='pt-2 text-sm text-center pr-2 md:pr-9 lg:pr-9'>Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
        </div>
        <div className="flex-col md:flex-row lg:flex-row pl-20 md:pl-0 lg:pl-0">
            <div className="flex flex-col md:flex-row lg:flex-row justify-center gap-6 mt-8">
                <Card1
                ImageSrc="/Image/designdev.svg"
                title = "Design & Development"
                description ="50+ Courses Available"
                />
                <Card1
                ImageSrc="/Image/marketing.svg"
                title = "Marketing"
                description ="50+ Courses Available"
                />
                <Card1
                ImageSrc="/Image/development.svg"
                title = "Development"
                description ="50+ Courses Available"
                />
            </div>
            <div className="flex flex-col md:flex-row lg:flex-row justify-center gap-6 mt-8">
            <Card1
                ImageSrc="/Image/communication.svg"
                title = "Communication"
                description ="50+ Courses Available"
                />  
                <Card1
                ImageSrc="/Image/digital marketing.svg"
                title = "Digital Marketing"
                description ="50+ Courses Available"
                />  
                <Card1
                ImageSrc="/Image/selfdev.svg"
                title = "Self Development"
                description ="50+ Courses Available"
                />  
            </div>
            <div className="flex flex-col md:flex-row lg:flex-row justify-center gap-6 mt-8">
            <Card1
                ImageSrc="/Image/business.svg"
                title = "Business"
                description ="50+ Courses Available"
                />  
                <Card1
                ImageSrc="/Image/finance.svg"
                title = "Finance"
                description ="50+ Courses Available"
                />  
                <Card1
                ImageSrc="/Image/consulting.svg"
                title = "Consulting"
                description ="50+ Courses Available"
                />  
            </div>
        </div>
        <div className="mt-8 flex justify-center">
           <Button variant="white"  >View All Courses</Button>
           </div>
        </section>
    );
};

export default CardLayout1