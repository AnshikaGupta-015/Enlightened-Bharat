import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import About from "./components/About";
import Gallery from "./components/Gallery";
import CTA from "./components/CTA";

// Pages
import Home from "./pages/Home";
import Admissions from "./pages/Admissions";
import Admin from "./pages/Admin";

// Academics Page
function AcademicsPage() {
  return (

    <div className="pt-32 px-6 min-h-screen text-white">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-bold mb-6">
          Academics
        </h1>

        <p className="text-gray-300 text-lg leading-8 max-w-3xl">
          Enlightened Bharat focuses on modern CBSE education with Gurukul values,
          smart learning, discipline, conceptual clarity and holistic student development.
        </p>

      </div>

    </div>

  );
}

// Contact Page
function ContactPage() {

  return (

    <div className="pt-32">

      <CTA />

    </div>

  );

}

function App() {

  return (

    <BrowserRouter>

      <div className="bg-[#061224] min-h-screen overflow-hidden">

        {/* Navbar - hidden on admin route */}
        {window.location.pathname !== "/enlightened-admin-panel" && <Navbar />}

        {/* Routes */}
        <Routes>

          {/* Home */}
          <Route
            path="/"
            element={<Home />}
          />

          {/* About */}
          <Route
            path="/about"
            element={<About />}
          />

          {/* Gallery */}
          <Route
            path="/gallery"
            element={<Gallery />}
          />

          {/* Academics */}
          <Route
            path="/academics"
            element={<AcademicsPage />}
          />

          {/* Contact */}
          <Route
            path="/contact"
            element={<ContactPage />}
          />

          {/* Admissions */}
          <Route
            path="/admissions"
            element={<Admissions />}
          />

          {/* Admin - hidden route */}
          <Route
            path="/enlightened-admin-panel"
            element={<Admin />}
          />

        </Routes>

         <Footer />

      </div>

    </BrowserRouter>

  );

}

export default App;