import { UserPropsType } from "@/types";
import { Responsive } from "@/components/reusable/Reponsive";
import { CreditCardForm } from "./CreditCardForm";

export function NewCreditCard({ user }: UserPropsType) {
  return (
    <Responsive>
      <CreditCardForm user={user} />
    </Responsive>
  );
}
