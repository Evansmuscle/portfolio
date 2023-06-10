import React from "react";

// Fonts
import { urbanist } from "@/app/layout";

const Copyright: React.FC = () => {
  return (
    <div className="absolute right-8 bottom-8">
      <p className={`${urbanist.className} font-normal text-xl text-black`}>
        KAAN&copy; ALL RIGHTS RESERVED
      </p>
    </div>
  );
};

export default Copyright;
