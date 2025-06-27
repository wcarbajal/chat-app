import { Navigate, Outlet } from 'react-router';


export const PrivateRoute = ({
  isAuthenticated
}) => {

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
}
