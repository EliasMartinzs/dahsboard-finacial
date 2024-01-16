import { getExpensesAllCategories, getExpensesByMonth } from "@/data";
import { BarGraphic } from "../reusable/BarGraphic";
import { DoughnutGraphic } from "../reusable/DoughnutGraphic";
import { Category, Expense } from "@/types";

export async function ShowExpense({ userId }: { userId: string | undefined }) {
  const expensesByMonth = await getExpensesByMonth(userId);
  const expensesAllCategories: Category[] = await getExpensesAllCategories(
    userId
  );

  return (
    <div className="space-y-4 lg:flex">
      <div className="lg:w-1/2 lg:h-[420px]">
        <h2 className="text-lg">Mẽs</h2>
        <BarGraphic expenses={JSON.parse(JSON.stringify(expensesByMonth))} />
      </div>

      <div className="lg:w-1/2 lg:h-[420px]">
        <h2 className="text-lg">Categorias</h2>
        <DoughnutGraphic
          categories={JSON.parse(JSON.stringify(expensesAllCategories))}
        />
      </div>
    </div>
  );
}
