import { useNavigate } from 'react-router-dom';

export const ButtonEdit = ({ id }) => {
  const navigate = useNavigate();
  const goToEdit = () =>  navigate(`servicio/${id}`)
  return (
    <button
        type="button"
        className="btn btn-warning m-2"
        onClick={ goToEdit }
    >
        Edit
    </button>
  )
}