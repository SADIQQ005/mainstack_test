import { Chart as ChartJS, ArcElement } from "chart.js";
import { Chart } from "react-chartjs-2";

ChartJS.register(ArcElement);

export default function DoughnutChart({ display }) {
  const percentage = display?.top_locations?.map((x) => x.percent);
  const data = {
    datasets: [
      {
        data: percentage,
        backgroundColor: [
          "#599EEA",
          "#844FF6",
          "#F09468",
          "#FAB70A",
          "#0FB77A",
        ],
      },
    ],
  };

  const options = {
    aspectRatio: 1.6,
  };
  return (
    <div>
      <Chart
        type="doughnut"
        options={options}
        data={data}
        width="160"
        height="160"
      />
    </div>
  );
}
