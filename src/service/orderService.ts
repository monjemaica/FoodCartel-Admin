import { Food } from "./foodService";
import create from "./http-service";


export interface Order{
    _id: string
   user_id: string
   items: Food[]
   total_amount: number
   total_qty: number
   status: string
   date_created: string
}

export default create('/admin/orders')