import { useSelector } from "react-redux";
import { ServiciosSelector } from "./";


export const useServicios = () => useSelector(ServiciosSelector);