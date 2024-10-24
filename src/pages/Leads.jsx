import React from 'react';
import { data } from '../config/data'; 

function Leads() {
  const { leads } = data; // Extract leads from the data

  return (
    <div className="p-6">
      <h3 className="text-2xl font-bold mb-4">LEADS</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {leads.map((lead) => (
          <div key={lead.id} className="bg-white p-4 rounded-lg shadow mb-4">
            <h3 className="text-lg font-medium">{lead.name}</h3>
            <p className="text-sm text-gray-600">Email: {lead.email}</p>
            <p className="text-sm text-gray-600">Status: {lead.status}</p>
            <p className="text-sm text-gray-600">Last Contacted: {lead.lastContacted}</p>
            <p className="text-sm text-gray-600">Assigned To: {lead.assignedTo}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Leads;
