import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";

import Home from "./pages/Home";
import Services from "./pages/services/Services";
import ServiceDetail from "./pages/services/ServiceDetail";
import TaxiUdupi from "./pages/locations/TaxiUdupi";
import TaxiManipal from "./pages/locations/TaxiManipal";
import AirportTaxi from "./pages/locations/AirportTaxi";

import Blogs from "./pages/blogs/Blogs";
import BlogDetail from "./pages/blogs/BlogDetail";
import { SpeedInsights } from "@vercel/speed-insights/react";



export default function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
<Route path="/services" element={<Services />} />
<Route path="/blogs" element={<Blogs />} />
<Route path="/blogs/:slug" element={<BlogDetail />} />
<Route path="/services/:slug" element={<ServiceDetail />} />
<Route path="/taxi-in-udupi" element={<TaxiUdupi />} />
<Route path="/taxi-in-manipal" element={<TaxiManipal />} />
<Route path="/airport-taxi" element={<AirportTaxi />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
    <SpeedInsights />
    </>
  );
}