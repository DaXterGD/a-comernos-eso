/* eslint-disable react/prop-types */
import "../styles/components/TextArea.css";

const TextArea = ({
  name,
  id,
  rows = 10,
  placeholder,
  isRequired,
  maxLength = 500,
}) => {
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
