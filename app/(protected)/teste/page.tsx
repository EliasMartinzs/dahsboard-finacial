import Loading from "@/app/loading";
import { ToggleTheme } from "@/components/reusable/ToggleTheme";
import { Button } from "@/components/ui/button";
import React from "react";

export default function Teste() {
  return (
    <>
      <ToggleTheme />
      <Loading />
    </>
  );
}
