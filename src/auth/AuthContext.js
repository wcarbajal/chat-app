
import { useCallback, useState } from 'react';
import { AuthContext } from './Context';

const initialState = {
  uid: null,
  checking: true,
  logged: false,
  name: null,
  email: null
};

export const AuthProvider = ( { children } ) => {

  const [ auth, setAuth ] = useState( initialState );

  const login = ( email, password ) => {
    console.log( email, password );
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
    } }>
      { children }
    </AuthContext.Provider>
  );
};