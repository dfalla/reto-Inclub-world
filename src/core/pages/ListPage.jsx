import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ButtonAdd, List, Search } from "../components"
import { ServiciosActions } from "../store/servicios";

export const ListPage = () => {
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(ServiciosActions.getServicios());
  }, [dispatch]);

  return (
    <>
      <div className="container mt-5">
        <div className="row mb-3">
          <div className="d-grid gap-2 d-md-flex justify-content-between">
            <Search/>
            <ButtonAdd/>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <List/>
          </div>
        </div>
      </div>
    </>
  )
}

