/* 
  Componente de interfaz, puede usarse en cualquier parte del sitio para retornar a la página anterior en el historial
*/
// Importación de estilos
import "../styles/components/Return.css";
// Importación del hook useNavigate de la librería "react-router-dom", sirve para navegar a una ruta específica de la aplicación
import { useNavigate } from "react-router-dom";
// Ícono representativo para el botón
import arrowLeft from "../assets/arrow-left-solid.svg";

const Return = () => {
  // Definición del hook useNavigate y definición de función manejadora que se ejecutará en el evento onClick
  const navigate = useNavigate();
  const handleReturn = () => {
    // Se navegará a la página anterior en el historial
    navigate(-1);
  };

  return (
    // Cuando se le click a la etiqueta <span></span> se acccionará el evento onClick
    <span onClick={handleReturn} className="return">
      <img src={arrowLeft} alt="Volver atrás" />
    </span>
  );
};

export default Return;
