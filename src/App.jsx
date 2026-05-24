import React, { useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import PricesPage from "./pages/PricingPage";
import StoreServicesPage from "./pages/StoreServices";
import DriverServicesPage from "./pages/DriverServices";
import Estore from "./pages/Estore";
import ShippingPoliciesPage from "./pages/policy";
import TrackingPage from "./pages/TrackingPage";
import AboutUsPage from "./pages/AboutUsPage";

const theme = createTheme({
  typography: { fontFamily: '"Almarai", sans-serif' },
  palette: { primary: { main: "rgb(219, 38, 42)" } },
});



export default function App() {
  const MainRef = useRef(null);
  const servicesRef = useRef(null);
  const ratesRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar
          MainRef={MainRef}
          servicesRef={servicesRef}
          ratesRef={ratesRef}
          contactRef={contactRef}
        />
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                MainRef={MainRef}
                servicesRef={servicesRef}
                ratesRef={ratesRef}
                contactRef={contactRef}
              />
            }
          />
          <Route path="/الرئيسية" element={<HomePage MainRef={MainRef} />} />
          <Route path="/الأسعار" element={<PricesPage />} />
          <Route path="/خدمات المتاجر" element={<StoreServicesPage />} />
          <Route path="/خدمات السائقين" element={<DriverServicesPage />} />
          <Route path="/متجر طلبك" element={<Estore />} />
          <Route path="/سياسات الشحن" element={<ShippingPoliciesPage />} />
          <Route path="/tracking/:OrderID" element={<TrackingPage />} />
          <Route path="/من نحن" element={<AboutUsPage />} />
        </Routes>
        <Footer contactRef={contactRef} />
      </Router>
    </ThemeProvider>
  );
}
