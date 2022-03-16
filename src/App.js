import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Loading from "./Components/Loading/Loading";
import ContactUsPage from "./Pages/ContactUsPage/ContactUsPage";
import HomePage from "./Pages/HomePage";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  return (
    <div className="App">
      {loading ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/*" element={<HomePage />} />
            <Route path="/contact" element={<ContactUsPage />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
