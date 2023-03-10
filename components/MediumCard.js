import React from "react";
import Image from "next/image";

const MediumCard = ({ img, title }) => {
  return (
    <div className="cursor-pointer hover:scale-105 transition transform duration-800 ease-out">
      <div className="relative h-80 w-80">
        <Image
          className="rounded-xl"
          alt={`${title} photo`}
          src={img}
          fill
        />
      </div>
      <h3 className="text-2xl mt-3">{title}</h3>
    </div>
  );
};

export default MediumCard;
