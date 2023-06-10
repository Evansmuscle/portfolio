"use client";

import { urbanist } from "@/app/layout";
import { ReactNode, useState } from "react";

interface Props {
  linkMap: Array<[string, string]>;
}

const Hamburger: React.FC<Props> = ({ linkMap }) => {
  const [isOpen, setIsOpen] = useState(false);

  const indentConf = new Map<number, string>();
  indentConf.set(0, "ml-16");
  indentConf.set(1, "ml-11");
  indentConf.set(2, "ml-6");
  indentConf.set(3, "ml-1");

  return (
    <>
      <div
        onClick={() => setIsOpen((val) => !val)}
        className={`absolute right-8 top-8 cursor-pointer flex flex-col items-center justify-center ${
          isOpen ? null : "gap-y-1.25"
        } p-2 z-20`}
      >
        <span
          className={`transition-all ease-in origin-center h-1 w-9 bg-black ${
            isOpen ? "rotate-45 translate-y-1" : null
          }`}
        />
        {isOpen ? null : <span className="h-1 w-9 bg-black" />}
        <span
          className={`transition-all ease-in origin-center h-1 w-9 bg-black ${
            isOpen ? "-rotate-45" : null
          }`}
        />
      </div>
      <div
        style={{
          clipPath: "polygon(77% 0, 100% 0%, 100% 50%, 87% 100%, 50% 100%)",
        }}
        className={`transition-all duration-300 ${
          isOpen
            ? "translate-x-0 translate-y-0"
            : "translate-x-[27%] -translate-y-full"
        } absolute right-0 top-0 bottom-0 bg-primary opacity-90 h-screen w-1/2 z-10`}
      >
        <ul className="absolute right-20 top-1/2 -translate-y-1/2">
          {linkMap.map(([key, value], idx) => {
            return (
              <li
                key={idx}
                style={{ fontStyle: "italic" }}
                className={`mb-6 ${indentConf.get(
                  idx
                )} font-light hover:font-bold ${
                  urbanist.className
                } text-white hover:text-black text-4xl`}
              >
                <a href={value}>
                  {idx + 1}. {key.toUpperCase()}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Hamburger;
