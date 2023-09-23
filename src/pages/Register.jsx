/* 
  Componente de ruta, en el se muestra el formulario de registro de usuarios
*/
// Importación de estilos
import "../styles/pages/Register.css";
// Importación de otros componentes de la aplicación
import Form from "../components/Form";
import burguer from "../assets/burguer.jpg";
import Input from "../components/Input";
import Button from "../components/Button";
// Importación de otros componentes de la aplicación
import { Link } from "react-router-dom";

const Register = () => {
  return (
    // Definición de formulario de regitro
    <Form
      formClass="register-form"
      logoImg={burguer}
      title="Crea tu cuenta"
      subtitle="Para empezar a disfrutar"
    >
      {/* Inputs del formulario */}
      <label htmlFor="name">Nombres</label>
      <Input
        type="text"
        id="name"
        placeholder="Tus nombres"
        isRequired={true}
        maxLength="30"
      />
      <label htmlFor="last-name">Apellidos</label>
      <Input
        type="text"
        id="last-name"
        placeholder="Tus apellidos"
        isRequired={true}
        maxLength="30"
      />
      <label htmlFor="username">Nombre de usuario</label>
      <Input
        type="text"
        id="username"
        placeholder="Tu nombre de usuario"
        isRequired={true}
        maxLength="20"
      />
      <label htmlFor="phone-number">Número de celular</label>
      <Input
        type="tel"
        id="phone-number"
        placeholder="123 456 7890"
        isRequired={true}
        maxLength="10"
      />
      <label htmlFor="date-of-birth">Fecha de nacimiento</label>
      <Input type="date" id="date-of-birth" isRequired={true} />
      <label htmlFor="password">Contraseña</label>
      <Input
        type="password"
        id="password"
        placeholder="Tu contraseña"
        isRequired={true}
        maxLength="30"
      />
      <label htmlFor="confirm-password">Confirma tu contraseña</label>
      <Input
        type="password"
        id="confirm-password"
        placeholder="Confirma tu contraseña"
        isRequired={true}
        maxLength="30"
      />
      <Button text="Completar registro" />
      <hr />
      {/* Enlaces para navegar a otras páginas de la aplicación */}
      <Link to="/">¿Ya tienes una cuenta? Inicia sesión.</Link>
      <Link to="/report">Reportar un error.</Link>
    </Form>
  );
};

export default Register;
