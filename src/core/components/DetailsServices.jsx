import { useEffect } from "react";
import { useDispatch} from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { ServiciosActions, useServicios} from '../store/servicios';

export const DetailsServices = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { servicio } = useServicios();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(ServiciosActions.getOneServicioId(id));
    }, [dispatch, id]);

    const goToServices = () => navigate(-1);

  return (
    <div className="row mt-5">
        <div className="col-md-4"></div>
        <div className="col-md-4">
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title">Detalles del servicio: </h3>
                    <small><b>Nombre:</b></small> <p className="card-text">{ servicio.nombre} </p>
                    <small><b>Descripcion:</b></small> <p className="card-text">{ servicio.descripcion }</p>
                </div>
                <div className="card-footer">
                    <button
                        className="btn btn-success m-2"
                        onClick={ goToServices }
                    >
                        Regresar
                    </button>
                </div>
            </div>
        </div>
        <div className="col-md-4"></div>
    </div>
  )
}
