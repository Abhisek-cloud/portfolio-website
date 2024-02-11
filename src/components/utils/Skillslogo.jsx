import React from "react";

const Skillslogo = ({ src, alt }) => {
  return (
    <div className=" rounded-full w-[50px] h-[50px] bg-[#7b46c5] flex justify-center items-center shadow-inherit">
      <img src={src} alt={alt} className="p-[2px] w-[45px] rounded-[50%]" />
    </div>
  );
};

export default Skillslogo;
