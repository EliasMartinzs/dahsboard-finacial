"use client";
import { linksHeaderDashboard } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function LinksSidebar() {
  const pathname = usePathname();

  return (
    <div className={cn("my-20 space-y-5")}>
      {linksHeaderDashboard.map((link, i) => {
        const Icon = link.icon;
        return (
          <Link
            key={i}
            className={cn(
              "flex items-center justify-start gap-x-3 text-lg hover:underline underline-offset-4 hover:text-foreground/70",
              pathname === link.href && "text-primary-500"
            )}
            href={link.href}
          >
            <Icon /> {link.label}
          </Link>
        );
      })}
    </div>
  );
}
