
import { useCallback, useState } from 'react';
import { AuthContext } from './Context';
import { fetchConToken, fetchSinToken } from '../helpers/fetch';


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

    const respuesta = await fetchSinToken( 'login', { email, password }, 'POST' );

    if ( respuesta.ok ) {

      localStorage.setItem( 'token', respuesta.token );
      const { usuario } = respuesta;

      setAuth( {
        uid: usuario.uid,
        checking: false,
        logged: true,
        name: usuario.nombre,
        email: usuario.email
      } );
    }
    return respuesta.ok;


  };

  const register = async ( nombre, email, password ) => {

    const respuesta = await fetchSinToken( 'login/new', { nombre, email, password }, 'POST' );

    if ( respuesta.ok ) {

      localStorage.setItem( 'token', respuesta.token );
      const { usuario } = respuesta;

      setAuth( {
        uid: usuario.uid,
        checking: false,
        logged: true,
        name: usuario.nombre,
        email: usuario.email
      } );
    }

    return respuesta;


  };

  const verificaToken = useCallback( async () => {

    const token = localStorage.getItem( 'token' );

    if ( !token ) {
      return setAuth( {
        uid: null,
        checking: false,
        logged: false,
        name: null,
        email: null
      } );
    }
     const resp = await fetchConToken( 'login/renew', {}, 'GET' );

     if (resp.ok) {
      localStorage.setItem( 'token', resp.token );
      const { usuario } = resp;

      setAuth( {
        uid: usuario.uid,
        checking: false,
        logged: true,
        name: usuario.nombre,
        email: usuario.email
      } );
      
      return true
     }else {
    return setAuth( {
        uid: null,
        checking: false,    
        logged: false,
        name: null,
        email: null
      } );
     }    
    

  }, [] );

  const logout = () => {
    localStorage.removeItem( 'token' );
    setAuth( {
      uid: null,
      checking: false,
      logged: false,
      
    } );

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