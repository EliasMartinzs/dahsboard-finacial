"use client";

import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

export const Social = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");

  const loginWithProvider = (provider: "google" | "github") => {
    signIn(provider, {
      callbackUrl: callbackUrl || DEFAULT_LOGIN_REDIRECT,
    });
  };

  return (
    <div className="flex items-center w-full gap-x-2">
      <Button
        size="lg"
        className="w-full border border-slate-400 rounded-md hover:shadow-lg hover:border-primary-500 transition-colors"
        onClick={() => loginWithProvider("google")}
      >
        <FcGoogle className="text-2xl" />
      </Button>
      <Button
        size="lg"
        className="w-full border border-slate-400 rounded-md hover:shadow-lg hover:border-primary-500 transition-colors"
        onClick={() => loginWithProvider("github")}
      >
        <FaGithub className="text-2xl" />
      </Button>
    </div>
  );
};
