import { db } from "@/lib/db";

export const getUserByEmail = async (email: string) => {
  try {
    const user = await db.user.findUnique({ where: { email } });

    return JSON.parse(JSON.stringify(user));
  } catch (error: any) {
    console.log("Falha ao buscar usuario no banco de dados!", error);
  }
};

export const getUserById = async (id: string) => {
  try {
    const user = await db.user.findUnique({ where: { id } });

    return user;
  } catch (error: any) {
    console.log("Falha ao buscar usuario no banco de dados!", error);
  }
};

export const getCreditCard = async (email: string) => {
  try {
    const card = await db.creditCard.findMany({
      where: {
        user: {
          email: email,
        },
      },
    });

    return card;
  } catch (error: any) {
    console.log("Error ao fetch cartao de credit", error);
  }
};

export const getExpensesByMonth = async (userId: string | undefined) => {
  try {
    const expensesMonth = await db.expense.groupBy({
      by: ["date"],
      _sum: {
        amount: true,
      },
      where: { userId: userId },
    });

    return expensesMonth;
  } catch (error: any) {
    console.log("Falha ao fetch expense by month", error);
    throw error;
  }
};

export const getExpensesAllCategories = async (userId: string | undefined) => {
  try {
    const categories = await db.category.findMany({
      where: {
        expenses: {
          some: {
            userId: userId,
          },
        },
      },
      include: { expenses: true },
    });

    return categories;
  } catch (error: any) {
    console.log("Falha ao fetch expense by categories", error);
    throw error;
  }
};
