import { Sheeet } from "../reusable/Sheeet";
import { RiMenu3Fill } from "react-icons/ri";
import { SidebarLinks } from "../reusable/SidebarLinks";

export function SidebarMobile() {
  return (
    <Sheeet
      iconOpen={<RiMenu3Fill className="w-5 h-5 cursor-pointer" />}
      side="right"
    >
      <SidebarLinks />
    </Sheeet>
  );
}
