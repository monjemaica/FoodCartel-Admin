import { useEffect, useState } from 'react';

const useUser = () => {

    const [users, setUsers] = useState<any>([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {

        setIsLoading(true);

        const USER_STORAGE = localStorage.getItem("USERDATA");
        if(USER_STORAGE){
            setUsers(JSON.parse(USER_STORAGE))
        }
        setIsLoading(false);
    }, [])

    return { users, error, isLoading, setUsers, setError };
}

export default useUser;