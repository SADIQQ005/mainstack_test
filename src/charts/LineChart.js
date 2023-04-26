import { useState } from "react";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler
} from "chart.js";
import { Chart } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Filler);

export default function LineChart({display}) {
  const data = {
    labels: ["Red", "Red", "Red"],
    datasets: [
      {
        data: [12, 3, 4],
        fill: true,
        borderWidth: 2,
        borderColor: "#FF5403",
        pointRadius: 0,
        backgroundColor: ['rgba(255, 84, 3, 0.2)', 'rgba(255, 84, 3, 0) 100%)']
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  return (
    <div>
      <Chart
        type="line"
        options={options}
        data={data}
        height="30vh"
        width="100vw"
      />
    </div>
  );
}
