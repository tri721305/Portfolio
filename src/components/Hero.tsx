import { IoDiamond } from "react-icons/io5";
const Hero = () => {
  return (
    <main className="flex lg:mt-20 flex-col lg:flex-row items-center justify-between min-h-[calc(90vh-6rem)]">
      <div className="max-w-xl ml-[5%] z-10 mt-[90%] md:mt-[60%] lg:mt-0">
        <div className="relative w-[95%] sm:w-48 h-10 bg-gradient-to-r from-[#656565] to-[#e99b63] shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full">
          <div className="absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-1">
            <IoDiamond />
            INTRODUCTING
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider my-8">
          Developer
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg tracking-wider text-gray-400 max-w-[25rem] lg:max-w-[35rem]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in
          sollicitudin lacus, quis feugiat urna. Nam lacinia est et enim rutrum,
          id interdum diam ornare. Nulla leo sem, commodo ac tincidunt eu,
          interdum a quam. Aenean in commodo dolor. Morbi fermentum magna dui,
          laoreet porta velit scelerisque sed. Etiam elementum metus a dui
          auctor interdum. Etiam eleifend, orci id hendrerit tempus, velit quam
          viverra libero, in rutrum velit elit vitae mi. Nulla facilisi. Etiam
          velit velit, tincidunt at metus a, tempor consectetur arcu. Aliquam
          tincidunt est id euismod auctor. Vestibulum eu mauris vitae velit
          porta laoreet. Aenean ac lectus ac leo convallis molestie. Suspendisse
          blandit venenatis massa ut vehicula. Aenean rhoncus tortor nibh. Orci
          varius natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus.
        </p>
      </div>
    </main>
  );
};

export default Hero;
