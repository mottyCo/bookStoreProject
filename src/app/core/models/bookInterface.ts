import { BooksCategories } from "./booksCategories"

interface Ibook {
    name: string,
    price: number,
    author: string,
    imageUrl: string,
    category: BooksCategories,
    discountByPrecent: number | null,
}

export class Book implements Ibook{
    name!: string
    price!: number
    author!: string
    imageUrl!: string
    category!: BooksCategories
    discountByPrecent!: number | null
    constructor(name : string, price : number, author: string, imageUrl : string, category: BooksCategories, discountByPrecent?: number | null){
        this.name = name;
        this.price = price;
        this.author = author;
        this.imageUrl = imageUrl;
        this.category = category;
        if(discountByPrecent != null)
            this.discountByPrecent = discountByPrecent;
        else
            this.discountByPrecent = null
    }
}
