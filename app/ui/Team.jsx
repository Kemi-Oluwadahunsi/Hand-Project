import Image from "next/image";
import one from "../../public/images/1.png";
import two from "../../public/images/2.png";
import three from "../../public/images/3.png";

const Team = () => {
  return (
    <div className="flex flex-col gap-8 lg:gap-[5rem] px-8 lg:px-[5rem] xl:px-[7rem] pb-8 lg:pb-[10rem]">
      <h2 className="font-bold text-[2rem] lg:text-[2.5rem] xl:text-[3rem] text-center">
        Meet the heroes behind the magic
      </h2>

      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div className="flex flex-col gap-8 p-4 shadow-[0px_0px_10px_rgba(0,0,0,0.2)] pb-8">
          <Image src={one} alt="founderImage" title="Founder Image" />
          <div>
            <h3 className="font-bold text-[1.2rem] lg:text-[1.5rem] xl:text-[2rem] ">Esther Howard</h3>
            <p className="text-zinc-400 lg:text-[1.2rem] xl:text-[1.5rem] font-semibold">Founder</p>
          </div>
        </div>

        <div className="flex flex-col gap-8 p-4 shadow-[0px_0px_10px_rgba(0,0,0,0.2)] pb-8">
          <Image src={two} alt="DeveloperImage" title="Developer Image" />
          <div>
            <h3 className="font-bold text-[1.2rem] lg:text-[1.5rem] xl:text-[2rem] ">Cody Fisher</h3>
            <p className="text-zinc-400 lg:text-[1.2rem] xl:text-[1.5rem] font-semibold">
              Developer
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-8 px-4 pt-4 shadow-[0px_0px_10px_rgba(0,0,0,0.2)] pb-8">
          <Image src={three} alt="DesignerImage" title="Designer Image" />
          <div>
            <h3 className="font-bold text-[1.2rem] lg:text-[1.5rem] xl:text-[2rem] ">Brooklyn Simmons</h3>
            <p className="text-zinc-400 lg:text-[1.2rem] xl:text-[1.5rem] font-semibold">
              Designer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
