import { Route, Routes } from 'react-router';
import { ChatPage } from '../pages/ChatPage';


import { AuthRouter } from './AuthRouter';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../auth/Context';
import  {PrivateRoute}  from './PrivateRoute';
import  {PublicRoute}  from './PublicRoute';
import { ErrorPage } from '../pages/ErrorPage';


export const AppRouter = () => {

  const { auth, verificaToken } = useContext( AuthContext );

  //

  useEffect( () => {
    verificaToken();

  }, [ verificaToken ] );



  if ( auth.checking ) {
    return <h1>Autenticando...</h1>;


  }
  return (
    <Routes>
      <Route element={ <PrivateRoute isAuthenticated={ !auth.logged } /> } >
        <Route path="auth/*" element={ <AuthRouter /> } />
      </Route>
      <Route element={ <PublicRoute isAuthenticated={ auth.logged } /> } >
        <Route path="/" element={ <ChatPage /> } />
      </Route>
      <Route path="*" element={ <ErrorPage /> } />
    </Routes >
  );
};


