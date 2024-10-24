import React from 'react'
import { Line } from 'react-chartjs-2';
import { data as dashboardData } from '../config/data';

const LineChart = () => {
    const { analytics } = dashboardData;

    // Line Chart Data for Website Traffic
    const lineData = {
        labels: ['Visits', 'Unique Visitors', 'Page Views/Visit', 'Bounce Rate'],
        datasets: [
            {
                label: 'Website Traffic Metrics',
                backgroundColor: 'rgba(136, 132, 216, 0.2)',
                borderColor: '#8884d8',
                data: [
                    analytics.websiteTraffic.totalVisits,
                    analytics.websiteTraffic.uniqueVisitors,
                    analytics.websiteTraffic.pageViewsPerVisit,
                    parseFloat(analytics.websiteTraffic.bounceRate),
                ],
                fill: true,
                tension: 0.4,
            },
        ],
    };

    const lineOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        return `${context.dataset.label}: ${context.raw}`;
                    },
                },
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
            },
            y: {
                beginAtZero: true,
            },
        },
    };
    return (
        <div className="bg-white p-4 rounded-lg shadow h-64"> 
            <h3 className="text-lg font-medium mb-4">Website Traffic</h3>
            <Line data={lineData} options={lineOptions} />
        </div>
    )
}

export default LineChart