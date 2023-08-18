import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import orderService, { Order } from "../service/orderService";

const useOrders = () => {
    const [orders, setOrders] = useState<Order[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPagesize] = useState(10);
    useEffect(() => {

        setIsLoading(true);

        const { request, cancel } = orderService.getAll<Order>()
        request.then((res) => {
            setOrders(res.data);
            setIsLoading(false);
        })
            .catch(err => {
                if (err instanceof CanceledError) return;
                setError(err.message)
                setIsLoading(false);
            })

        return () => cancel();
    }, [])

    return { orders, setOrders, error, setError, isLoading, setIsLoading, currentPage, setCurrentPage, pageSize, setPagesize };
}

export default useOrders;