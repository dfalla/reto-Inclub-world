import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { v4 as uuid } from 'uuid';
import * as Yup from 'yup';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { ServiciosActions } from "../store/servicios";
import ServiciosHttp from "../http/serviciosHttp";


const INITIALVALUES = {
    nombre: '',
    descripcion: ''
}

const validationSchema = Yup.object().shape({
    nombre: Yup.string().required('El campo es requerido'),
    descripcion: Yup.string().required('El campo es requerido')
})

export const Form = () => {
    
    const [initialValues, setInitialValues] = useState(INITIALVALUES);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const params = useParams();

    const { handleSubmit, getFieldProps, errors, touched, resetForm } = useFormik({
        initialValues,
        onSubmit: (values)=>{
            if(params.id) {
                dispatch(ServiciosActions.updateServicio(params.id, values))
            } 
    
            if(!params.id) {
                dispatch(ServiciosActions.createServicio({
                    ...values,
                    id: uuid()
                }));
                resetForm()
            }
            
            navigate('/')
        },
        validationSchema,
        enableReinitialize: true
    });

    const goToServicios = () => navigate('/');
    
    useEffect(() => {
        if(params.id){
          ServiciosHttp.getOne(params.id).then(res => setInitialValues({
            nombre: res.nombre,
            descripcion: res.descripcion
          }));
        }
      }, [params.id]);
      
  return ( 
    <div className="container mt-5">
        <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
            <form onSubmit={ handleSubmit }>
                <div className="card">
                    <div className="card-body">
                        <h1>{ params.id ? 'Editar Servicio' : 'Nuevo Servicio' }</h1>
                        <div className="form-group mb-2">
                            <label htmlFor="nombre">Nombre: </label>
                            <input
                                type="text"
                                id="nombre"
                                className={ `mt-2 form-control ${ touched.nombre && errors.nombre ? "is-invalid" : "" }`}
                                {...getFieldProps('nombre')} 
                            />
                            <div
                                name='nombre'
                                className="invalid-feedback"
                            >
                                { errors.nombre }
                            </div>

                        </div>
                        <div className="form-group">
                            <label htmlFor="descripcion">Descripcion: </label>
                            <input
                                type="text"
                                id="descripcion"
                                className={ `mt-2 form-control ${ touched.descripcion && errors.descripcion ? "is-invalid" : "" }`}
                                {...getFieldProps('descripcion')}
                            />
                            <div
                                name='descripcion'
                                className="invalid-feedback"
                            >
                                { errors.descripcion }
                            </div>
                        </div>

                    </div>
                    <div className="card-footer">
                        <div className="form-group d-flex justify-content-between">
                            <button
                                type="submit"
                                className="btn btn-outline-primary mt-2"
                            >
                                Save
                            </button>
                            <button
                                type='button'
                                className="btn btn-outline-danger mt-2"
                                onClick={ goToServicios }
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </form>
            </div>
            <div className="col-md-4"></div>
        </div>
    </div>
    
  )
}

