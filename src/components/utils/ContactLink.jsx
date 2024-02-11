import React from "react";

const ContactLink = ({ logo, link }) => {
  return (
    <div>
      {" "}
      <a href={link} target="_blank" className="text-4xl ">
        {logo}
      </a>
    </div>
  );
};

export default ContactLink;
