import React, { useState } from 'react'
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Leads from './pages/Leads';
import Analytics from './pages/Analytics';
import Reports from './pages/Reports';
import Setting from './pages/Setting';
import Navbar from './components/Navbar';

const App = () => {
  const [sidebarToggle, setSidebarToggle] = useState(false);


  return (
    <Router>
      <div className='flex'>
        <Sidebar sidebarToggle={sidebarToggle} />

        <div className={`${sidebarToggle ? "" : "ml-64"} w-full`}>
          <Navbar sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle} />
        </div>
        
      </div>
      <div className={`${sidebarToggle ? "" : "ml-64"} p-4`}>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/leads' element={<Leads />} />
          <Route path='/analytics' element={<Analytics />} />
          <Route path='/reports' element={<Reports />} />
          <Route path='/setting' element={<Setting />} />
        </Routes>

      </div>
    </Router>
  )
}

export default App