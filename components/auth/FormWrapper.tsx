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
  social: boolean;
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
    <Card className="border-primary-500">
      <CardHeader>
        <CardTitle className="text-center text-lg lg:text-2xl">
          {title}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
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
