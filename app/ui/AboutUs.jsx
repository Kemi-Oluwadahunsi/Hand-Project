import Image from "next/image";
import midImage from "../../public/images/midImage.png"

const AboutUs = () => {
  return (
    <div className="flex flex-col gap-[4rem] px-[5rem] py-[10rem]">
        <div className="flex flex-col gap-8">
            <h2 className="font-extrabold text-[3rem] ">Who we are</h2>
      <p className="text-[1.75rem] font-medium">
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