import React from "react";
import BlogSingleData from "@data/BlogSingleData";
import Link from "next/link";
import Image from "next/image";

function SeoBlog() {
  return (
    <div className="font-firansans flex py-[90px] xl:py-[110px] justify-center item-center ">
      <div className="w-[90%]  md:w-[85%] flex flex-col gap-[2rem] lg:gap-[3rem] md:gap-[3rem] sm:gap-[3rem] ">
        <h1 className="lg:text-[50px] md:text-[50px] sm:text-[35px] text-[32px]  sm:text-start md:text-start lg:text-start font-semibold w-[100%] sm:w-[90%] md:w-[100%] lg:w-[65%]">
          Learn the essential marketing elements
        </h1>

        {/* <div className="lg:flex md:flex flex lg:flex-wrap md:flex-wrap sm:flex-wrap flex-wrap gap-[2rem] sm:gap-[2.5rem] md:gap-[2.5rem] lg:gap-[2.5rem] "> */}
        <div className="flex flex-wrap gap-[2rem] sm:gap-[2.5rem] md:gap-[2.5rem] lg:gap-[2.5rem]">

          {BlogSingleData.slice(1, 5).map((item) => (
            <div className="lg:w-[30%] md:w-[45%] sm:w-[45%] " key={item.id}>
              <Link href={item.url || 'https://blog.prfec.ai'} className="flex flex-col gap-[1rem]">
                <div className="">
                  <Image src={item.image} alt={item.alt} className="rounded-[15px]" height="max-content" />
                </div>
                <div className="flex flex-col gap-[0.5rem]">
                  <div className="text-[20px] sm:text-[24px] font-semibold ">
                    <h1>{item.title}</h1>
                  </div>
                  <div className="text-[18px] text-[#0a0a0a]">
                    <p>
                      {
                        String(item.description).split(" ").slice(0, 20).join(" ") // Join the sliced array back into a string
                      }
                    </p>
                  </div>

                  <div className="flex justify-between text-[14px] text-[#0a0a0a]">
                    <p>{item.author}</p>
                    <p>{item.date}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SeoBlog;
