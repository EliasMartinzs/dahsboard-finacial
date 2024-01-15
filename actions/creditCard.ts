"use server";
import { db } from "@/lib/db";
import { CreditCardSchema } from "@/schemas";
import { revalidatePath } from "next/cache";
import * as z from "zod";

export const createCreditCard = async (
  values: z.infer<typeof CreditCardSchema>,
  userId: string
) => {
  const validatedFields = CreditCardSchema.safeParse(values);

  if (!validatedFields.success)
    return {
      error:
        "Ops, parece que alguns campos não estão corretos. Por favor, verifique as informações e corrija os campos inválidos para prosseguir.",
    };

  const { expirationMonth, expirationYear, name, numberCard, cvc } =
    validatedFields.data;

  try {
    await db.creditCard.create({
      data: {
        expirationMonth: expirationMonth,
        expirationYear: expirationYear,
        nameCard: name,
        number: numberCard,
        cvc: cvc,
        user: {
          connect: { id: userId },
        },
      },
    });

    revalidatePath("/dashboard");
    return { success: "BsCheck" };
  } catch (error: any) {
    console.log("Falha ao criar um novo cartao de credito!", error);

    throw error;
  }
};

export const deleteCreditCard = async (id: number) => {
  try {
    await db.creditCard.delete({ where: { id: id } });

    revalidatePath("/dashboard");
  } catch (error: any) {
    console.log("falha ao deletar cartao de creditor", error);
  }
};
