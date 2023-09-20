import "../styles/components/Form.css";
import Logo from "./Logo";

// eslint-disable-next-line react/prop-types
const Form = ({ children, logoImg, title, subtitle, formClass }) => {
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
