/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px]">
      <Image
        src="https://links.papareact.com/0fm"
        fill
        alt="hero-image"
        className="object-cover"
        priority
      />
      <div className="absolute top-1/2 w-full text-center">
        <h1 className="text-2xl font-bold">Not sure where to go? Perfect.</h1>
        <Link href="https://earthroulette.com/random/North%20America">
          <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-5 hover:shadow-xl active:scale-90 transition duration-150">
            I'm flexible
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
