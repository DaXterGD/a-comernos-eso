import "../styles/components/Input.css";

// eslint-disable-next-line react/prop-types
const Input = ({ type, id, placeholder, isRequired, maxLength }) => {
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
