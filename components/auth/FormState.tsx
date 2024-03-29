import { cn } from "@/lib/utils";
import React from "react";

interface FormStateProps {
  className: string;
  icon: React.ReactNode;
  message: string;
}

export function FormState({ className, message, icon }: FormStateProps) {
  return (
    <div
      className={cn(
        "h-10 text-center flex-center gap-x-2 rounded-full px-4",
        className
      )}
    >
      <small>{icon}</small> <small>{message}</small>
    </div>
  );
}
