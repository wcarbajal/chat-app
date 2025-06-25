
import { useCallback, useState } from 'react';
import { AuthContext } from './Context';
import { fetchSinToken } from '../helpers/fetch';

const initialState = {
  uid: null,
  checking: true,
  logged: false,
  name: null,
  email: null
};

export const AuthProvider = ( { children } ) => {

  const [ auth, setAuth ] = useState( initialState );

  const login = async ( email, password ) => {

    const respuesta = await fetchSinToken( 'login', {email, password}, 'POST' );

    if( respuesta.ok){

      localStorage.setItem('token', respuesta.token)
      const { usuario } = respuesta;

      setAuth({
        uid: usuario.uid,
        checking: false,
        logged: true,
        name: usuario.nombre,
        email: usuario.email
      })
    }
    return respuesta.ok


  };

  const register = ( name, email, password ) => {
    console.log( name, email, password );
  };

  const verificaToken = useCallback( () => {


  }, [] );

  const logout = () => {

  };

  return (

    <AuthContext.Provider value={ {
      login,
      register,
      verificaToken,
      logout,
      auth
    } }>
      { children }
    </AuthContext.Provider>
  );
};