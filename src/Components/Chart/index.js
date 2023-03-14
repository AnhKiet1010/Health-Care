import React from "react";
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
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Chart({ legendPosition, title, data }) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: legendPosition ? true : false,
        position: legendPosition,
      },
      title: {
        display: title ? true : false,
        text: title,
      },
    },
    scales: {
      x: {
        border: {
          display: false,
        },
        grid: {
          color: "#777777",
        },
      },
      y: {
        grid: {
          display: false,
          color: "#777777",
        },
        ticks: {
          display: false,
        },
      },
    },
  };
  return (
    <Line className="bg-gray-dark max-h-80" options={options} data={data} />
  );
}
