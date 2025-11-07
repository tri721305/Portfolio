import Hero from "@/components/Hero";
import HeroV2 from "@/components/HeroV2";
import About from "@/components/ui/About";
import Work from "@/components/Work";

export default function Home() {
  return (
    <main className="w-screen h-screen overflow-auto relative">
      <img
        className="absolute top-0 right-0 -z-1"
        src="/images/gradient.png"
        alt="Gradient"
      />
      <div className="h-0 w-[40rem] absolute top-[20%] right-[0] shadow-[0_0_900px_20px_#e99b63] -rotate-[30deg] -z-10"></div>
      <div className="">
        {/* <Hero /> */}
        <HeroV2 />
        <About />
        <Work />
      </div>
    </main>
  );
}
