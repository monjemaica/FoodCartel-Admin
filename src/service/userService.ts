import create from "./http-service";


interface Auth{
    password: string
    salt: string
    sessionToken:string
}

interface Address{
    street: string
    barangay: string
    city: string
}

export interface User<T>{
    _id: string
    email: string
    username: string
    contact: string
    role: Array<T>
    address: Address
    authentication: Auth
    isDeleted: Boolean
}

export default create('/admin/users')