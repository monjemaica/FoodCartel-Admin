import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRoute = () => {
    const auth = {'token': false};

  return (
    auth.token ? <Outlet /> : <Navigate to = '/login' /> 
  )
}
