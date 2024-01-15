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
