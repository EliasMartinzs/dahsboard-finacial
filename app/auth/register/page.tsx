import { RegisterForm } from "@/components/auth/RegisterForm";
import Image from "next/image";
import React from "react";

export default function Register() {
  return (
    <main className="">
      <div className="flex max-lg:h-[100svh] lg:h-screen lg:p-10 bg-white">
        <div className="flex-1 grid place-items-center max-lg:hidden lg:bg-[#121212] rounded-2xl shadow-lg">
          <RegisterForm />
        </div>
        <div className="h-full relative lg:w-3/4">
          <Image
            src="/register.svg"
            alt="login image"
            className="object-contain object-center"
            fill
          />
        </div>

        <div className="w-full h-1/2 lg:hidden">
          <div className="relative w-full h-full translate-y-20">
            <Image
              src="/register.svg"
              alt="login image"
              className="object-contain object-center"
              fill
            />
          </div>
          <div className="-translate-y-20 p-8">
            <RegisterForm />
          </div>
        </div>
      </div>
    </main>
  );
}
