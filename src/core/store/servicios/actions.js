import ServiciosHttp from '../../http/serviciosHttp';
import { serviciosSlice } from './reducer';

const getServicios = () =>{
    return(dispatch, getState) => {
        const { isServiciosLoaded } = getState().servicios;

        if(isServiciosLoaded) return;

        dispatch(ServiciosActions.loadServicios());

        ServiciosHttp.getAll().then(res => dispatch(ServiciosActions.setServicios(res)));  
    }
};

const getOneServicio = (nombre) =>{
    return(dispatch) => {
        dispatch(ServiciosActions.getServicio(nombre));
        // ServiciosHttp.getOne(nombre)
    }
}

const createServicio = (body) =>{
    return (dispatch) =>{
        ServiciosHttp.create(body).then(res => dispatch(ServiciosActions.addServicio(res)));
    }
};

const updateServicio= (id, body) => {
    return(dispatch) =>{
        ServiciosHttp.update(id, body);
        dispatch(ServiciosActions.editServicio(body))
    }
} 


const removeServicio = (id) =>{
    return (dispatch) =>{
        ServiciosHttp.delete(id);
        dispatch(ServiciosActions.deleteServicio(id)); 
    }
};




export const ServiciosActions = {
    ...serviciosSlice.actions,
    getServicios,
    getOneServicio,
    createServicio,
    removeServicio,
    updateServicio
}