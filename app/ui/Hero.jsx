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
    <div className="bg-[#FDCA09] h-[90dvh] relative overflow-hidden flex items-center justify-center">
      <div>
        <Image
          src={bgShape}
          alt="bg-shape"
          title="bgImage"
          className="absolute px-8 -top-[4rem]"
        />
      </div>

      <h1 className="flex items-center justify-center font-bold text-[6rem] absolute top-[15%] left-[15%] w-[70%] leading-[1.1] text-center">
        Let’s create something great together.
      </h1>

      <div className="flex w-[90%] place-self-end z-[999] justify-center">
        <Image src={up1} alt="hand" title="hands up" />
        <Image src={up2} alt="hand" title="hands up" />
        <Image src={up3} alt="hand" title="hands up" />
        <Image src={up4} alt="hand" title="hands up" />
        <Image src={up5} alt="hand" title="hands up" />
        <Image src={up6} alt="hand" title="hands up" />
      </div>
    </div>
  );
};

export default Hero;
