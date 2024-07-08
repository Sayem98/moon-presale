import React, { useState } from "react";
import "./header.css";
import Logo from "../../assets/logo.png";
import { FaTelegram, FaTwitter, FaDiscord } from "react-icons/fa";
import { MdMenu, MdClose } from "react-icons/md";
import pdfFile from "./../../assets/MOON MEME COIN (6).pdf";
import { Link } from "react-router-dom";
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handlePdfClick = () => {
    window.open(pdfFile, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed w-full mt-4 px-2 z-50">
      <div className="flex items-center justify-between w-full bg-[#1b3083f5] max-w-[1200px] mx-auto rounded-xl px-1">
        <div>
          <img src={Logo} alt="Logo" className="w-20 h-20" />
        </div>
        <div className="md:block hidden">
          <ul className="flex items-center gap-4 text-white">
            <Link to="/staking">
              <li className="cursor-pointer text-base font-medium">STAKING</li>
            </Link>
            <a href="#about">
              <li className="cursor-pointer text-base font-medium">ABOUT</li>
            </a>
            <li
              onClick={handlePdfClick}
              className="cursor-pointer text-base font-medium"
            >
              WHITEPAPER
            </li>

            {/* <li className="cursor-pointer text-base font-medium">AUDIT</li> */}
            <a href="#tokenomics">
              <li className="cursor-pointer text-base font-medium">
                TOKENOMICS
              </li>
            </a>
            <a href="#faq">
              <li className="cursor-pointer text-base font-medium">FAQs</li>
            </a>
          </ul>
        </div>
        <div className="flex items-center gap-4">
          {/* <button className='w-28 bg-white text-black font-semibold h-10 rounded-xl'>BUY NOW</button> */}
          <w3m-button />
          <div className="md:flex hidden items-center gap-4">
            <a
              href="https://t.me/+Ge9LJraGcAQwZGQ0"
              target="_blank"
              className="border border-white p-1.5 rounded-full"
            >
              <FaTelegram className="text-white text-xl" />
            </a>
            <a
              href="https://twitter.com/Moonmemeco32909"
              className="border border-white p-1.5 rounded-full"
              target="_blank"
            >
              <FaTwitter className="text-white text-xl" />
            </a>
          </div>
          <button className="md:hidden block" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <MdClose className="text-white text-5xl" />
            ) : (
              <MdMenu className="text-white text-5xl" />
            )}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`absolute top-20 left-0 w-full bg-[#1b3083f5] px-8 py-4 transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <ul className="flex flex-col items-center gap-4 text-white">
          <Link to="/staking">
            <li className="cursor-pointer text-base font-medium">STAKING</li>
          </Link>

          <a href="#about">
            <li className="cursor-pointer text-base font-medium">ABOUT</li>
          </a>
          <li
            onClick={handlePdfClick}
            className="cursor-pointer text-base font-medium"
          >
            WHITEPAPER
          </li>

          {/* <li className="cursor-pointer text-base font-medium">AUDIT</li> */}
          <a href="#tokenomics">
            <li className="cursor-pointer text-base font-medium">TOKENOMICS</li>
          </a>
          <a href="#faq">
            <li className="cursor-pointer text-base font-medium">FAQs</li>
          </a>
          <li>
            <a href="#buy">
              <button className="w-28 bg-white text-black font-semibold h-10 rounded-xl mt-4">
                BUY NOW
              </button>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
