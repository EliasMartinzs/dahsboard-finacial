"use client";

import { deleteCreditCard } from "@/actions/creditCard";
import { Button } from "../ui/button";
import { useTransition } from "react";

export function DeleteCreditCard({ id }: { id: number }) {
  const [isPending, startTransition] = useTransition();
  const onClick = async (id: number) => {
    startTransition(() => {
      deleteCreditCard(id);
    });
  };

  return (
    <Button disabled={isPending} onClick={() => onClick(id)}>
      Remover cartão
    </Button>
  );
}
