import "../styles/components/Button.css";

// eslint-disable-next-line react/prop-types
const Button = ({ text }) => {
  return (
    <button className="form-button" type="submit">
      {text}
    </button>
  );
};

export default Button;
