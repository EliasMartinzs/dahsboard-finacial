import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Social } from "./Social";
import Link from "next/link";

interface FormWrapperProps {
  children: React.ReactNode;
  title: string;
  description?: string;
  social?: boolean;
  textRedirect: string;
  redirect: string;
}

export function FormWrapper({
  children,
  social,
  title,
  description,
  redirect,
  textRedirect,
}: FormWrapperProps) {
  return (
    <Card className="shadow-md border-none max-lg:backdrop-blur-md max-lg:text-black/60">
      <CardHeader>
        <CardTitle className="text-center text-2xl lg:text-3xl">
          {title}
        </CardTitle>
        <CardDescription className="text-center max-lg:text-black/60">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-5">
        {children}
        {social && <Social />}
        <br />
        <Link href={redirect}>{textRedirect}</Link>
      </CardContent>
    </Card>
  );
}
