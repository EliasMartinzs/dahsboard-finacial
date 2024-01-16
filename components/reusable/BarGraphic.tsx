"use client";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import Decimal from "decimal.js";
import { useTheme } from "next-themes";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

type SumType = {
  amount: Decimal | null;
};

type ExpensesByMonthProps = {
  expenses: ExpensesGroupedByDate;
};

type ExpenseGroupByType = {
  date: Date;
  _sum: SumType;
};

type ExpensesGroupedByDate = ExpenseGroupByType[] | undefined;

export function BarGraphic({ expenses }: ExpensesByMonthProps) {
  const { theme } = useTheme();

  const defaultTheme = theme === "dark" ? "#73feff" : "#990011";

  const monthNames = [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
  ];

  const chartData = {
    labels: monthNames,
    datasets: [
      {
        label: "Despesas",
        data: monthNames.map(() => 0),
        backgroundColor: defaultTheme,
      },
    ],
  };

  if (expenses) {
    expenses.forEach((expense) => {
      if (expense.date && expense._sum.amount !== null) {
        const expenseDate = new Date(expense.date);
        const month = expenseDate.getMonth();

        const amount =
          typeof expense._sum.amount === "number"
            ? expense._sum.amount
            : parseFloat(expense._sum.amount.toString());

        chartData.datasets[0].data[month] += amount;
      }
    });
  }

  return <Bar options={options} data={chartData} />;
}
