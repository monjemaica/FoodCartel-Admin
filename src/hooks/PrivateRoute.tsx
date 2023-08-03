import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './useAuth';

export const PrivateRoute = () => {
  const { cookies } = useAuth();
  return (
    cookies.COOKI3AUTH ? <Outlet /> : <Navigate to = '/login' /> 
  )
}
