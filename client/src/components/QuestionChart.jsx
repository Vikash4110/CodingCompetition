import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from "chart.js";

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const QuestionChart = ({ questions }) => {
  const labels = questions.map((q) => q.question);
  const data = questions.map((q) => q.rating);

  const chartData = {
    labels,
    datasets: [
      {
        label: "Ratings",
        data,
        backgroundColor: (context) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          if (!chartArea) {
            return null;
          }
          const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
          gradient.addColorStop(0, "rgba(173, 216, 230, 0.6)"); // Light Blue
          gradient.addColorStop(1, "rgba(255, 182, 193, 0.6)"); // Light Pink

          return gradient;
        },
        borderColor: "rgba(255, 182, 193, 1)", // Light Pink border
        borderWidth: 2,
        hoverBackgroundColor: "rgba(255, 99, 132, 0.7)",
        hoverBorderColor: "rgba(255, 99, 132, 1)",
        hoverBorderWidth: 3,
        borderRadius: 10,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          font: {
            size: 14,
            weight: "bold",
            family: "'Helvetica Neue', sans-serif",
          },
          color: "#333", // Darker color for contrast
        },
      },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        titleFont: {
          size: 16,
          weight: "bold",
        },
        bodyFont: {
          size: 14,
        },
        padding: 10,
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            size: 12,
            family: "'Helvetica Neue', sans-serif",
          },
          color: "#333", // Darker tick color
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
          font: {
            size: 12,
            family: "'Helvetica Neue', sans-serif",
          },
          color: "#333", // Darker tick color
        },
      },
    },
  };

  return (
    <div
      className="w-full h-96 p-4 shadow-lg rounded-lg"
      style={{
        backgroundColor: "#fff", // White background
        color: "#333", // Darker text color for contrast
      }}
    >
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default QuestionChart;
