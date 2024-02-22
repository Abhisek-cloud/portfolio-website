import React from "react";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import ContactLink from "./utils/ContactLink";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
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
const variant = {
  hidden: {
    y: 100,
  },
  show: {
    y: 0,
  },
};
const Contact = () => {
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log("Page scroll: ", latest);
  });
  return (
    <motion.section className="bg-[#36165fe3] h-[20vh]">
      <motion.div className=" text-white flex flex-col  items-center justify-center gap-2 h-full">
        <motion.div>
          <h2 className="text-3xl font-bold">Stay connected with me</h2>
        </motion.div>
        <p className="text-xl">Email: abhisekm912@gmail.com</p>
        <motion.div className="flex gap-3">
          {contatcLinks.map((item) => (
            <ContactLink logo={item.logo} link={item.link} />
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
