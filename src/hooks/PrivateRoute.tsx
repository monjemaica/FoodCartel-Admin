import { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Cookies from 'js-cookie';

export const PrivateRoute = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
    // const cookies = {'token': false};

    useEffect(() => {
      const COOKI3 = Cookies.get('COOKI3-AUTH');
      const USER = localStorage.getItem("USERDATA");

      const getUserCookie = USER ? JSON.parse(USER) : null;
      
      console.log(getUserCookie.authentication.sessionToken);
      console.log(COOKI3);

      if(`${getUserCookie.authentication.sessionToken}` === `${COOKI3}`){
        setIsLoggedIn(true)
      }
      
    }, []);
  return (
    isLoggedIn ? <Outlet /> : <Navigate to = '/login' /> 
  )
}
