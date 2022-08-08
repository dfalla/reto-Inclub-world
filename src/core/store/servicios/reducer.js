import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    servicios: [],
    isServiciosLoaded: false,
    isServiciosLoading: false
}

export const serviciosSlice = createSlice({
    name: 'servicios',
    initialState,
    reducers: {
        setServicios: (state, action) => {
            state.servicios = action.payload;
        },
        getServicio: (state, action) => {
            // console.log(action.payload);
            const keys = ['nombre', 'descripcion']
            const servicios = state.servicios.filter((servicio) => keys.some((key)=>servicio[key].toLowerCase().includes(`${action.payload}`)));
            console.log(servicios);
            return{
                ...state,
                servicios
            }
        },
        addServicio: (state, action) => {
            return {
                 ...state,
                 servicios: [
                     ...state.servicios,
                     action.payload
                 ]
                 
            }
        },
        loadServicios: (state)=>{
            state.isServiciosLoading = true;
        },
        editServicio: (state, action) => {
            const { id, nombre, descripcion} = action.payload;
            const foundServicio = state.servicios.find((servicio) => servicio.id === id )
            if(foundServicio){
                foundServicio.nombre = nombre;
                foundServicio.descripcion = descripcion;
            }
        },
        deleteServicio: (state, action) => {
            const servicios = state.servicios.filter((servicio) => servicio.id !== action.payload);
            return{
                ...state,
                servicios
            }
        },
    }
});

export default serviciosSlice.reducer;