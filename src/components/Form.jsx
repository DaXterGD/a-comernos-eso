/* 
  Componente de interfaz, Este formulario es uno de los componentes principales de la aplicación y en el se podrán insertar todos inputs y botones que se requieram
*/
// Importación de estilos y de del componente Logo
import "../styles/components/Form.css";
import Logo from "./Logo";

// La siguiente línea sirve para desabilitar las alertas de React en relación a las props
// eslint-disable-next-line react/prop-types
const Form = ({ children, logoImg, title, subtitle, formClass }) => {
  /* 
    -Props-
    children: Indica en que parte del componente se insertarán todos los elemetos hijos que reciba el componente
    logoImg: recibe la imagen que se usará para el componente Logo
    formClass: representa una clase secundaria para el elemento <form></form> que servirá para manejar los estilos del componente según las necesidades de cada página
  */
  return (
    <form className={`form ${formClass}`}>
      <Logo img={logoImg} desc="Logo de la página" />
      <div className="title">
        <h1 className="page-title">{title}</h1>
        <span className="page-subtitle">{subtitle}</span>
      </div>
      {children}
    </form>
  );
};

export default Form;
