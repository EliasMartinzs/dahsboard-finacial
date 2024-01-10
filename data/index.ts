import { db } from "@/lib/db";

export const getUserByEmail = async (email: string) => {
  try {
    const user = await db.user.findUnique({ where: { email } });

    return user;
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