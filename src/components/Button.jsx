/* 
  Componente de interfaz, Este botón se usa en los formularios para confirmar el envío de la información una vez se han llenado todos los campos
*/
// Importación de estilos
import "../styles/components/Button.css";

// La siguiente línea sirve para desabilitar las alertas de React en relación a las props
// eslint-disable-next-line react/prop-types
const Button = ({ text }) => {
  // La prop "text" recibe el texto que se mostrará dentro del botón
  return (
    <button className="form-button" type="submit">
      {text}
    </button>
  );
};

export default Button;
