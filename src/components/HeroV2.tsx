"use client";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { AiFillCaretRight } from "react-icons/ai";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
const HeroV2 = () => {
  return (
    <main className="flex lg:mt-20 flex-col lg:flex-row items-stretch justify-between h-[calc(90vh-6rem)]">
      <div className="max-w-xl flex gap-4 ml-[5%] lg:ml-0 z-10 mt-[90%] md:mt-[60%] lg:mt-0 relative -left-[20%]">
        {/* Hero V2 */}
        <div className="inline-block transform rotate-90  ">
          <div className="max-w-2xl w-full">
            <div className="flex flex-col items-center gap-4">
              {/* Title with Separator */}
              <div className="text-center">
                <h1 className="text-9xl md:text-8xl lg:text-9xl font-bold tracking-tight text-hero-text animate-fade-in">
                  Developer
                </h1>

                {/* Separator Line */}
                <div className="relative my-6 flex items-center justify-center">
                  <div className="h-px w-32 bg-hero-separator animate-separator-expand"></div>
                </div>

                <div className="flex-center gap-7">
                  <div className="w-20 h-2 bg-gradient-to-r from-white to-black rounded-md"></div>
                  <h2 className="!text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-hero-text animate-fade-in-delay">
                    Front End
                  </h2>
                  <div className="w-20 h-2 bg-gradient-to-r from-black to-white rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Image src="/images/zoro.jpg" alt="Zoro" width={400} height={600} />
        <div className="flex flex-col items-start justify-center">
          <div className="flex flex-col items-start gap-6 -ml-24 p-4 bg-[#81818100] backdrop-blur-sm rounded-lg border-none">
            <h1 className="!text-5xl text-[#a8a8a8] inline md:text-4xl lg:text-5xl font-bold tracking-tight text-hero-text animate-fade-in whitespace-nowrap">
              Đặng Hoàng
            </h1>
            <h1 className="!text-5xl md:text-4xl lg:text-5xl font-bold tracking-tight text-hero-text animate-fade-in whitespace-nowrap">
              Minh Trí
            </h1>
          </div>
        </div>
      </div>
      <div className="flex-1 flex gap-2 flex-col justify-end ml-[8%] min-h-0">
        <p className="text-lg font-medium">
          My goal is to write clean, maintainable code that enhances the
          developement process and makes coding enjoyable through structured and
          thoughtful practices.
        </p>
        <Button
          size={"lg"}
          variant="default"
          className="font-bold flex items-center w-[140px] text-xl bg-[#FF7000] text-white cursor-pointer hover:bg-[#FF7000]/90"
          onClick={() => {
            console.log("Portfolio button clickedasd");
          }}
        >
          Portfolio
          <AiFillCaretRight />
        </Button>
      </div>
      <div className="w-[300px] flex flex-col justify-center items-end px-8 gap-2">
        <Button size="icon" className="!background-light800_darkgradient">
          <FaFacebook className="text-blue-500" />
        </Button>
        <Button size="icon" className="!background-light800_darkgradient">
          <FcGoogle className="text-blue-500" />
        </Button>
        <Button size="icon" className="!background-light800_darkgradient">
          <FaInstagram className="text-blue-500" />
        </Button>
      </div>
    </main>
  );
};

export default HeroV2;
