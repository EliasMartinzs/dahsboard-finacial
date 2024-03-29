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
import { useState, useTransition } from "react";
import { CiWarning } from "react-icons/ci";
import { BsCheck } from "react-icons/bs";
import { login } from "@/actions/login";

export function LoginForm() {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof LoginSchema>) {
    startTransition(() => {
      login(values).then((data) => {
        setError(data?.error);
        setSuccess(data?.success);
      });
    });
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
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-5 w-full lg:w-96"
        >
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
                    disabled={isPending}
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
                    disabled={isPending}
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
          <Button
            type="submit"
            size="full"
            rounded="full"
            variant="default"
            disabled={isPending}
          >
            Login
          </Button>
        </form>
      </FormWrapper>
    </Form>
  );
}
