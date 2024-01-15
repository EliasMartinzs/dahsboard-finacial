import { CreditCardForm } from "../reusable/CreditCardForm";
import { UserPropsType } from "@/types";
import { Responsive } from "@/components/reusable/Reponsive";

export function NewCreditCard({ user }: UserPropsType) {
  return (
    <Responsive>
      <CreditCardForm user={user} />
    </Responsive>
  );
}
