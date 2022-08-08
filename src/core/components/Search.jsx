import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ServiciosActions } from '../store/servicios/actions';

export const Search = () => {
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if( !inputValue ) dispatch(ServiciosActions.getServicios());
    dispatch(ServiciosActions.getOneServicio(inputValue));
  }, [dispatch, inputValue]);

  return (
    // <form>
     <div className="form-group">
       <input
        type='text'
        placeholder='Buscar' 
        className='form-control'
        name='nombre'
        onChange={ (e)=>setInputValue(e.target.value) }
        value={inputValue.nombre}
      />
     </div>
    // </form>
  )
}

