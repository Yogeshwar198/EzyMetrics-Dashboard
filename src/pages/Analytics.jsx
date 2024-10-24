import React from 'react';
import PieChart from '../components/PieChart';
import LocationChart from '../components/LocationChart'; 
import { data } from '../config/data';

const Analytics = () => {
  return (
    <div className="analytics-container p-4">
      <h2 className="text-2xl font-bold mb-8">ANALYTICS</h2>
      <div className="chart-container mb-8"> 
        <PieChart data={data.analytics} />
      </div>
      <div className="chart-container"> 
        <LocationChart data={data.analytics} /> 
      </div>
    </div>
  );
};

export default Analytics;
