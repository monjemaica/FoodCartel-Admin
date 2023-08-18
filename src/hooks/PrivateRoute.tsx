import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './useAuth';

export const PrivateRoute = () => {
  const { cookies } = useAuth();
  // console.log('test',cookies);
  return (
    cookies["COOKI3-AUTH"] ? <Outlet /> : <Navigate to = '/login' /> 
  )
}
