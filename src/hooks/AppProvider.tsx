import { ReactNode } from 'react';
import { UserProvider } from "./useAuth";

interface Props {
    children: ReactNode
}

const AppProvider = ({ children }: Props) => {
    return (
        <>
            <UserProvider>{children}</UserProvider>
        </>);
}

export default AppProvider;