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
import { RegisterSchema } from "@/schemas";
import { FormWrapper } from "./FormWrapper";
import { FormState } from "./FormState";
import { useState, useTransition } from "react";
import { CiWarning } from "react-icons/ci";
import { BsCheck } from "react-icons/bs";
import { register } from "@/actions/register";

export function RegisterForm() {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
  });

  async function onSubmit(values: z.infer<typeof RegisterSchema>) {
    startTransition(() => {
      register(values).then((data) => {
        setError(data?.error);
        setSuccess(data?.success);

        form.reset();
      });
    });
  }

  return (
    <Form {...form}>
      <FormWrapper
        title="Cadastrar-se"
        description="Faça um cadastro para ter acesso a plataform!"
        textRedirect="Já tem um conta? Faça login!"
        redirect="/auth/login"
      >
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 w-96">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Jonh Doe"
                    className="form-outline"
                    {...field}
                    disabled={isPending}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-Mail</FormLabel>
                <FormControl>
                  <Input
                    placeholder="jonhdoe@gmail.com"
                    type="email"
                    className="form-outline"
                    {...field}
                    disabled={isPending}
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
                <FormLabel>Senha</FormLabel>
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
              icon={<CiWarning className="text-2xl" />}
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
            Criar conta
          </Button>
        </form>
      </FormWrapper>
    </Form>
  );
}
