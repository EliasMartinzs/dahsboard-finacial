"use client";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export function UserCard() {
  const { email, image, name } = useCurrentUser();

  return (
    <div className="flex justify-start items-center gap-x-3">
      <Avatar>
        <AvatarImage src={image ?? ""} />
        <AvatarFallback className="uppercase">
          {name?.substring(0, 2)}
        </AvatarFallback>
      </Avatar>
      <h2 className="capitalize">{name}</h2>
    </div>
  );
}
