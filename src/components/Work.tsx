import React from "react";

const Work = () => {
  return (
    <div className="w-screen md:flex-row flex-col flex gap-4 h-screen  p-20 py-40 items-baseline">
      <section className="flex-1 flex items-start justify-between">
        <div className="flex flex-col gap-6">
          <div>
            <div>
              <h1 className="text-2xl md:text-3xl text-gray-400  lg:text-4xl font-bold tracking-tight text-hero-text animate-fade-in">
                MWG Group
              </h1>
              <h2 className="text-gray-400 text-hero-text tracking-wide font-semibold">
                June 2021 - Present
              </h2>
            </div>
            <div className="mt-4">Description</div>
          </div>
          <div>
            <div>
              <h1 className="text-2xl md:text-3xl text-gray-400  lg:text-4xl font-bold tracking-tight text-hero-text animate-fade-in">
                Mimosa Tech
              </h1>
              <h2 className="text-gray-400 text-hero-text tracking-wide font-semibold">
                June 2020 - May 2021
              </h2>
            </div>
            <div className="mt-4">Description</div>
          </div>
        </div>
        <div className="w-[200px] mr-20 h-[300px] pt-10 pl-6 background-lightorange_darkblue ">
          <h1 className="text-4xl md:text-8xl  lg:text-6xl font-bold tracking-tight text-hero-text animate-fade-in">
            Work Experience
          </h1>
        </div>
      </section>
    </div>
  );
};

export default Work;
