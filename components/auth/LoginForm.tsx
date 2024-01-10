"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { LoginSchema } from "@/schemas";
import { FormWrapper } from "./FormWrapper";
import { FormState } from "./FormState";
import { Check } from "lucide-react";
import { useState } from "react";
import { CiWarning } from "react-icons/ci";
import { BsCheck } from "react-icons/bs";

export function LoginForm() {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof LoginSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <FormWrapper
        social
        title="Login"
        description="Faça login para ter acesso a plataforma!"
        textRedirect="Não tem um conta? Cadastre-se"
        redirect="/auth/register"
      >
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-Mail</FormLabel>
                <FormControl>
                  <Input
                    placeholder="jonhdoe@gmail.com"
                    className="form-outline"
                    type="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="******"
                    type="password"
                    className="form-outline"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {error && (
            <FormState
              icon={<CiWarning className="text-xl" />}
              message={error}
              className="bg-danger-500 font-bold text-white"
            />
          )}
          {success && (
            <FormState
              icon={<BsCheck className="text-3xl" />}
              message={success}
              className="bg-success-500 font-bold text-white"
            />
          )}
          <Button type="submit" size="full" rounded="full" variant="default">
            Login
          </Button>
        </form>
      </FormWrapper>
    </Form>
  );
}
