import { Book } from "./bookInterface"

interface IUser{
    firstName : string,
    lastName : string,
    email : string,
    address : string,
    password : string,
    favoriteBooksList : Book[]
    cart : Book[]
}

export class User implements IUser{
    firstName! : string
    lastName! : string
    email! : string
    address! : string
    password! : string
    favoriteBooksList! : Book[]
    cart! : Book[]
    constructor(firstName : string,lastName : string,email : string,address : string,  password : string,){
        this.firstName = firstName
        this.lastName = lastName
        this.email = email
        this.address = address
        this.password = password
        this.favoriteBooksList = []
        this.cart = []
    }
}