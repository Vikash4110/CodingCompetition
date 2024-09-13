import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const FeedbackChart = ({ feedbacks }) => {
  const labels = feedbacks.map(feedback => feedback.teacherId?.teacher_name || 'Unknown');
  const data = feedbacks.map(feedback => feedback.averageRating);

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Average Rating',
        data: data,
        backgroundColor: (context) => {
          const bgColor = context.chart.ctx.createLinearGradient(0, 0, 0, 400);
          bgColor.addColorStop(0, 'rgba(75, 192, 192, 0.6)');
          bgColor.addColorStop(1, 'rgba(153, 102, 255, 0.6)');
          return bgColor;
        },
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        borderRadius: 15, // Rounded corners
        hoverBackgroundColor: 'rgba(255, 99, 132, 0.8)',
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#333',
          font: {
            size: 14,
            weight: 'bold',
            family: 'Arial, sans-serif',
          },
        },
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        titleColor: '#fff',
        bodyColor: '#fff',
        titleFont: {
          size: 14,
          weight: 'bold',
        },
        bodyFont: {
          size: 12,
        },
        callbacks: {
          label: (context) => `Rating: ${context.raw.toFixed(1)}`,
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        title: {
          display: true,
          text: 'Teacher',
          color: '#333',
          font: {
            size: 16,
            weight: 'bold',
          },
        },
        ticks: {
          color: '#666',
          font: {
            size: 12,
          },
        },
      },
      y: {
        beginAtZero: true,
        max: 5,
        title: {
          display: true,
          text: 'Rating',
          color: '#333',
          font: {
            size: 16,
            weight: 'bold',
          },
        },
        ticks: {
          color: '#666',
          font: {
            size: 12,
          },
        },
        grid: {
          color: 'rgba(200, 200, 200, 0.2)',
        },
      },
    },
  };

  return (
    <div className="bg-gradient-to-r from-white via-blue-50 to-purple-50 p-8 sm:p-10 md:p-12 lg:p-16 rounded-lg shadow-2xl border-2 border-[#ffc221] mb-10 mx-4 lg:mx-8">
      
      <div className="h-96">
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default FeedbackChart;
