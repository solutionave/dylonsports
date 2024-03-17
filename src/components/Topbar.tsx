import React, { useMemo } from "react";
import { IoMailOutline } from "react-icons/io5";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";
import clsx from "clsx";
const Topbar = () => {
  const linkStyles = clsx([
    "hover:fill-red-500 cursor-pointer hover:text-red-600",
  ]);

  return (
    <div className="flex justify-end gap-4 items-center p-5 border-b border-b-gray-600">
      <div className={clsx(["flex items-center gap-2", linkStyles])}>
        <IoMailOutline size={20} color="red" />
        <span className="text-md font-light tracking-wide">
          dylonsports@gmail.com
        </span>
      </div>
      <div className="h-5 w-[0.5px] bg-gray-600 mx-6" />
      <div className="flex items-center gap-4">
        <FaFacebookF size={16} className={linkStyles} />
        <FaTwitter size={16} className={linkStyles} />
        <FaInstagram size={16} className={linkStyles} />
        <FaPinterest size={16} className={linkStyles} />
      </div>
    </div>
  );
};

export default Topbar;
