import { useServicios } from "../store/servicios";
import { ButtonEdit, ButtonDelete, ButtonDetails } from "./";

export const List = () => {
  const { servicios } = useServicios();
  return (
    <>
        <div className="row">
            {
                servicios.map(servicio => (
                    <div key={servicio.id} className="col-md-4 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h3 className="card-title">{servicio.nombre}</h3>
                                <p className="card-text">{servicio.descripcion}</p>
                            </div>
                            <div className="card-footer">
                                <ButtonEdit
                                    id = { servicio.id }
                                />
                                <ButtonDelete
                                    { ...servicio }
                                />
                                <ButtonDetails 
                                    id = { servicio.id }
                                />
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </>
    
  )
}
