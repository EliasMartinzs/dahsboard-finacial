"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export const createExpense = async (
  values: {
    description: string;
    amount: string;
    categoryName: string;
    currency: string;
  },
  userId: string
) => {
  const { amount, categoryName, description, currency } = values;

  try {
    let category = await db.category.findFirst({
      where: { name: categoryName },
    });

    if (!category) {
      category = await db.category.create({
        data: {
          name: categoryName,
        },
      });
    }

    await db.expense.create({
      data: {
        amount: parseFloat(amount),
        currency: currency,
        description: description,
        date: new Date(),
        categoryId: category.id,
        userId: userId,
      },
    });
    revalidatePath("/dashboard");
    return { success: "Despesa criada com sucessos!" };
  } catch (error) {
    console.error("Erro ao criar despesa:", error);
    throw error;
  }
};
