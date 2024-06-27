import Image from "next/image";
import logo from "../../public/images/logo.png"
const Header = () => {
  return (
    <>
      <header className="">
        <nav className="flex justify-between items-center px-[5rem] py-4">
          <div>
            <Image src={logo} alt="logo" title="logo" />
          </div>

          <ul className="flex justify-between basis-[30%] font-bold text-[#5A6675] ">
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>

          <div>
            <button className="bg-[#0B0B0B] px-6 py-4 rounded-xl text-white">Start a project</button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
