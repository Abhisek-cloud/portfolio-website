import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  return (
    <section className="  h-[90vh] bg-[#11071F] overflow-hidden">
      <div className=" relative h-full pt-4 container md:mx-auto  text-white flex items-center justify-evenly   flex-col md:flex-row overflow-hidden">
        <div className=" order-2 md:order-1 flex flex-col items-center md:items-start ">
          <h1 className="text-5xl font-bold text-center md:text-start z-10">
            Hello! i am
            <br />
            <span className="text-[#955ee2]">Abhisek Mukherjee</span>
          </h1>
          <p className="text-4xl mt-2 z-10">I am Web developer</p>
          <p className="z-10 w-[100px] px-2 py-2 mt-4 border-r text-lg bg-[#a46ef0] rounded-md outline-none flex justify-center items-center gap-1">
            {" "}
            <a href="mailto:abhisekm912@gmail.com">Contact me</a>
            <FaArrowRight />
          </p>
        </div>
        <div className="order-1 md:order-2 z-10">
          <img
            src="/profile.jpg"
            alt="profile-image"
            className="hero-img z-10"
          />
        </div>
        <div className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[300px] rounded-full bg-[#36165fe3] top-5 left-[40px] blur-3xl z-[1] "></div>
        <div className="absolute   w-[300px] h-[300px]  md:w-[500px] md:h-[400px] rounded-full bg-[#36165fe3] bottom-[70px] right-[50px] blur-3xl"></div>
      </div>
    </section>
  );
};

export default Home;
