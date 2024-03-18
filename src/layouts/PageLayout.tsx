import React, { FC } from "react";
import Navbar from "../components/Navbar";
import { Children } from "../shared/types";
import Topbar from "../components/Topbar";

interface Props {
  children?: Children;
}

const PageLayout: FC<Props> = ({ children }) => {
  return (
    <div className="bg-black text-white">
      <Topbar />
      <Navbar />
      {children}
      <div className="h-[400pt]" />
    </div>
  );
};

export default PageLayout;
