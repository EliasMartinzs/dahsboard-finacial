"use client";

import { useForm } from "react-hook-form";
import { CreditCardSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "../ui/input";
import { BsCheck } from "react-icons/bs";
import { Form, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Button } from "../ui/button";
import { FormState } from "../auth/FormState";
import { createCreditCard } from "@/actions/creditCard";
import { useState, useTransition } from "react";
import { NewCreditCardProps } from "@/types";

export function CreditCardForm({ user }: NewCreditCardProps) {
  const [isPending, startTransition] = useTransition();
  const [success, setSuccess] = useState<string | undefined>("");
  const [error, setError] = useState<string | undefined>("");
  const form = useForm<z.infer<typeof CreditCardSchema>>({
    resolver: zodResolver(CreditCardSchema),
    defaultValues: {
      name: "",
      numberCard: "",
      expirationMonth: "",
      expirationYear: "",
      cvc: undefined,
    },
  });

  const onSubmit = async (values: z.infer<typeof CreditCardSchema>) => {
    startTransition(() => {
      createCreditCard(values, user?.id ?? "").then((data) => {
        setError(data?.error), setSuccess(data?.success), form.reset();
      });
    });
  };

  return (
    <Form {...form}>
      <h2 className="font-semibold text-xl">Criar um novo cartão</h2>
      <form
        className="space-y-5 w-full p-5"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Nome do cartão</FormLabel>
              <Input
                placeholder="Jonh doe"
                type="text"
                {...field}
                className="form-1"
                disabled={isPending}
              />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="numberCard"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Número do cartão</FormLabel>
              <Input
                placeholder="0000 0000 0000 0000"
                type="text"
                minLength={16}
                maxLength={16}
                {...field}
                className="form-1"
                disabled={isPending}
              />
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex gap-5">
          <FormField
            control={form.control}
            name="expirationMonth"
            render={({ field }) => (
              <select
                onChange={field.onChange}
                value={field.value}
                className="form-select text-background"
                disabled={isPending}
              >
                <option value="">Mês</option>
                {Array.from({ length: 12 }, (_, i) => (
                  <option value={i + 1} key={i}>
                    {i + 1}
                  </option>
                ))}
                <FormMessage />
              </select>
            )}
          />

          <FormField
            control={form.control}
            name="expirationYear"
            render={({ field }) => (
              <select
                onChange={field.onChange}
                value={field.value}
                className="form-select"
                disabled={isPending}
              >
                <option value="">Ano</option>
                {Array.from({ length: 10 }, (_, i) => {
                  const newYear = new Date().getFullYear() + i;
                  return (
                    <option value={newYear} key={i}>
                      {newYear}
                    </option>
                  );
                })}
                <FormMessage />
              </select>
            )}
          />

          <FormField
            control={form.control}
            name="cvc"
            render={({ field }) => (
              <FormItem>
                <Input
                  placeholder="CVC"
                  type="number"
                  minLength={3}
                  maxLength={3}
                  {...field}
                  className="rounded-lg bg-white max-w-20 text-black outline-none border focus:border-primary-500"
                  disabled={isPending}
                />
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button
          type="submit"
          className="border border-primary-500"
          rounded="lg"
          size="full"
          disabled={isPending}
        >
          {form.formState.isSubmitSuccessful ? (
            <FormState
              icon={<BsCheck className="text-success-500 w-8 h-8" />}
              message=""
              className=""
            />
          ) : (
            <p>Salvar</p>
          )}
        </Button>
      </form>
    </Form>
  );
}
