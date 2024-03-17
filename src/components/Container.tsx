import React, { FC } from "react";
import { Children } from "../shared/types";

interface Props {
  children?: Children;
}

const Container: FC<Props> = ({ children }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-full sm:w-[500pt] md:w-[650pt] xl:w-[1000pt]">
        {children}
      </div>
    </div>
  );
};

export default Container;
