import Decimal from "decimal.js";

export interface UserPropsType {
  user:
    | {
        id: string;
        name: string | null;
        email: string | null;
        emailVerified: Date | null;
        image: string | null;
        password: string | null;
      }
    | null
    | undefined;
}

export interface User {
  id: string;
  name: string | null;
  email: string | null;
  emailVerified: Date | null;
  image: string | null;
  password: string | null;
  balance: Decimal | null;
}
export interface Expense {
  id: number;
  amount: Decimal;
  currency: string;
  description: string;
  date: Date;
  categoryId: number | null;
  userId: string;
}

export interface Category {
  id: number;
  name: string;
  color: string | null;
  expenses: Expense[];
}
