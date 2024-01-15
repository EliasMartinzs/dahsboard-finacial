import { UserPropsType } from "@/types";
import { Responsive } from "../reusable/Reponsive";

import { BalanceForm } from "./BalanceForm";

export function NewBalance({ user }: UserPropsType) {
  return (
    <Responsive>
      <h2 className="text-lg">Qual o valor deseja adicionar</h2>
      <BalanceForm email={user?.email ?? ""} />
    </Responsive>
  );
}
