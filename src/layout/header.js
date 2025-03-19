import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { CopyToClipboard } from "../utils/copyToClipboard";
import { FaFacebookF, FaLinkedinIn, FaPinterestP, FaRegCopy, FaYoutube } from "react-icons/fa";
import { BsTwitterX, BsInstagram } from "react-icons/bs";
import { IoCall, IoClose } from "react-icons/io5";
import { GrMail } from "react-icons/gr";
import ImageIcons from '../components/imageComponent/ImageIcons';
import { CgMenu } from "react-icons/cg";
import { windowScroll } from "../utils/windowScroll";
import Searchbar from "../components/shared/searchbar";
import LazyLoad from 'react-lazyload';

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "visible";
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [isMenuOpen]);

  const mail = "info@skypro.co.in";
  const isActive = (path) => {
    return location.pathname === path ? "text-[#fd5901]" : "";
  };

  return (
    <>
      <div className="bg-primary py-[15px]">
        <div className="container">
          <div className="flex justify-between max-md:flex-wrap max-md:justify-center gap-[15px]">
            <ul className="flex items-center sm:gap-[30px] gap-[15px]">
              <li className="flex items-center text-white gap-[5px]">
                <IoCall className="inline-block" />
                <Link className="text-white" to="tel:+919803596035">+(91) 9803596035</Link>
              </li>
              <li
                className="item cursor-pointer text-white gap-[5px] flex items-center"
                onClick={() => CopyToClipboard(mail)}
              >
                <GrMail className="inline-block" />
                <div>Email Us</div>
                <FaRegCopy />
              </li>
            </ul>
            <div className="flex items-center gap-[20px]">
              <div className="sm:flex hidden">
                <Searchbar />
              </div>
              <ul className="sm:flex gap-[6px] hidden">
                {contactData.map((data) => (
                  <li key={data.key}>
                    <Link
                      to={data.url}
                      aria-label={data.aria}
                      role="button"
                      target="_blank"
                      className="bg-white text-[#fd5901] hover:text-white hover:bg-[#fd5901] w-[30px] h-[30px] text-[15px] rounded-[50%] flex justify-center items-center"
                    >
                      <span>{data.icon}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <header className="sticky top-0 bg-white z-[99999] shadow-[0_10px_15px_rgba(25,25,25,0.1)]">
        <div className="container">
          <div className="flex justify-between items-center py-[10px] gap-[15px]">
            <Link to="/home">
              <LazyLoad>
                <img
                  src={ImageIcons.logo}
                  alt="skypro logo"
                  title="skypro logo"
                  width="190"
                  height="60"
                  className="max-lg:w-[170px] max-md:w-[150px]"
                  onClick={windowScroll}
                />
              </LazyLoad>
            </Link>
            <ul className={` max-md:py-[30px] flex items-center justify-between lg:gap-[35px] md:gap-[10px] gap-[20px] max-lg:w-[75%] max-md:fixed max-md:h-screen max-md:top-0 max-md:left-0 max-md:w-full max-md:z-60 max-md:bg-white max-md:flex-col max-md:justify-center duration-700 ${isMenuOpen ? ' overflow-y-none opacity-100 overflow-visible' : 'max-md:overflow-y-none max-md:left-[-100%] max-md:overflow-hidden'}`}>
              <li className="sm:hidden">
                <Searchbar />
              </li>
              {navigationData.map((data) => (
                <li className="max-md:px-[20px]" key={data.key}>
                  <Link
                    className={`nav-link text-[#071e43] hover:text-[#fd5901] font-medium ${isActive(data.url)}`}
                    to={`${data.url}`}
                    role="button"
                    onClick={() => {
                      setIsMenuOpen(false);
                      windowScroll();
                    }}
                    target={data.content === "PARTNER SIGNUP" ? "_blank" : ""}
                  >
                    {data.content}
                  </Link>
                </li>
              ))}
              <li>
                <Link className="bg-[#fd5901] max-md:mx-[20px] font-medium text-white px-6 h-[42px] leading-[42px] inline-block rounded-[50px] hover:bg-[#081c44]"
                  to="/iptv-app"
                  onClick={() => {
                    setIsMenuOpen(false);
                    windowScroll();
                  }} >GET APP</Link>
              </li>
              <li>
                <ul className="flex gap-[6px] sm:hidden">
                  {contactData.map((data) => (
                    <li key={data.key}>
                      <Link
                        to={data.url}
                        aria-label={data.aria}
                        role="button"
                        target="_blank"
                        className="bg-white text-[#fd5901] hover:text-white hover:bg-[#fd5901] w-[30px] h-[30px] text-[15px] rounded-[50%] flex justify-center items-center"
                      >
                        <span>{data.icon}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <IoClose onClick={() => setIsMenuOpen(false)} className="text-[35px] text-[#071e43] hover:text-[#fd5901] duration-700 absolute right-[20px] top-[20px] md:hidden" />

            </ul>
            <button className="md:hidden" type="button" onClick={toggleMenu}><CgMenu className="text-[25px]" /></button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

const contactData = [
  {
    url: "https://www.youtube.com/@SkyPro_TV",
    icon: <FaYoutube />,
    aria: "youtube",
    key: "1",
  },
  {
    url: "https://www.facebook.com/people/Skypro/61563585787492/",
    icon: <FaFacebookF />,
    aria: "facebook",
    key: "2",
  },
  {
    url: "https://x.com/sky_proiptv",
    icon: <BsTwitterX />,
    aria: "twitter",
    key: "3",
  },
  {
    url: "https://www.linkedin.com/company/skyprotv/",
    icon: <FaLinkedinIn />,
    aria: "linkedin",
    key: "4",
  },
  {
    url: "https://in.pinterest.com/skyprotv/",
    icon: <FaPinterestP />,
    aria: "pinterest",
    key: "5",
  },
  {
    url: "https://www.instagram.com/skypro_tv/",
    icon: <BsInstagram />,
    aria: "instagram",
    key: "6",
  },
];

const navigationData = [
  {
    url: "/about-us",
    content: "ABOUT US",
    key: "1",
  },
  {
    url: "/subscription-packages-iptv",
    content: "PACKAGES",
    key: "2",
  },
  {
    url: "/contact-us",
    content: "CONTACT US",
    key: "3",
  },
  {
    url: "https://admin.skypro.co.in/self-registration",
    content: "PARTNER SIGNUP",
    key: "4",
  },
];
