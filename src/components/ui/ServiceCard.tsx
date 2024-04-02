import React from "react";
interface CardProps {
  category: string;
  imageone: string;
  imagetwo: string;
  imagethree: string;
}

function ServiceCard({ category, imageone, imagethree, imagetwo }: CardProps) {
  return (
    <div className="flex justify-center items-center ">
      <div className="group flex justify-center flex-col md:p-16 p-8 bg-[#ffffff40] rounded-lg shadow-lg backdrop-blur-xl backdrop-filter border-[1px] border-[#ffffff40] h-96 transition delay-150 duration-300 ease-linear">
        <div className="absolute top-[14px] right-[14px] left-[14px] w-fit bg-[#00000040] rounded-full">
          <p className="text-sm font-inter font-medium py-2 px-4">{category}</p>
        </div>
        <div className="relative">
          <div
            className="rounded-lg shadow-lg h-52 w-52 group-hover:-z-10"
            style={{
              background: `url(${imageone})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></div>
          <div
            className="-z-10 md:w-36 md:h-36 w-32 h-32 pt-5 absolute top-[60%] right-[50%] rounded-lg border-[1px] border-[#ffffff40] overflow-hidden -rotate-12 group-hover:z-0 group-hover:scale-125 transition delay-150 duration-300 ease-linear"
            style={{
              background: `url(${imagetwo})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></div>
          <div
            className="-z-10 md:w-36 md:h-36 w-32 h-32 pt-5 absolute bottom-[60%] left-[50%] rounded-lg border-[1px] border-[#ffffff40] overflow-hidden rotate-12 group-hover:z-0 group-hover:scale-125 transition delay-150 duration-300 ease-linear"
            style={{
              background: `url(${imagethree})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
