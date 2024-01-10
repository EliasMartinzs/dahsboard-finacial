import { LoginForm } from "@/components/auth/LoginForm";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <main className="">
      <div className="flex max-lg:h-[100svh] lg:h-screen lg:p-10 bg-white">
        <div className="flex-1 grid place-items-center max-lg:hidden lg:bg-[#121212] rounded-2xl shadow-lg">
          <LoginForm />
        </div>
        <div className="h-full relative lg:w-3/4">
          <Image
            src="/login2.svg"
            alt="login image"
            className="object-contain object-center"
            fill
          />
        </div>

        <div className="w-full h-1/2 lg:hidden">
          <div className="relative w-full h-full translate-y-20">
            <Image
              src="/login2.svg"
              alt="login image"
              className="object-contain object-center"
              fill
            />
          </div>
          <div className="-translate-y-20 p-8">
            <LoginForm />
          </div>
        </div>
      </div>
    </main>
  );
}
