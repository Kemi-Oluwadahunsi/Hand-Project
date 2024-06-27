import Image from "next/image";
import sideImage from "../../public/images/sideImage.png";

const Form = () => {
  return (
    <div className="flex justify-between px-[5rem] py-[10rem]">
      <div>
        <Image src={sideImage} alt="sideImage" title="side Image" />
      </div>

      <form className="flex flex-col gap-[2.6rem] basis-[50%] px-8">
        <h2 className="text-[#101010] text-[2rem] font-bold w-[59%] place-self-end">
          We&lsquo;d love to hear from you
        </h2>
        <input
          type="text"
          placeholder="Name*"
          className="py-8 px-8 rounded-lg outline-zinc-400 outline-none placeholder:text-[#101010] placeholder:font-semibold text-2xl"
        />
        <input
          type="email"
          placeholder="Email*"
          className="py-8 px-8 rounded-lg outline-zinc-400 outline-none placeholder:text-[#101010] placeholder:font-semibold text-2xl"
        />
        <input
          type="url"
          placeholder="Website Url*"
          className="py-8 px-8 rounded-lg outline-zinc-400 outline-none placeholder:text-[#101010] placeholder:font-semibold text-2xl"
        />
        <textarea
          name="project"
          id="project"
          rows="5"
          placeholder="Project Details*"
          className="pt-8 px-8 rounded-lg outline-zinc-400 outline-none placeholder:text-[#101010] placeholder:font-semibold text-2xl"
        ></textarea>
        <button className="py-8 px-8 bg-black text-white rounded-lg outline-none text-2xl">
          Send Proposal
        </button>
      </form>
    </div>
  );
};

export default Form;
