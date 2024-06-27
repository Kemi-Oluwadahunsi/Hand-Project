import Image from "next/image";
import bgShape from "../../public/images/bgShape.png";
import up1 from "../../public/images/up1.png";
import up2 from "../../public/images/up2.png";
import up3 from "../../public/images/up3.png";
import up4 from "../../public/images/up4.png";   
import up5 from "../../public/images/up5.png";
import up6 from "../../public/images/up6.png";
const Hero = () => {
  return (
    <div className="bg-[#FDCA09] h-[25rem] lg:h-[90dvh] relative overflow-hidden flex items-center justify-center">
      <div>
        <Image
          src={bgShape}
          alt="bg-shape"
          title="bgImage"
          className="absolute px-8 lg:-top-[2rem] xl:-top-[4rem]"
        />
      </div>

      <h1 className="flex items-center justify-center font-bold text-[2.5rem] lg:text-[4rem] xl:text-[6rem] absolute top-[10%] lg:top-[12%] xl:top-[15%] lg:left-[12%] xl:left-[15%] lg:w-[80%] xl:w-[70%] leading[1.2] lg:leading-[1.1] text-center">
        Let’s create something great together.
      </h1>

      <div className="flex lg:w-[90%] place-self-end z-[999] justify-center">
        <div><Image src={up1} alt="hand" title="hands up" className="sm:w-full lg:w-full w-[70%] mx-auto"/></div>
        <div><Image src={up2} alt="hand" title="hands up" className="sm:w-full lg:w-full w-[70%] mx-auto"/></div>
        <div><Image src={up3} alt="hand" title="hands up" className="sm:w-full lg:w-full w-[70%] mx-auto"/></div>
        <div><Image src={up4} alt="hand" title="hands up" className="hidden sm:block mx-auto" /></div>
        <div><Image src={up5} alt="hand" title="hands up" className="hidden sm:block mx-auto" /></div>
        <div><Image src={up6} alt="hand" title="hands up" className="hidden sm:block mx-auto" /></div>
        
      </div>
    </div>
  );
};

export default Hero;
