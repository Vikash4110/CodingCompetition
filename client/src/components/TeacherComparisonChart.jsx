import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const TeacherComparisonChart = ({ feedbacks }) => {
  const data = {
    labels: feedbacks.map(feedback => feedback.teacherId?.teacher_name || "Unknown"),
    datasets: [
      {
        label: "Average Rating",
        data: feedbacks.map(feedback => feedback.averageRating),
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="mt-6">
      <h3 className="text-xl font-semibold mb-4 text-white">Teacher Comparison</h3>
      <Bar data={data} />
    </div>
  );
};

export default TeacherComparisonChart;
