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
import { ExpenseSchema } from "@/schemas";
import { useState, useTransition } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { IntlProvider } from "react-intl";
import { formatCurrency } from "@/lib/utils";
import { currencies, expenseCategories } from "@/constants";
import { createExpense } from "@/actions/expense";
import { UserPropsType } from "@/types";
import Loading from "@/app/loading";
import { FormState } from "../auth/FormState";
import { BsCheck } from "react-icons/bs";

export function ExpenseForm({ user }: UserPropsType) {
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof ExpenseSchema>>({
    resolver: zodResolver(ExpenseSchema),
    defaultValues: {
      amount: "",
      categoryName: "",
      description: "",
      currency: "BRL",
    },
  });

  const [formattedBalance, setFormattedBalance] = useState("");

  function onChangeBalance(value: string) {
    const formattedValue = formatCurrency(value);

    setFormattedBalance(formattedValue);
    form.setValue("amount", formattedValue);
  }

  async function onSubmit(values: z.infer<typeof ExpenseSchema>) {
    startTransition(() => {
      const formattedBalance = formatCurrency(values.amount).replace(
        /[^\d,]/g,
        ""
      );

      const newValues = {
        ...values,
        amount: JSON.parse(JSON.stringify(formattedBalance)),
      };

      createExpense(newValues, user?.id ?? "").then((data) => {
        setSuccess(data.success);
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
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Descrição da despesa</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Jantar"
                    className="form-1 dark:focus:border-primary-500"
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
            name="amount"
            render={() => (
              <FormItem>
                <FormLabel>Valor gasto</FormLabel>
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

          <div className="grid grid-cols-2 gap-x-5">
            <FormField
              control={form.control}
              name="categoryName"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Categoria</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="max-w-[200px] border-borderColor">
                        <SelectValue placeholder="Categoria" />
                      </SelectTrigger>
                      <SelectContent className="bg-background form-1">
                        {expenseCategories.map((exp, i) => {
                          const Icon = exp.label;
                          return (
                            <SelectItem key={i} value={exp.value}>
                              <div className="w-full flex items-center text-primary-500">
                                <span className="text-lg pr-2">
                                  <Icon />
                                </span>
                                {exp.value}
                              </div>
                            </SelectItem>
                          );
                        })}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="currency"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Moeda</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      value={field.value}
                      defaultValue="Brazilian Real"
                    >
                      <SelectTrigger className="max-w-[200px] border-borderColor">
                        <SelectValue placeholder="Categoria" />
                      </SelectTrigger>
                      <SelectContent className="bg-background form-1">
                        {currencies.map((currency, i) => (
                          <SelectItem key={i} value={currency.code}>
                            <div className="w-full flex items-center text-primary-500">
                              {currency.code}: {currency.name}
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          {success && (
            <FormState
              className="bg-success-500 font-black text-lg text-background"
              message={success}
              icon={<BsCheck className="w-7 h-7" />}
            />
          )}
          <Button
            disabled={isPending}
            size="full"
            rounded="full"
            type="submit"
            variant="default"
          >
            {form.formState.isSubmitting ? <Loading /> : "Salvar"}
          </Button>
        </form>
      </Form>
    </IntlProvider>
  );
}
