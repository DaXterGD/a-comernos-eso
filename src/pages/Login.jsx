import "../styles/pages/Login.css";
import Form from "../components/Form";
import burguer from "../assets/burguer.jpg";
import Input from "../components/Input";
import Button from "../components/Button";
import { Link } from "react-router-dom";

function Login() {
  return (
    <Form
      formClass="login-form"
      logoImg={burguer}
      title="¡A Comernos Eso!"
      subtitle="Tu comida en minutos"
    >
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
