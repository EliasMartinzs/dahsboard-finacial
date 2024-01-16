"use client";

import { useTheme } from "next-themes";
import Image from "next/image";

interface CardsTitle {
  title: string;
  img: string;
  alt: string;
}

export function CardsTitle({ img, title, alt }: CardsTitle) {
  const { theme } = useTheme();

  const currentTheme = theme ?? "system";

  const imagePath = `/${img}-${currentTheme}.png`;

  return (
    <div className="flex flex-col gap-y-3">
      <Image alt={alt} src={imagePath} width={50} height={50} />
      <h2 className="text-xl font-medium">{title}</h2>
    </div>
  );
}
