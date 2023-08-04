import { CanceledError } from "axios";
import { useState, useEffect } from "react";

import foodService from "../service/foodService";
import { Food } from "../service/foodService";

const useFoods = () => {
    const [foods, setFoods] = useState<Food[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
  
  
    useEffect(() => {
  
      setIsLoading(true);
  
      const { request, cancel } = foodService.getAll<Food>()
      request.then((res) => {
        setFoods(res.data);
        setIsLoading(false);
        console.log(res.data);
      })
        .catch(err => {
          if (err instanceof CanceledError) return;
          setError(err.message)
          setIsLoading(false);
        })
  
      return () => cancel();
    }, [])
  
    return {foods, error, isLoading, setFoods, setError};
  }
export default useFoods;