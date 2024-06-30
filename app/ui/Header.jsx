"use client";
import Image from "next/image";
import logo from "../../public/images/logo.png";
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
   const [activeLink, setActiveLink] = useState("Home");

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

   const handleSetActive = (link) => {
     setActiveLink(link);
   };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    if (menuOpen) {
      toggleMenu();
    }
  };
  return (
    <>
      <header className="lg:fixed z-[10000] shadow-lg bg-white w-full">
        <nav className="flex justify-between items-center px-4 lg:px-[3rem] xl:px-[5rem] py-4 w-full">
          <div>
            <Image src={logo} alt="logo" title="logo" />
          </div>

          <ul className="lg:flex justify-between lg:basis-[40%] xl:basis-[30%] font-bold hidden">
            {["Home", "About Us", "Services", "Blog", "Contact Us"].map(
              (link) => (
                <li
                  key={link}
                  className={`cursor-pointer ${
                    activeLink === link ? "text-[#C82090]" : "text-[#5A6675]"
                  }`}
                >
                  <ScrollLink
                    to={link.replace(/\s+/g, "").toLowerCase()}
                    smooth={true}
                    duration={500}
                    offset={-100}
                    activeClass="activeColor"
                    onSetActive={() => handleSetActive(link)}
                    onClick={() => handleLinkClick(link)}
                  >
                    {link}
                  </ScrollLink>
                </li>
              )
            )}
          </ul>

          <div className="hidden lg:block">
            <button className="bg-[#0B0B0B] px-4 py-3 xl:px-6 xl:py-4 rounded-xl text-white">
              Start a project
            </button>
          </div>

          {/* mobile navigation */}

          <div className="block md:hidden">
            <button onClick={toggleMenu} className="text-[#5A6675]">
              {menuOpen ? (
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              )}
            </button>
          </div>

          {menuOpen && (
            <div className="lg:hidden absolute h-screen pt-[4rem] pb-8 bg-[#FDCA09] top-[10%] left-0 flex flex-col gap-4 items-center z-[9999] w-full">
              <ul className="flex flex-col gap-8 justify-between font-bold text-lg ">
                {["Home", "About Us", "Services", "Blog", "Contact Us"].map(
                  (link) => (
                    <li
                      key={link}
                      className={`cursor-pointer ${
                        activeLink === link ? "text-[#C82090]" : ""
                      }`}
                    >
                      <ScrollLink
                        to={link.replace(/\s+/g, "").toLowerCase()}
                        smooth={true}
                        duration={500}
                        offset={0}
                        activeClass="activeColor"
                        onSetActive={() => handleSetActive(link)}
                        onClick={() => handleLinkClick(link)}
                      >
                        {link}
                      </ScrollLink>
                    </li>
                  )
                )}
              </ul>

              <div>
                <button className="bg-[#0B0B0B] px-6 py-4 rounded-xl text-white">
                  Start a project
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

export default Header;
