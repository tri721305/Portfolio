import React from "react";

const About = () => {
  return (
    <div className="w-screen md:flex-row flex-col flex gap-4 h-screen  p-20 py-40 items-baseline">
      <div className="flex-1">
        <div className="w-[200px] h-[300px] pt-10 pl-6 background-lightorange_darkblue ">
          <h1 className="text-4xl md:text-8xl  lg:text-6xl font-bold tracking-tight text-hero-text animate-fade-in text-nowrap">
            About me
          </h1>
          <div className="w-[520px] mt-10">
            <p className="text-hero-text font-medium text-xl ">
              I'm Minh Trí,a Front End Developer with a Engineer's degree in
              Computer Engineering from Hồ Chí Minh City University of
              Technology ( Bách Khoa University ), a member of Vietnam National
              University. With nearly 4 years of experience in building scalable
              applications, I specialize in React. Committed to continuous
              learning. I prioritize success and customer satisfaction. Explore
              my portfolio innovative solutions. Let's create something amazing
              !
            </p>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <div className="flex flex-col gap-8 w-full max-w-xl">
          <div className="relative group">
            <div className="flex items-start gap-10 pb-2">
              <div className="w-[120px]">
                <h3 className="text-xl outline-none text-gray-500">Fullname</h3>
              </div>
              <h3 className="text-xl outline-none text-gray-500 font-semibold">
                : Đặng Hoàng Minh Trí
              </h3>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
            <div className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform -translate-x-1/2 transition-all duration-300 group-hover:w-full"></div>
          </div>

          <div className="relative group tracking-tight text-hero-text">
            <div className="flex items-start gap-10 pb-2">
              <div className="w-[120px]">
                <h3 className="text-xl outline-none text-gray-500">
                  Education
                </h3>
              </div>
              <h3 className="flex-1 text-xl outline-none text-gray-500 font-semibold">
                : Engineer's degree in Computer Engineering from Hồ Chí Minh
                City University of Technology, Vietnam National University
              </h3>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
            <div className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform -translate-x-1/2 transition-all duration-300 group-hover:w-full"></div>
          </div>

          <div className="relative group cursor-pointer">
            <div className="flex items-start gap-10 pb-2">
              <div className="w-[120px]">
                <h3 className="text-xl outline-none text-gray-500">Email</h3>
              </div>
              <h3 className="flex-1 text-xl outline-none text-gray-500 font-semibold">
                : dhmt721305@gmail.com
              </h3>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
            <div className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform -translate-x-1/2 transition-all duration-300 group-hover:w-full"></div>
          </div>

          {/* Phone Number */}
          <div className="relative group cursor-pointer">
            <div className="flex items-start gap-10 pb-2">
              <div className="w-[120px]">
                <h3 className="text-xl outline-none text-gray-500">Phone</h3>
              </div>
              <h3 className="flex-1 text-xl outline-none text-gray-500 font-semibold">
                : 0869712597
              </h3>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
            <div className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform -translate-x-1/2 transition-all duration-300 group-hover:w-full"></div>
          </div>

          {/* Experience */}
          <div className="relative group cursor-pointer">
            <div className="flex items-start gap-10 pb-2">
              <div className="w-[120px]">
                <h3 className="text-xl outline-none text-gray-500">
                  Experience
                </h3>
              </div>
              <h3 className="flex-1 text-xl outline-none text-gray-500 font-semibold">
                : 3+ Years
              </h3>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
            <div className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform -translate-x-1/2 transition-all duration-300 group-hover:w-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
