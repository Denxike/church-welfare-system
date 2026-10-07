import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import AdminLayout from './layouts/AdminLayout';
import Dashboard from './pages/Dashboard';
import EventBilling from './features/events/EventBilling';
import MemberLedger from './features/members/MemberLedger';
import MemberPortal from './pages/MemberPortal'; // Import client portal

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Admin Routes */}
        <Route path="/" element={<AdminLayout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="ledger" element={<MemberLedger />} />
          <Route path="events" element={<EventBilling />} />
        </Route>

        {/* Client / Member Mobile Portal Route */}
        <Route path="/portal" element={<MemberPortal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;