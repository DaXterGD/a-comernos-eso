// Importación de React y ReactDOM para inicializar el proyecto
import React from "react";
import ReactDOM from "react-dom/client";
// Importación de componentes necesarios de la librería "react-router-dom" para definir las rutas de la aplicación
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Importación de estilos globales y componentes principales de la aplicación
import "./styles/index.css";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Report from "./pages/Report";

// El método "ReactDOM.createRoot" crea la raíz del proyecto de React sobre el elemento HTML con el id "root"
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* La etiqueta main y el componente Footer se mostrarán en todas las rutas de la aplicación */}
      <main>
        {/* Definición de rutas */}
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
