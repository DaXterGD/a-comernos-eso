import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/index.css";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Report from "./pages/Report";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/report" element={<Report />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
