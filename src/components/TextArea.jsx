/* 
  Componente de interfaz, sirve como campo de texto extendido para los formularios
*/
/* eslint-disable react/prop-types */ // Esta línea sirve para desabilitar las alertas de React en relación a las props
// Importación de estilos
import "../styles/components/TextArea.css";

const TextArea = ({
  // Definición de props, si no se le pasa un valor a las props rows o maxLength se usará su valor por defecto
  name,
  id,
  rows = 10,
  placeholder,
  isRequired,
  maxLength = 500,
}) => {
 // Primera variante del componente, se retorna si se le pasa el valor "true" en la prop isRequired
  if (isRequired) {
    return (
      <textarea
        className="form-textarea"
        name={name}
        id={id}
        rows={rows}
        placeholder={placeholder}
        maxLength={maxLength}
        required
      ></textarea>
    );
  }
 // Segunda variante del componente, se retorna si no existe un valor en la prop isRequired o se le pasa el valor "false"
  return (
    <textarea
      className="form-textarea"
      name={name}
      id={id}
      rows={rows}
      placeholder={placeholder}
      maxLength={maxLength}
    ></textarea>
  );
};

export default TextArea;
