import React from "react";

// Fonts
import { Urbanist } from "next/font/google";
const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

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
