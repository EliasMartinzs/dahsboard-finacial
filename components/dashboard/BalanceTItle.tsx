"use client";

import { useTheme } from "next-themes";
import Image from "next/image";

export function BalanceTItle() {
  const { theme } = useTheme();
  return (
    <div className="flex flex-col gap-y-3">
      <Image alt="wallet" src={`/wallet-${theme}.png`} width={50} height={50} />
      <h2>Minha Carteira</h2>
    </div>
  );
}
