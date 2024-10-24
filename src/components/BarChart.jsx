import React from 'react'
import { Bar } from 'react-chartjs-2';
import { data as dashboardData } from '../config/data';

const BarChart = () => {

    const { analytics } = dashboardData;
    
    // Bar Chart Data for Sales
    const barData = {
        labels: analytics.salesData.topProducts.map(product => product.productName),
        datasets: [
            {
                label: 'Sales',
                backgroundColor: ['#8884d8', '#82ca9d', '#ffc658'],
                data: analytics.salesData.topProducts.map(product => product.sales),
                borderWidth: 1,
            },
        ],
    };

    const barOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        return `Sales: ${context.raw}`;
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
        <div className="bg-white p-4 rounded-lg shadow h-64"> {/* Set height to 16rem */}
            <h3 className="text-lg font-medium mb-4">Top Products Sales</h3>
            <Bar data={barData} options={barOptions} />
        </div>
    )
}

export default BarChart