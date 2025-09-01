import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import stem from "./pages/stem";
import AboutPage from "./pages/AboutPage";
import FAQPage from "./pages/FAQPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/stem" element={<stem />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/faq" element={<FAQPage />} />
      </Routes>
    </Router>
  );
}

export default App;