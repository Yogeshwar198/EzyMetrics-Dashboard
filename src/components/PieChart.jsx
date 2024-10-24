// PieChart.js
import React from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto'; // Import Chart.js

const PieChart = ({ data }) => {
  // Prepare data for the pie chart from the user demographics
  const ageGroupData = data.userDemographics.ageGroups;

  // Pie Chart Data
  const pieChartData = {
    labels: Object.keys(ageGroupData),
    datasets: [
      {
        label: 'User Demographics by Age Group',
        data: Object.values(ageGroupData).map(value => parseFloat(value)), // Convert percentage strings to numbers
        backgroundColor: [
          '#FF6384', // Red
          '#36A2EB', // Blue
          '#FFCE56', // Yellow
          '#4BC0C0', // Teal
        ],
        hoverOffset: 4,
      },
    ],
  };

  // Pie Chart Options
  const pieChartOptions = {
    responsive: true,
    maintainAspectRatio: true, // Maintain aspect ratio
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.label}: ${context.raw}%`; // Display percentage in tooltip
          },
        },
      },
    },
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow" style={{ height: '400px', width: '100%' }}>
      <h3 className="text-lg font-semibold mb-2 text-center">User Demographics by Age Group</h3>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', paddingBottom: "40px" }}>
        <Pie data={pieChartData} options={pieChartOptions} />
      </div>
    </div>
  );
};

export default PieChart;
