import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import userService, { User } from "../service/userService";

const useUsers = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPagesize] = useState(10);
    useEffect(() => {

        setIsLoading(true);

        const { request, cancel } = userService.getAll<User>()
        request.then((res) => {
            setUsers(res.data);
            setIsLoading(false);
        })
            .catch(err => {
                if (err instanceof CanceledError) return;
                setError(err.message)
                setIsLoading(false);
            })

        return () => cancel();
    }, [])

    return { users, setUsers, error, setError, isLoading, setIsLoading, currentPage, setCurrentPage, pageSize, setPagesize };
}

export default useUsers;