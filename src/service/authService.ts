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

export interface User{
    _id: string
    email: string
    username: string
    contact: string
    role: any[]
    address: Address
    authentication: Auth
    isDeleted: Boolean
}

export default create('/auth/login')