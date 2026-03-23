import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginRegisterPage from "./pages/LoginRegisterPage";
import HomePage from "./pages/HomePage";
import SettingsPage from "./pages/SettingsPage";
import SearchInsurancePage from "./pages/SearchInsurancePage";
import SearchBookingsPage from "./pages/SearchBookingsPage";
import ManageBookingsPage from "./pages/ManageBookingsPage";
import ManageProfilePage from "./pages/ManageProfilePage";
import PatientFaqPage from "./pages/PatientFaqPage";
import ProviderFaqPage from "./pages/ProviderFaqPage";
import AppShell from "./components/AppShell";
import ScrollToTop from "./components/ScrollToTop";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<LoginRegisterPage />} />

        <Route element={<AppShell />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/searchbookings" element={<SearchBookingsPage />} />
          <Route path="/managebookings" element={<ManageBookingsPage />} />
          <Route path="/searchinsurance" element={<SearchInsurancePage />} />
          <Route path="/manageprofile" element={<ManageProfilePage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/faq-patient" element={<PatientFaqPage />} />
          <Route path="/faq-provider" element={<ProviderFaqPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;