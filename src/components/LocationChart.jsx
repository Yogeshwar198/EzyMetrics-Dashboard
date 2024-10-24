import React from 'react';
import { Chart } from 'chart.js';
import { useEffect } from 'react';


const LocationChart = ({ data }) => {
  
  useEffect(() => {
    const ctx = document.getElementById('LocationChart').getContext('2d');

    const countries = data.userDemographics.locations.map(location => location.country);
    const percentages = data.userDemographics.locations.map(location => parseFloat(location.percentage));

    // Create a new chart
    const LocationChart = new Chart(ctx, {
      type: 'bar', // Use a bar chart to represent geographical data
      data: {
        labels: countries,
        datasets: [{
          label: 'User Demographics by Location',
          data: percentages,
          backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#4BC0C0',
            '#9966FF',
          ],
        }],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Percentage (%)',
            },
          },
          x: {
            title: {
              display: true,
              text: 'Countries',
            },
          },
        },
        plugins: {
          legend: {
            display: true,
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                return `${context.label}: ${context.raw}%`;
              },
            },
          },
        },
      },
    });

    // Cleanup function to destroy chart on component unmount
    return () => {
      LocationChart.destroy();
    };
  }, [data]);

  return (
    <div className="bg-white p-4 rounded-lg shadow" style={{ height: '400px', width: '100%' }}>
      <h3 className="text-lg font-semibold mb-2 text-center">User Demographics by Location</h3>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', paddingBottom:"40px"}}>
      <canvas id="LocationChart" />
      </div>
    </div>
  );
};

export default LocationChart;
