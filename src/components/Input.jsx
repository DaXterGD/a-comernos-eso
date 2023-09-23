/* 
  Componente de interfaz, Es un input para los formularios. La prop "type" recibe el tipo de input que se desea usar
*/
// Importación de estilos
import "../styles/components/Input.css";

// La siguiente línea sirve para desabilitar las alertas de React en relación a las props
// eslint-disable-next-line react/prop-types
const Input = ({ type, id, placeholder, isRequired, maxLength }) => {
 // Primera variante del componente, se retorna si se pasa el valor "true" en la prop isRequired
  if (isRequired) {
    return (
      <input
        className="form-input"
        type={type}
        id={id}
        placeholder={placeholder}
        maxLength={maxLength}
        required
      />
    );
  }
 // Segunda variante del componente, se retorna si no existe un valor en la prop isRequired o se le pasa el valor "false"
  return (
    <input
      className="form-input"
      type={type}
      id={id}
      placeholder={placeholder}
      maxLength={maxLength}
    />
  );
};

export default Input;
