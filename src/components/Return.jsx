import "../styles/components/Return.css";
import { useNavigate } from "react-router-dom";
import arrowLeft from "../assets/arrow-left-solid.svg";

const Return = () => {
  const navigate = useNavigate();
  const handleReturn = () => {
    navigate(-1);
  };

  return (
    <span onClick={handleReturn} className="return">
      <img src={arrowLeft} alt="Volver atrás" />
    </span>
  );
};

export default Return;
