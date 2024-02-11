import React from "react";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import ContactLink from "./utils/ContactLink";

const contatcLinks = [
  {
    logo: (
      <FaLinkedin className=" rounded-full hover:rotate-[360deg] transition-all duration-1000 " />
    ),
    link: "https://www.linkedin.com/in/abhisek-mukherjee-9279b2217/",
  },
  {
    logo: (
      <FaInstagram className=" rounded-full hover:rotate-[360deg] transition-all duration-1000 " />
    ),
    link: "https://www.instagram.com/Abhisek_0711/",
  },
  {
    logo: (
      <FaGithub className=" rounded-full hover:rotate-[360deg] transition-all duration-1000 " />
    ),
    link: "https://github.com/Abhisek-cloud",
  },
];

const Contact = () => {
  return (
    <section className="bg-[#36165fe3] text-white flex flex-col h-[20vh] items-center justify-center gap-2">
      <div>
        <h2 className="text-3xl font-bold">Stay connected with me</h2>
      </div>{" "}
      <div className="flex gap-3">
        {contatcLinks.map((item) => (
          <ContactLink logo={item.logo} link={item.link} />
        ))}
      </div>
    </section>
  );
};

export default Contact;
