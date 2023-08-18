import { ReactNode, createContext, useContext, useMemo, useEffect } from 'react';
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom';
import authService from '../service/authService';


interface Admin {
    email: string,
    password: string
}

interface Props {
    admin: Admin
}

interface UserAdmin {
    children: ReactNode
}

const UserContext = createContext<null | any>(null);

export const UserProvider = ({ children }: UserAdmin) => {
    const navigate = useNavigate();
    const [cookies, setCookies, removeCookie] = useCookies()

    const login = (admin: Props) => {
        authService.create(admin).then((res) => {
            localStorage.setItem('USERDATA', JSON.stringify(res.data.data));
            navigate("/home");
        })
            .catch(err => console.log(err.response.data));
    };

    const logout = () => {
        ['COOKI3-AUTH', 'USERDATA'].forEach(obj => removeCookie(obj));
        navigate('/login');
    };

    

    const value = useMemo(
        () => ({
            cookies,
            login,
            logout
        }),
        [cookies]
    );

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
};

export const useAuth = () => {
    return useContext(UserContext)
};