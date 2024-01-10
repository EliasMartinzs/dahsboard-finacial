"use client";
import { Button } from "../ui/button";
import { logout } from "@/actions/logout";

export function LogoutButton({ children }: { children: React.ReactNode }) {
  const onClick = () => {
    logout();
  };
  return <Button onClick={onClick}>{children}</Button>;
}
