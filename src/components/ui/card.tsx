import * as React from "react";
import Image from "next/image";
import { Button } from '@/components/ui/button';

{/* Courses Section */}
const Card: React.FC<{
  ImageSrc: string;
  subtitle: string;
  title: string;
  description: string;
}> = ({ImageSrc, subtitle, title, description}) => {
  return(
    <div className="mt-8 p-1 w-full max-w-xs border-gray-300 bg-[#F6F6F6] hover:scale-105 transition-transform">
      <img src={ImageSrc} alt={title} className="width={365} height={300}" />

      <div className="pl-2">
        <div className="flex justify-between">
          <h4 className="text-start">{subtitle}</h4>
          <div className="flex gap-1">
          <Image src="/Image/star.svg" alt="5 stars" width={15} height={15} />
          5.0
          </div>
        </div>
          <h1 className="text-[24px] font-bold pt-2">{title}</h1>
        <p className="text-[14px] text-[#000000] pt-1">{description}</p>
      </div>

      <div className="mt-3 mb-3 pl-2">
      <Button variant="white">Enroll Now</Button>
      <Button variant="primary">$400</Button>
        </div>
        
    </div>
  );
};

export { Card }

{/* Explore Courses By Category Section */}
const Card1: React.FC<{
  ImageSrc: string;
  title: string;
  description: string;
}> = ({ImageSrc, title, description}) => {
  return(
    <div className="mt-8 p-1 w-full max-w-xs border-gray-300 bg-[#F6F6F6] hover:scale-105 transition-transform">
      <div className="flex">
        <div className="bg-[#FFFFFF] flex justify-start align items-center px-4 m-3 border rounded-sm">
      <img src={ImageSrc} alt={title} className="width={30} height={30}" />
      </div>
      <div className="p-4">
        <h3 className="text-[18px] font-semibold mt-2">{title}</h3>
        <p className="text-[14px] text-[#000000] pt-1">{description}</p>
        </div>
      </div>
    </div>
  );
};

export { Card1 }

