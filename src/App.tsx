
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";

import Landing from "./pages/landing";
import Login from "./pages/login";
import Register from "./pages/register";
import NewDashboardLayout from "./layouts/sidebar-layout-new";
import Dashboard from "./pages/dashboard";
import AddVehicle from "./pages/add-vehicle";
import VehicleManagement from "./pages/vehicle-management";
import Settings from "./pages/settings";


function App() {
  return (
    <ThemeProvider>
        <Router>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={<NewDashboardLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="add-vehicle" element={<AddVehicle />} />
                    <Route path="vehicle-management" element={<VehicleManagement />} />
                    <Route path="settings" element={<Settings />} />
                </Route>
            </Routes>
        </Router>
   </ThemeProvider>
  );
}

export default App;