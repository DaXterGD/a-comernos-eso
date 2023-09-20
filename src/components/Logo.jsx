import "../styles/components/Logo.css";

// eslint-disable-next-line react/prop-types
const Logo = ({ img, desc }) => {
  return (
    <div className="logo-container">
      <img src={img} alt={desc} className="logo" />
    </div>
  );
};

export default Logo;
