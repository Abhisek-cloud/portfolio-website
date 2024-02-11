import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/About" },
  { name: "Skills", path: "/skills" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsopen] = useState(false);
  return (
    <nav className=" relative bg-[#1A0B2E] flex items-center justify-between px-10 py-3 text-white  h-[50px]">
      <div>
        <h1 className="text-3xl">Portfolio</h1>
      </div>
      <ul
        className={`flex gap-3 absolute md:static flex-col md:flex-row ${
          isOpen ? "top-[60px] right-8" : "-top-[490px]"
        } bg-[#6939ac] px-3 py-2 rounded-md md:bg-inherit md:px-0 md:py-0 `}
      >
        {links.map((i) => (
          <li key={i.name} className="text-xl ">
            <a href={i.path} className="hover:border-b-2">
              {i.name}
            </a>
          </li>
        ))}
      </ul>
      <div className="absolute md:hidden text-3xl font-medium top-3 right-5">
        {isOpen ? (
          <IoMdClose onClick={() => setIsopen((prev) => !prev)} />
        ) : (
          <CiMenuFries onClick={() => setIsopen((prev) => !prev)} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
