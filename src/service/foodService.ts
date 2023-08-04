import create from "./http-service";


export interface Food{
    _id: string
   name: string
   stocks: number
   price: number
   img: string
   isDeleted: boolean
}

export default create('/admin/foods')