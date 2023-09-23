/* 
  Componente de interfaz, Se usa dentro del componente Form para tener una imagen representativa de la página en la que está el usuario actualmente
*/
// Importación de estilos
import "../styles/components/Logo.css";

// La siguiente línea sirve para desabilitar las alertas de React en relación a las props
// eslint-disable-next-line react/prop-types 
const Logo = ({ img, desc }) => {
  // La prop "img" recibe la ruta de la imagen que se va a mostrar y la prop "desc" recibe un string con una descripción de la imagen a mostrar
  return (
    <div className="logo-container">
      <img src={img} alt={desc} className="logo" />
    </div>
  );
};

export default Logo;
