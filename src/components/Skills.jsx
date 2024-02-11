import React from "react";

import Skillslogo from "./utils/Skillslogo";
const imgSrc = [
  { src: "/download.png", alt: "html" },
  { src: "/css.png", alt: "css" },
  { src: "/js.png", alt: "js" },
  { src: "/react.png", alt: "react" },

  { src: "/mongo.jpg", alt: "mongo" },
  { src: "/node.png", alt: "node" },
  { src: "/git.png", alt: "git" },
  { src: "/tailwind.jpg", alt: "tailwind" },
];

const Skills = () => {
  return (
    <section className="bg-[#11071F] h-[30vh ]">
      <div className=" container md:mx-auto flex flex-col">
        <div className=" flex items-center justify-center ">
          <h2 className="text-white text-[50px] border-b ">Skills</h2>
        </div>
        <div className="flex justify-center gap-2 mt-4 mb-7 flex-wrap mx-2 md:mx-0 shadow-xl">
          {imgSrc.map((item) => (
            <Skillslogo src={item.src} alt={item.alt} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
