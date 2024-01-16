"use client";
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: "left" as const,
      labels: {
        color: "#333", // Em Chart.js 3.x, 'fontColor' foi substituído por 'color'
        font: {
          size: 14, // Em Chart.js 3.x, 'fontSize' é definido dentro de 'font'
        },
        padding: 20,
      },
    },
    tooltip: {
      backgroundColor: "#f5f5f5",
      titleColor: "#333",
      bodyColor: "#666",
      borderColor: "#ddd",
      borderWidth: 0,
    },
  },
};

interface Expense {
  amount: number; // Exemplo
}

interface Category {
  id: number;
  name: string;
  expenses: Expense[];
}

interface DoughnutGraphicProps {
  categories: Category[];
}

interface DoughnutGraphicProps {
  categories: Category[];
}

export function DoughnutGraphic({ categories }: DoughnutGraphicProps) {
  const data = {
    labels: categories.map((category) => category.name),
    datasets: [
      {
        label: "Despesas por Categoria em R$",
        data: categories.map((category) =>
          category.expenses.reduce(
            (total, expense) => total + expense.amount,
            0
          )
        ),
        backgroundColor: [
          "#47c1e1",
          "#f33655",
          "#f8e19a",
          "#fd19f1",
          "#92fd16",
          "#f7872c",
          "#d15b32",
          "#47cb2d",
          "#2b1637",
          "#1e975f",
          "#cc4fad",
          "#9d9f93",
          "#cf7b2d",
          "#c3a0e3",
          "#84a304",
          "#bdf87e",
          "#7ab47f",
          "#fd7fb0",
          "#6f2c14",
          "#a22a4b",
          "#9c59a6",
          "#b0e398",
          "#6979b9",
          "#027d51",
        ],
      },
    ],
  };

  return <Doughnut options={options} data={data} />;
}
