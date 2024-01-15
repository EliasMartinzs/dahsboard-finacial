"use client";
import useFormattedBalance from "@/hooks/useFormattedBalance";

export function ShowBalance({ balance }: { balance: any }) {
  const value = useFormattedBalance(balance);

  return <h2 className="text-2xl font-medium">{value}</h2>;
}
