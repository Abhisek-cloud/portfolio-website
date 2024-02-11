import React from "react";

const About = () => {
  return (
    <section className="px-2 md:px-0 bg-[#11071F] ">
      <div className="container md:mx-auto text-white flex flex-col justify-center items-center h-[300px]">
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
      </div>
    </section>
  );
};

export default About;
