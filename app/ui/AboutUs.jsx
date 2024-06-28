import Image from "next/image";
import midImage from "../../public/images/midImage.png"

const AboutUs = () => {
  return (
    <div id="aboutus" className="flex flex-col gap-[4rem] px-8 py-[4rem] lg:px-[5rem] lg:py-[7rem] xl:py-[10rem]">
        <div className="flex flex-col gap-4 lg:gap-8">
            <h2 className="font-extrabold text-[2rem] lg:text-[2.5rem] xl:text-[3rem] ">Who we are</h2>
      <p className="lg:text-[1.5rem] xl:text-[1.75rem] text-[1.1rem] font-medium leading-[1.6] lg:leading-normal">
        We love what we do and create partnerships with our clients to ensure
        their digital transformation is positioned for long-term success.We
        believe that the human dimensions essential to start any successful
        project and that this is where splendid emotional relationships between
        the company and people are born.
      </p>
        </div>
      
      <div>
        <Image src={midImage} alt="midImage" title="middle image" />
      </div>
    </div>
  );
}

export default AboutUs