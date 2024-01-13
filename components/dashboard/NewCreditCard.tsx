import { CreditCardForm } from "../reusable/CreditCardForm";
import { NewCreditCardProps } from "@/types";
import { Responsive } from "@/components/reusable/Reponsive";

export function NewCreditCard({ user }: NewCreditCardProps) {
  return (
    <Responsive>
      <CreditCardForm user={user} />
    </Responsive>
  );
}
