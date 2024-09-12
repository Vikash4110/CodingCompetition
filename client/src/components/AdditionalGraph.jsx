import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const AdditionalGraph = ({ data }) => {
  const pieData = {
    labels: ["Category 1", "Category 2", "Category 3"], // Replace with dynamic categories if needed
    datasets: [
      {
        label: "Feedback Distribution",
        data: [12, 19, 3], // Replace with dynamic data
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(255, 206, 86, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="mt-6">
      <h3 className="text-xl font-semibold mb-4 text-white">Additional Graph</h3>
      <Pie data={pieData} />
    </div>
  );
};

export default AdditionalGraph;
