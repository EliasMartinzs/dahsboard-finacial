import { UserPropsType } from "@/types";
import { Responsive } from "../reusable/Reponsive";
import { ExpenseForm } from "./ExpenseForm";

export function NewExpense({ user }: UserPropsType) {
  return (
    <Responsive>
      <h2 className="text-lg">Nova Despesa</h2>
      <ExpenseForm user={JSON.parse(JSON.stringify(user))} />
    </Responsive>
  );
}
