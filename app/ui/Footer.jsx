import Image from "next/image";
import x from "../../public/images/x.png";
import linkedin from "../../public/images/linkedin.png";
import face from "../../public/images/face.png";
import insta from "../../public/images/insta.png";
import logo from "../../public/images/logo.png";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#F5F5F5] px-8 lg:px-[5rem] xl:px-[10rem] pt-[3rem] lg:pt-[5rem] pb-8 flex flex-col gap-[3rem]">
        <div className="flex flex-col gap-8 lg:gap-0 lg:flex-row justify-between">
          <div className="flex flex-col gap-4 lg:gap-8">
            <Image src={logo} alt="logo" title="logo" />
            <p>We love what we do and create partnerships</p>
          </div>

          <div className="flex flex-col gap-4 lg:gap-8">
            <div className="flex lg:place-self-end">
              <button className="bg-[#0B0B0B] px-4 lg:px-6 py-2 lg:py-4 rounded-xl text-white">
                Start a project
              </button>
            </div>

            <p className="flex lg:justify-center lg:items-center text-[#525D6A]">
              hello@devseal.tech
            </p>

            <div className="flex gap-4 items-center">
              <Image src={x} alt="socials" title="socials" />
              <Image src={linkedin} alt="socials" title="socials" />
              <Image src={face} alt="socials" title="socials" />
              <Image src={insta} alt="socials" title="socials" />
              <p className="text-{#525D6A]">Hand</p>
            </div>
          </div>
        </div>

        <hr className="flex items-center justify-center bg-[#525D6A] lg:h-[0.1rem] lg:w-[80%] mx-auto" />

        <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 justify-between items-center text-[#525D6A]">
          <p>© 2024 hand. All Rights Reserved</p>
          <ul className="flex gap-4 font-bold ">
            <li>Privacy Policy</li>
            <li>Media Kit</li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
