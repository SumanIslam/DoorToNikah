import React from "react";
import { Routes, Route } from "react-router-dom";

import AdminPanelComponent from "../component/admin-dashboard/adminPanel.component";

const AdminPanel = () => {
  return (
    <Routes>
      <Route path="*" element={<AdminPanelComponent />} />
    </Routes>
  );
};

export default AdminPanel;
