import Europe from "@/components/Home/Hero/Europe";
import Services from "@/components/Home/Services/Services";
import HomeSlider from "@/components/Home/Slider/Slider";
import Stats from "@/components/Home/Stats/Stats";
import Image from "next/image";

export default function Home() {
  return (
    <>
      < Europe/>
      <Stats />
      <HomeSlider /> 
      <Services />
    </>
  );
}
