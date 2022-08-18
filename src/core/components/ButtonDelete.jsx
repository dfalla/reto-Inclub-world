import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { ServiciosActions } from '../store/servicios';
export const ButtonDelete = ({id, nombre, descripcion}) => {
  const dispatch = useDispatch();
  const remove = () =>{
      Swal.fire({
        title: `Desea eliminar el servicio ${nombre}?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Eliminar',
        cancelButtonText: 'Cancelar',
      }).then(( result )=>{
        if(result.isConfirmed) {
          dispatch(ServiciosActions.removeServicio(id));
        }
      });
    }
  return (
    <button
        type="button"
        className="btn btn-danger m-2"
        onClick={ remove }
    >
        Delete
    </button>
  )
}

