import { useNavigate } from 'react-router-dom';


export const ButtonAdd = () => {

  const navigate = useNavigate();
  const goToCrear = () => navigate('servicios/crear-servicio');
  return (
    <button
      className="btn btn-outline-primary"
      onClick={ goToCrear }
    >
      Nuevo Servicio
    </button>
  )
}

