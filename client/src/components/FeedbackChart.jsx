import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const FeedbackChart = ({ feedbacks }) => {
  // Process feedback data for chart
  const labels = feedbacks.map(feedback => feedback.teacherId?.teacher_name || 'Unknown');
  const data = feedbacks.map(feedback => feedback.averageRating);

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Average Rating',
        data: data,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: (context) => `Rating: ${context.raw}`,
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Teacher',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Rating',
        },
        min: 0,
        max: 5,
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-4">Feedback Analysis</h3>
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

export default FeedbackChart;
