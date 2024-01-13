"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { Switch } from "../ui/switch";

export function ToggleTheme() {
  const { setTheme, theme } = useTheme();

  const switchTheme = () => {
    if (setTheme) {
      setTheme(theme === "light" ? "dark" : "light");
    }
  };

  const themePT =
    theme === "light" ? (
      <>
        <SunIcon className="w-5 h-5" /> Tema Claro
      </>
    ) : (
      <>
        <MoonIcon className="w-5 h-5" /> Tema Escuro
      </>
    );

  return (
    <span className="flex-center gap-x-3">
      {themePT}
      <Switch onClick={switchTheme} />
    </span>
  );
}
