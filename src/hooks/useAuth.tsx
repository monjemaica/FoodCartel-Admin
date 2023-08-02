import { ReactNode, createContext, useContext, useMemo } from 'react';
import { useCookies } from 'react-cookie';
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

interface Cookies{
    cookies: any 
    login: (e:any) => any
    logout: (e:any) => any
}

const UserContext = createContext<Cookies | null>(null);

export const UserProvider = ({ children }: UserAdmin) => {
    const navigate = useNavigate();
    const [cookies, setCookies, removeCookie] = useCookies();

    const login = async (admin: Props) => {
        authService.create(admin).then((res) => {
            setCookies('token', res.data.data.authentication.sessionToken);
            setCookies('USERDATA', res.data.data);
            navigate("/");
        })
            .catch(err => console.log(err.response.data));

    };

    const logout = () => {
        ['token', 'name'].forEach(obj => removeCookie(obj)); // remove data save in cookies
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