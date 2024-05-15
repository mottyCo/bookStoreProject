import { Book } from "./bookInterface";

interface Icategory {
    name: string;
    books: Book[]
}

export class BooksCategories implements Icategory{
    name!: string;
    books!: Book[];
    constructor(name : string, books : Book[]){
        this.name = name
        this.books = books
    }
}