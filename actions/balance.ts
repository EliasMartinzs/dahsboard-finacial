"use server";

import { getUserByEmail } from "@/data";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export const AddAmountToBalance = async (balance: number, email: string) => {
  try {
    const user = await getUserByEmail(email);

    if (!user) {
      return { error: "Usuário não encontrado!" };
    }

    console.log(balance);

    await db.user.update({
      where: { email: email },
      data: {
        balance: { increment: balance },
      },
    });

    revalidatePath("dashboard");
    return { success: "Saldo adicionado!" };
  } catch (error: any) {
    console.log("Falha ao adicionar valor ao balance", error);
    return { error: "Falha ao adicionar valor ao balance" };
  }
};
