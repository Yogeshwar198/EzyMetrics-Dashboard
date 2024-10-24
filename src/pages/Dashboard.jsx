import React from 'react';
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill } from 'react-icons/bs';
import 'chart.js/auto';
import { data as dashboardData } from '../config/data';
import BarChart from '../components/BarChart';
import LineChart from '../components/LineChart';
import DoughnutChart from '../components/DoughnutChart';

function Dashboard() {

  const { dashboard } = dashboardData;

  return (
    <main className="p-6">
      <div className="mb-8">
        <h3 className="text-2xl font-bold">DASHBOARD</h3>
      </div>

      {/* Dashboard Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="card bg-white p-4 rounded-lg shadow">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium">Total Users</h3>
            <BsPeopleFill className="text-3xl text-gray-600" />
          </div>
          <h1 className="text-3xl font-bold mt-4">{dashboard.totalUsers}</h1>
        </div>
        <div className="card bg-white p-4 rounded-lg shadow">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium">Active Users</h3>
            <BsFillGrid3X3GapFill className="text-3xl text-gray-600" />
          </div>
          <h1 className="text-3xl font-bold mt-4">{dashboard.activeUsers}</h1>
        </div>
        <div className="card bg-white p-4 rounded-lg shadow">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium">Total Revenue</h3>
            <BsFillArchiveFill className="text-3xl text-gray-600" />
          </div>
          <h1 className="text-3xl font-bold mt-4">${dashboard.totalRevenue}</h1>
        </div>
        <div className="card bg-white p-4 rounded-lg shadow">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium">New Users Today</h3>
            <BsFillBellFill className="text-3xl text-gray-600" />
          </div>
          <h1 className="text-3xl font-bold mt-4">{dashboard.newUsersToday}</h1>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <BarChart />
        <LineChart />
      </div>

      {/* Additional Chart for Age Demographics */}
      <DoughnutChart />
    </main>
  );
}

export default Dashboard;
