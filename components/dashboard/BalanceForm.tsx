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
import { BalanceSchema } from "@/schemas";
import { useState, useTransition } from "react";
import { AddAmountToBalance } from "@/actions/balance";

import { IntlProvider } from "react-intl";
import { formatCurrency } from "@/lib/utils";

export function BalanceForm({ email }: { email: string }) {
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof BalanceSchema>>({
    resolver: zodResolver(BalanceSchema),
    defaultValues: {
      balance: "",
    },
  });

  const [formattedBalance, setFormattedBalance] = useState("");

  function onChangeBalance(value: string) {
    const formattedValue = formatCurrency(value);

    setFormattedBalance(formattedValue);
    form.setValue("balance", formattedValue);
  }

  async function onSubmit(values: z.infer<typeof BalanceSchema>) {
    startTransition(() => {
      const formattedBalance = formatCurrency(values.balance).replace(
        /[^\d,]/g,
        ""
      );

      AddAmountToBalance(parseFloat(formattedBalance), email).then(() => {
        form.reset();
        setFormattedBalance("");
      });
    });
  }

  return (
    <IntlProvider locale="pt-BR">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-full p-5"
        >
          <FormField
            control={form.control}
            name="balance"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Quantia a ser adicionada</FormLabel>
                <FormControl>
                  <Input
                    placeholder="R$ 250,000"
                    className="form-1 dark:focus:border-primary-500"
                    value={formattedBalance}
                    onChange={(e) => onChangeBalance(e.target.value)}
                    disabled={isPending}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            disabled={isPending}
            size="full"
            rounded="full"
            type="submit"
            variant="default"
          >
            Salvar
          </Button>
        </form>
      </Form>
    </IntlProvider>
  );
}
