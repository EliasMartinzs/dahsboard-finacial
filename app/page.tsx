import { Center } from "@/components/landing/Center";
import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";
import React, { Suspense } from "react";
import Loading from "./loading";

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <Header />
      <Center />
      <Footer />
    </Suspense>
  );
}
