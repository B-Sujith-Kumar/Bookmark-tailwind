import logo from "../assets/images/logo-bookmark.svg";
import hamburger from "../assets/images/icon-hamburger.svg";
import close from "../assets/images/close-icon.svg";
import Button from "./Button";
import { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="px-14 py-14 w-full max-xs:px-2 max-lg:mx-auto max-2xs:px-2">
      <nav className="flex justify-between items-center">
        <img src={logo} alt="logo" />
        <ul className="flex items-center max-md:hidden font-rubik uppercase justify-evenly gap-10">
          <li className="cursor-pointer text-slate-400 hover:text-[#FA5757] text-md tracking-widest">
            <a href="#features">Features</a>
          </li>
          <li className="cursor-pointer text-slate-400 hover:text-[#FA5757] text-md tracking-widest">
            <a href="#browser">Download</a>
          </li>
          <li className="cursor-pointer text-slate-400 hover:text-[#FA5757] text-md tracking-widest">
            <a href="#faq">FAQ</a>
          </li>
          <li className="uppercase">
            <Button label="Login" uppercase={true} />
          </li>
        </ul>
        <img
          src={hamburger}
          alt="hamburger"
          width={25}
          height={25}
          className={`md:hidden  block cursor-pointer ${
            isOpen ? "hidden" : "block"
          }`}
          onClick={() => {
            setIsOpen(!isOpen);
            console.log(isOpen);
          }}
        />
        <img
          src={close}
          alt="close"
          width={25}
          height={25}
          className={`md:hidden relative z-10 block cursor-pointer ${
            isOpen ? "block" : "hidden"
          }`}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
      </nav>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden fixed min-h-screen bg-[#252B46] w-full top-0 left-0`}
      >
        <div className="mt-32 opacity-100">
          <ul className="flex flex-col items-center justify-center gap-10 text-white font-rubik uppercase text-center tracking-widest font-semibold text-lg">
            <li
              className="cursor-pointer text-slate-400 hover:text-[#FA5757] text-md tracking-widest"
              onClick={() => setIsOpen(!isOpen)}
            >
              <a href="#features">Features</a>
            </li>
            <li className="cursor-pointer text-slate-400 hover:text-[#FA5757] text-md tracking-widest">
              <a href="#browser" onClick={() => setIsOpen(!isOpen)}>
                Download
              </a>
            </li>
            <li className="cursor-pointer text-slate-400 hover:text-[#FA5757] text-md tracking-widest">
              <a href="#faq" onClick={() => setIsOpen(!isOpen)}>
                FAQ
              </a>
            </li>
            <li className="uppercase" onClick={() => setIsOpen(!isOpen)}>
              <Button label="Login" uppercase={true} />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Nav;
