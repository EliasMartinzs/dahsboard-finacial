"use client";

import { IoCreateOutline } from "react-icons/io5";
import { useMediaQuery } from "react-responsive";
import { Dialoog } from "./Dialoog";
import { Sheeet } from "./Sheeet";

interface useReponsiveProps {
  children: React.ReactNode;
}

export const Responsive = ({ children }: useReponsiveProps) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1024px)",
  });

  if (isDesktopOrLaptop && "dialog") {
    return (
      <Dialoog
        iconOpen={<IoCreateOutline className="w-7 h-7 cursor-pointer" />}
      >
        {children}
      </Dialoog>
    );
  }

  if (!isDesktopOrLaptop && "sheet") {
    return (
      <Sheeet
        iconOpen={<IoCreateOutline className="w-7 h-7 cursor-pointer" />}
        side="bottom"
        style="w-full flex-center flex-col"
      >
        {children}
      </Sheeet>
    );
  }

  return null;
};
