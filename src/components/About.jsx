import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section className="px-2 md:px-0 bg-[#11071F] ">
      <motion.div
        className="container md:mx-auto text-white flex flex-col justify-center items-center h-[300px]"
        initial={{ y: 100 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
      >
        <h2 className="text-center text-[50px] font-bold text-white  border-b  ">
          About
        </h2>
        <p className="text-center text-wrap text-lg md:text-xl mt-6">
          Hey there! I'm Abhisek Mukherjee, a budding web developer with a
          passion for creating awesome digital experiences.
          <br />I have done my graduation in BCA from
          sidhu-kanhu-Birsha-Univercity I'm all about turning ideas into reality
          using HTML, CSS, and JavaScript.{" "}
          {/* I'm
          constantly learning and growing. I thrive on collaboration and love
          working in teams to tackle challenges head-on. My goal is to craft
          visually appealing, user-friendly websites that make a lasting impact.
          Let's connect and build something amazing together! */}
        </p>
      </motion.div>
    </motion.section>
  );
};

export default About;
