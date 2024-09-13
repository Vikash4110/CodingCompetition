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
        backgroundColor: "rgba(75, 192, 192, 0.6)", // Slightly more vibrant background
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 2,
        borderRadius: 10, // Rounded corners for the bars
        hoverBackgroundColor: "rgba(75, 192, 192, 0.8)", // Darker on hover
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
          color: "#ddd", // Y-axis label color
          font: {
            size: 14,
            weight: "600",
          },
        },
        title: {
          display: true,
          text: "Rating",
          font: {
            size: 16,
            weight: "bold",
          },
          color: "#fff", // White axis title
        },
        grid: {
          color: "rgba(220, 220, 220, 0.2)", // Light grid lines
        },
      },
      x: {
        ticks: {
          color: "#ddd", // X-axis label color
          font: {
            size: 14,
            weight: "600",
          },
        },
        title: {
          display: true,
          text: "Teachers",
          font: {
            size: 16,
            weight: "bold",
          },
          color: "#fff", // White axis title
        },
        grid: {
          display: false, // No grid lines for X-axis
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          color: "#fff", // White legend labels
          font: {
            size: 14,
            weight: "bold",
          },
        },
      },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        titleColor: "#fff",
        bodyColor: "#fff",
        callbacks: {
          label: (context) => `Rating: ${context.raw}`,
        },
      },
    },
  };

  return (
    <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-8 rounded-xl shadow-lg w-full lg:w-3/4 mx-auto mt-10">
      <h3 className="text-2xl font-bold text-white mb-6 text-center">Teacher Comparison</h3>
      <div className="h-96">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default TeacherComparisonChart;
