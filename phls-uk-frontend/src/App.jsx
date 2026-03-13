import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginRegisterPage from "./pages/LoginRegisterPage";
import HomePage from "./pages/HomePage";
import SettingsPage from "./pages/SettingsPage";
import SearchInsurancePage from "./pages/SearchInsurancePage";
import SearchBookingsPage from "./pages/SearchBookingsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginRegisterPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/searchbookings" element={<SearchBookingsPage />} />
        <Route path="/searchinsurance" element={<SearchInsurancePage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;