import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface GraphComponentProps {
  data: {
    date: string;
    income: number;
    outcome: number;
  }[];
}

const GraphComponent: React.FC<GraphComponentProps> = ({ data }) => {
  const labels = data.map((event) => event.date);
  const incomeData = data.map((event) => event.income);
  const outcomeData = data.map((event) => event.outcome);

  const chartData = {
    labels,
    datasets: [
      {
        label: "Income",
        data: incomeData,
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
      },
      {
        label: "Outcome",
        data: outcomeData,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Income and Outcome Over Time",
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default GraphComponent;
