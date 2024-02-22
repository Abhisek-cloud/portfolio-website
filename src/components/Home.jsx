import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const Home = () => {
  const variants = {
    hidden: {
      y: 90,
    },
    show: {
      y: 0,
    },
  };

  return (
    <motion.section className="  h-screen bg-[#11071F] overflow-hidden">
      <motion.div className=" relative h-full pt-4 container md:mx-auto  text-white flex items-center justify-evenly   flex-col md:flex-row overflow-hidden">
        <motion.div
          className=" order-2 md:order-1 flex flex-col items-center md:items-start "
          variants={variants}
          initial="hidden"
          whileInView="show"
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <h1 className="text-5xl font-bold text-center md:text-start z-[2]">
            Hello! i am
            <br />
            <span className="text-[#955ee2]">Abhisek Mukherjee</span>
          </h1>
          <p className="text-4xl mt-2 z-[2]">I am a Web developer</p>
          <motion.div
            className="z-[2] min-w-[100px] px-2 py-2 mt-4 border-r text-lg bg-[#a46ef0] rounded-md outline-none flex justify-center items-center gap-1"
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 },
            }}
            whileTap={{
              scale: 0.95,
            }}
          >
            {" "}
            <a href="mailto:abhisekm912@gmail.com">Contact me</a>
            <FaArrowRight />
          </motion.div>
        </motion.div>
        <div className="order-1 md:order-2 z-[2]">
          <img
            src="/profile.webp"
            alt="profile-image"
            className="hero-img z-10"
          />
        </div>
        <div className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[300px] rounded-full bg-[#36165fe3] top-5 left-[40px] blur-3xl z-[1] "></div>
        <div className="absolute   w-[300px] h-[300px]  md:w-[500px] md:h-[400px] rounded-full bg-[#36165fe3] bottom-[70px] right-[50px] blur-3xl"></div>
      </motion.div>
    </motion.section>
  );
};

export default Home;
