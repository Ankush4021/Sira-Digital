import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";

import Loader from "./components/ui/Loader";
import { initScrollReveal } from "./utils/scrollReveal";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    initScrollReveal();
  }, []);

  return (
    <Router>
      {loading && <Loader setLoading={setLoading} />}
      {!loading && (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      )}
    </Router>
  );
};

export default App;
