import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import Loader from "./components/ui/Loader";
import { initScrollReveal } from "./utils/scrollReveal";

// Must live INSIDE <Router> to access useLocation
const ScrollRevealWrapper = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    // Small delay lets the new route's DOM fully paint before querying
    const timer = setTimeout(() => {
      initScrollReveal(document.body);
    }, 100);

    return () => clearTimeout(timer); // cleanup on unmount / route change
  }, [location.pathname]); // re-run on every page navigation

  return children;
};

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <Router>
      <Layout>
        {loading && <Loader setLoading={setLoading} />}
        {!loading && (
          <ScrollRevealWrapper>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </ScrollRevealWrapper>
        )}
      </Layout>
    </Router>
  );
};

export default App;