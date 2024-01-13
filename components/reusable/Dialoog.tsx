import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface DialoogProps {
  iconOpen: React.ReactNode;
  children: React.ReactNode;
  styles?: string;
}

export function Dialoog({ children, iconOpen, styles }: DialoogProps) {
  return (
    <Dialog>
      <DialogTrigger>{iconOpen}</DialogTrigger>
      <DialogContent className={cn(styles)}>
        <>{children}</>
      </DialogContent>
    </Dialog>
  );
}
