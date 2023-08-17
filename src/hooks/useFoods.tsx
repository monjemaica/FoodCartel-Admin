import { CanceledError } from "axios";
import { useState, useEffect } from "react";

import foodService from "../service/foodService";
import { Food } from "../service/foodService";

const useFoods = () => {
  const [foods, setFoods] = useState<Food[]>([]);
  const [selectedFood, setSelectedFood] = useState<Food[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPagesize] = useState(10);


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

  return { foods,selectedFood, currentPage, pageSize, error, isLoading, setFoods, setSelectedFood, setError, setCurrentPage, setPagesize, setIsLoading};
}
export default useFoods;