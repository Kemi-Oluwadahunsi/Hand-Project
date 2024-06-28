'use client'
import { useRouter } from "next/navigation";
import Image from "next/image";
import sideImage from "../../public/images/sideImage.png";

const Form = () => {

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/successPage");
  };
  return (
    <div id="contactus" className="flex justify-between px-8 lg:px-[4rem] xl:px-[5rem] py-[3rem] lg:py-[10rem]">
      <div className="hidden lg:block">
        <Image src={sideImage} alt="sideImage" title="side Image" />
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col lg:gap-[2.2rem] gap-[2.6rem] xl:gap-[2.6rem] lg:basis-[60%] xl:basis-[50%] w-full lg:pl-8 xl:px-8">
        <h2 className="text-[#101010] text-[2rem] font-bold lg:w-[80%] xl:w-[59%] text-center lg:text-end place-self-end">
          We&lsquo;d love to hear <br /> <span className="flex justify-end">from you</span>
        </h2>
        <input
          type="text"
          placeholder="Name*"
          required
          className="xl:py-6 lg:py-3 py-4 px-4 xl:px-8 rounded-lg outline-zinc-400 outline-none placeholder:text-[#101010] placeholder:font-semibold lg:text-xl xl:text-2xl"
        />
        <input
          type="email"
          placeholder="Email*"
          required
          className="xl:py-6 lg:py-3 py-4 px-4 xl:px-8 rounded-lg outline-zinc-400 outline-none placeholder:text-[#101010] placeholder:font-semibold lg:text-xl xl:text-2xl"
        />
        <input
          type="url"
          placeholder="Website Url*"
          required
          className="xl:py-6 lg:py-3 py-4 px-4 xl:px-8 rounded-lg outline-zinc-400 outline-none placeholder:text-[#101010] placeholder:font-semibold lg:text-xl xl:text-2xl"
        />
        <textarea
          name="project"
          id="project"
          rows="5"
          placeholder="Project Details*"
          required
          className="lg:pt-6 xl:pt-8 pt-4 px-4 lg:px-8 rounded-lg outline-zinc-400 outline-none placeholder:text-[#101010] placeholder:font-semibold lg:text-xl xl:text-2xl"
        ></textarea>
        <button type="submit" className="xl:py-8 lg:py-4 py-4 px-4 xl:px-8  bg-black text-white rounded-lg outline-none lg:text-2xl">
          Send Proposal
        </button>
      </form>
    </div>
  );
};

export default Form;
