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
import { useState } from "react";
import { CiWarning } from "react-icons/ci";
import { BsCheck } from "react-icons/bs";

export function RegisterForm() {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
  });

  async function onSubmit(values: z.infer<typeof RegisterSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <FormWrapper
        social
        title="Cadastrar-se"
        description="Faça um cadastro para ter acesso a plataform!"
        textRedirect="Já tem um conta? Faça login!"
        redirect="/auth/login"
      >
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome</FormLabel>
                <FormControl>
                  <Input
                    placeholder="jonhdoe@gmail.com"
                    className="form-outline"
                    {...field}
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
