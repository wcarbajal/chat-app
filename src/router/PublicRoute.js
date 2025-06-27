import { Navigate, Outlet } from 'react-router';


export const PublicRoute = ({
  isAuthenticated
}) => {

  if (!isAuthenticated) {
    return <Navigate to="/auth/login" replace />;
  }
  return <Outlet />;
}
