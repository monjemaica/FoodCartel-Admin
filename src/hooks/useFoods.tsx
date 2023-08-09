import { CanceledError } from "axios";
import { useState, useEffect } from "react";

import foodService from "../service/foodService";
import { Food } from "../service/foodService";

const useFoods = () => {
  const [foods, setFoods] = useState<Food[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {

    setIsLoading(true);

    const { request, cancel } = foodService.getAll<Food>()
    request.then((res) => {
      setFoods(res.data);
      setIsLoading(false);
    })
      .catch(err => {
        if (err instanceof CanceledError) return;
        setError(err.message)
        setIsLoading(false);
      })

    return () => cancel();
  }, [])

  return { foods, currentPage, error, isLoading, setFoods, setError, setCurrentPage };
}
export default useFoods;