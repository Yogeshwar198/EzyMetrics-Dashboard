import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import { data as dashboardData } from '../config/data';

const DoughnutChart = () => {
    const { analytics } = dashboardData;
    // Doughnut Chart Data for User Demographics (Age Groups)
    const doughnutData = {
        labels: Object.keys(analytics.userDemographics.ageGroups),
        datasets: [
            {
                label: 'Age Groups',
                data: Object.values(analytics.userDemographics.ageGroups).map(val => parseFloat(val)),
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#82ca9d'],
                hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#82ca9d'],
                borderWidth: 2,
            },
        ],
    };

    const doughnutOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        return `${context.label}: ${context.raw}%`;
                    },
                },
            },
        },
        cutout: '70%',
    };
    return (
        <div className="mt-8 bg-white p-4 rounded-lg shadow h-64"> {/* Set height to 16rem */}
            <h3 className="text-lg font-medium mb-4">User Demographics (Age Groups)</h3>
            <Doughnut data={doughnutData} options={doughnutOptions} />
        </div>
    )
}

export default DoughnutChart