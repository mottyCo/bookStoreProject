import { BooksCategories } from "./booksCategories"

interface Ibook {
    name: string,
    price: number,
    author: string,
    imageUrl: string,
    category: BooksCategories,
}

export class Book implements Ibook{
    name!: string
    price!: number
    author!: string
    imageUrl!: string
    category!: BooksCategories
    constructor(name : string, price : number, author: string, imageUrl : string, category: BooksCategories){
        this.name = name;
        this.price = price;
        this.author = author;
        this.imageUrl = imageUrl;
        this.category = category;
    }
}