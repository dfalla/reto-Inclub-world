import { configureStore } from "@reduxjs/toolkit";
import serviciosReducer from './servicios/reducer';

const store = configureStore({
    reducer:{
        servicios: serviciosReducer
    }
})

export default store;