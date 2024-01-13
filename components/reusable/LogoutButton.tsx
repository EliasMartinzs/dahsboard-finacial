"use client";
import { IoIosLogOut } from "react-icons/io";
import { logout } from "@/actions/logout";

export function LogoutButton() {
  const onClick = () => {
    logout();
  };
  return (
    <span
      onClick={onClick}
      className="flex-center gap-x-3 text-xl hover:underline underline-offset-4 cursor-pointer"
    >
      <IoIosLogOut />
      <small className="font-light">Sair</small>
    </span>
  );
}
