/* 
  Componente de ruta, en el se mostrará el formulario para iniciar sesión
*/
// Importación de estilos
import "../styles/pages/Login.css";
// Importación de otros componentes de la aplicación
import Form from "../components/Form";
import burguer from "../assets/burguer.jpg";
import Input from "../components/Input";
import Button from "../components/Button";
// Importación de componente Link, que servirá como reecmplazo para las etiquetas <a></a>
import { Link } from "react-router-dom";

function Login() {
  return (
    // Definición de formulario de inicio de sesión
    <Form
      formClass="login-form"
      logoImg={burguer}
      title="¡A Comernos Eso!"
      subtitle="Tu comida en minutos"
    >
      {/* Inputs del formulario */}
      <label htmlFor="username">Nombre de Usuario</label>
      <Input
        type="text"
        id="username"
        placeholder="Tu nombre de usuario"
        isRequired={true}
      />
      <label htmlFor="password">Contraseña</label>
      <Input
        type="password"
        id="password"
        placeholder="Tu contraseña"
        isRequired={true}
      />
      <Button text="Iniciar sesión" />
      <hr />
      {/* Enlaces para navegar a otras páginas de la aplicación */}
      <Link to="#" className="forgot-password">
        ¿Olvidaste tu contraseña?
      </Link>
      <Link to="/register" className="register">
        ¿No tienes una cuenta? Regístrate aquí.
      </Link>
      <Link to="/report" className="report">
        Reportar un error.
      </Link>
    </Form>
  );
}

export default Login;
