"use server";

import * as z from "zod";
import bcryptjs from "bcryptjs";

import { RegisterSchema } from "@/schemas";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedField = RegisterSchema.safeParse(values);

  if (!validatedField.success)
    return {
      error:
        "Ops, parece que alguns campos não estão corretos. Por favor, verifique as informações e corrija os campos inválidos para prosseguir.",
    };

  const { email, name, password } = validatedField.data;

  const hashedPassowrd = await bcryptjs.hash(password, 10);

  const existingUser = await getUserByEmail(email);

  if (existingUser)
    return {
      error:
        "Desculpe, esse e-mail já está sendo utilizado. Por favor, tente com um endereço de e-mail diferente.",
    };

  try {
    await db.user.create({
      data: {
        name,
        email,
        password: hashedPassowrd,
      },
    });

    return { success: "Usuario criado com sucesso!" };
  } catch (error: any) {
    console.log("Falha ao criar usuario", error);
  }
};
