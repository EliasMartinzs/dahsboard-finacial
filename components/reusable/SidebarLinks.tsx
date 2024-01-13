import { LinksSidebar } from "./LinksSidebar";
import { LogoutButton } from "./LogoutButton";
import { ToggleTheme } from "./ToggleTheme";
import { UserCard } from "./UserCard";

export function SidebarLinks() {
  return (
    <div className="flex flex-col h-full py-5">
      <UserCard />
      <LinksSidebar />
      <div className="flex flex-col items-start justify-end h-full gap-y-5">
        <ToggleTheme />
        <LogoutButton />
      </div>
    </div>
  );
}
