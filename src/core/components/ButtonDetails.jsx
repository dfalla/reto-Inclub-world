import { useNavigate } from "react-router-dom";

export const ButtonDetails = ({ id }) => {
  const navigate = useNavigate();

  const goToDetailsServices = () => navigate(`servicio-detalles/${id}`);
  return (
    <button
        className="btn btn-primary"
        onClick={ goToDetailsServices }
    >
        Detalles
    </button>
  )
}
