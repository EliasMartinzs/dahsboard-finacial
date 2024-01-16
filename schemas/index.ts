import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "E-Mail é obrigatório!",
  }),
  password: z.string().min(1, {
    message: "Senha é obrigatória!",
  }),
});

export const RegisterSchema = z.object({
  name: z.string().min(1, {
    message: "Nome é obrigatório",
  }),
  email: z.string().email({
    message: "E-Mail é obrigatório!",
  }),
  password: z.string().min(1, {
    message: "Senha é obrigatória!",
  }),
});

export const CreditCardSchema = z.object({
  name: z.string().min(1, {
    message: "Nome do cartão é obrigatório!",
  }),
  numberCard: z
    .string()
    .min(16, {
      message:
        "Oops! Parece que o número do cartão está incompleto. Certifique-se de digitar todos os 16 dígitos.",
    })
    .max(16),
  cvc: z
    .string()
    .min(3)
    .max(3, {
      message: "Oops! Certifique-se de digitar somente os 3 dígitos.",
    })
    .max(3),
  expirationMonth: z
    .string()
    .refine((value) => value !== "", { message: "Selecione o Mês" }),
  expirationYear: z
    .string()
    .refine((value) => value !== "", { message: "Selecione o Ano" }),
});

export const BalanceSchema = z.object({
  balance: z.string().min(1, {
    message: "Por favor digitar um número",
  }),
});

export const ExpenseSchema = z.object({
  description: z.string().min(1, {
    message:
      "Erro de entrada: A descrição fornecida é inválida ou está em branco. Por favor, insira uma descrição apropriada.",
  }),
  amount: z.string().min(1, {
    message:
      "Erro de entrada: A quantia inserida é inválida ou está ausente. Por favor, forneça uma quantia válida.",
  }),
  categoryName: z.string(),
  currency: z.string(),
});
