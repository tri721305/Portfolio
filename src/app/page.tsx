import Navbar from "@/components/navigation";
import Theme from "@/components/navigation/Theme";

export default function Home() {
  return (
    <main className="w-screen h-screen overflow-hidden relative">
      <img
        className="absolute top-0 right-0 -z-1"
        src="/images/gradient.png"
        alt="Gradient"
      />
      <Navbar />
      <div className="h-0 w-[40rem] absolute top-[20%] right-[0] shadow-[0_0_900px_20px_#e99b63] -rotate-[30deg] -z-10"></div>
    </main>
  );
}
