import clsx from "clsx";
import React, { FC } from "react";
import { GrNext } from "react-icons/gr";
import { BsTelephone } from "react-icons/bs";
import { SiteName } from "../shared/contants";

interface Props {}

const Navbar: FC<Props> = ({}) => {
  return (
    <div className="px-3 py-1 flex flex-row items-center gap-6 border-b-[0.5px] border-b-gray-600">
      <div className="border-r border-r-gray-600 pr-4">
        <span className="text-2xl font-bold italic text-red-500 m-0 p-0 block">
          {SiteName}
        </span>
        <span className="italic text-base">Your choice</span>
      </div>
      <div className="flex-1 flex gap-5 font-semibold">
        <div className="hover:text-red-600 cursor-pointer">Home</div>
        <div className="hover:text-red-600 cursor-pointer">About Us</div>
        <div className="hover:text-red-600 cursor-pointer">Our Products</div>
        <div className="hover:text-red-600 cursor-pointer">Production tour</div>
        <div className="hover:text-red-600 cursor-pointer">Contact Us</div>
      </div>
      <div
        className={clsx([
          "group flex flex-row items-center gap-2",
          "border-r border-l px-5 border-gray-600",
        ])}
      >
        <BsTelephone className="group-hover:fill-red-600" size={20} />
        <span>
          <a href="tel:+923335166620" className="group-hover:text-red-600">
            0333 5166620
          </a>
        </span>
      </div>
      <div
        className={clsx([
          "bg-red-600 px-5 py-3 rounded-md cursor-pointer",
          "hover:opacity-80 transition-all duration-300",
          "flex items-center gap-3 justify-between group",
        ])}
      >
        <span>Get a Quote</span>
        <GrNext
          size={18}
          className={clsx([
            "group-hover:translate-x-2",
            "transition-all duration-300",
          ])}
        />
      </div>
    </div>
  );
};

export default Navbar;
