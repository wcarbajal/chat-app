import { Route, Routes } from 'react-router';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';


import '../css/login-register.css';
import { ErrorPage } from '../pages/ErrorPage';

export const AuthRouter = () => {
  return (

    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100 p-t-50 p-b-90">
          <Routes >
            <Route path="login" element={ <LoginPage /> } />
            <Route path="register" element={ <RegisterPage /> } />
            <Route path="*" element={ <ErrorPage /> } />
            
          </Routes>

        </div>
      </div>
    </div>
  );
};