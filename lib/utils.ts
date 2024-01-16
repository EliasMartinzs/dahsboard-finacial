import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(value: string): string {
  const numeralValue = parseFloat(value.replace(/[^\d]/g, ""));
  const formattedValue = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  }).format(numeralValue / 100); // Divida por 100 para ajustar o valor para o formato esperado
  return isNaN(numeralValue) ? "" : formattedValue;
}
