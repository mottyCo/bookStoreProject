import { BooksCategories } from "../models/booksCategories";
import { Book } from "../models/bookInterface";

export class VirtualDB{
    categories = [
        new BooksCategories('category a', []),
        new BooksCategories('category b', []),
        new BooksCategories('category c', []),
        new BooksCategories('category d', []),
    ]
    books!: Book[]
    constructor(){
        this.books = [
            new Book('Beautiful Disaster', 90,'Jamie McGuire','none', this.categories[0]),
            new Book('Fifty Shades of Grey', 88,'E.L. James','none', this.categories[1]),
            new Book('Hopeless', 70,' Colleen Hoover','none', this.categories[2]),
            new Book('The Fault in Our Stars', 50,' John Green','none', this.categories[3]),
            new Book('Divergent', 64,' Veronica Roth','none', this.categories[0]),
            new Book('Slammed', 88,'Colleen Hoover ','none', this.categories[1]),
            new Book('Effortless', 100,' S.C. Stephens','none', this.categories[2]),
            new Book('Easy', 86,'Tammara Webber','none', this.categories[3]),
            new Book('Bared to You', 72,' Sylvia Day','none', this.categories[0]),
            new Book('Thoughtless', 66,'S.C. Stephens','none', this.categories[1]),
            new Book('The Hunger Games', 68,'Suzanne Collins','none', this.categories[2]),
            new Book('Obsidian', 70,' Jennifer L. Armentrout','none', this.categories[3]),
            new Book('The Edge of Never', 98,'J.A. Redmerski ','none', this.categories[0]),
            new Book('Fallen Too Far', 94 ,' Abbi Glines','none', this.categories[1]),
            new Book('Walking Disaster', 88,'Jamie McGuire ','none', this.categories[2]),
            new Book('City of Bones', 76,'Cassandra Clare','none', this.categories[3]),
            new Book('Clockwork Angel', 102,'Cassandra Clare','none', this.categories[0]),
            new Book('On Dublin Street', 98 ,'Samantha Young','none', this.categories[1]),
            new Book('Pride and Prejudice', 68,'Jane Austen','none', this.categories[2]),
            new Book('Anna and the French Kiss', 72 ,'Stephanie Perkins','none', this.categories[3]),
            new Book('Hush, Hush', 60 ,'Becca Fitzpatrick','none', this.categories[0]),
            new Book('Vampire Academy', 88,'Richelle Mead','none', this.categories[1]),
            new Book('Wallbanger', 64,'Alice Clayton','none', this.categories[2]),
            new Book('Fifty Shades Freed', 74 ,'E.L. James','none', this.categories[3]),
            new Book('Gabriel`s Inferno', 58,'Sylvain Reynard','none', this.categories[0]),
            new Book('Reflected in You', 82,'Sylvia Day','none', this.categories[1]),
            // new Book('', 0,'','none', this.categories[]),
            // new Book('', 0,'','none', this.categories[]),
            // new Book('', 0,'','none', this.categories[]),
            // new Book('', 0,'','none', this.categories[]),
            // new Book('', 0,'','none', this.categories[]),
            // new Book('', 0,'','none', this.categories[]),
            // new Book('', 0,'','none', this.categories[]),
            // new Book('', 0,'','none', this.categories[]),
            // new Book('', 0,'','none', this.categories[]),
            // new Book('', 0,'','none', this.categories[]),
            // new Book('', 0,'','none', this.categories[]),
            // new Book('', 0,'','none', this.categories[]),
            // new Book('', 0,'','none', this.categories[]),
            // new Book('', 0,'','none', this.categories[]),
            // new Book('', 0,'','none', this.categories[]),
            // new Book('', 0,'','none', this.categories[]),
            // new Book('', 0,'','none', this.categories[]),
            // new Book('', 0,'','none', this.categories[]),
            // new Book('', 0,'','none', this.categories[]),
            // new Book('', 0,'','none', this.categories[]),
            // new Book('', 0,'','none', this.categories[]),
            // new Book('', 0,'','none', this.categories[]),
            // new Book('', 0,'','none', this.categories[]),
            // new Book('', 0,'','none', this.categories[]),
            // new Book('', 0,'','none', this.categories[]),
            // new Book('', 0,'','none', this.categories[]),
            // new Book('', 0,'','none', this.categories[]),
            // new Book('', 0,'','none', this.categories[]),
            // new Book('', 0,'','none', this.categories[]),
            // new Book('', 0,'','none', this.categories[]),
            // new Book('', 0,'','none', this.categories[]),
            // new Book('', 0,'','none', this.categories[]),
            // new Book('', 0,'','none', this.categories[]),
            // new Book('', 0,'','none', this.categories[]),
            // new Book('', 0,'','none', this.categories[]),
            // new Book('', 0,'','none', this.categories[]),
            // new Book('', 0,'','none', this.categories[]),
            // new Book('', 0,'','none', this.categories[]),
            // new Book('', 0,'','none', this.categories[]),
            // new Book('', 0,'','none', this.categories[]),
            // new Book('', 0,'','none', this.categories[]),
            // new Book('', 0,'','none', this.categories[]),
            // new Book('', 0,'','none', this.categories[]),
            // new Book('', 0,'','none', this.categories[]),
            // new Book('', 0,'','none', this.categories[]),
            // new Book('', 0,'','none', this.categories[]),
            // new Book('', 0,'','none', this.categories[]),
            // new Book('', 0,'','none', this.categories[]),
            // new Book('', 0,'','none', this.categories[]),
            // new Book('', 0,'','none', this.categories[]),
            // new Book('', 0,'','none', this.categories[]),
            // new Book('', 0,'','none', this.categories[]),
            // new Book('', 0,'','none', this.categories[]),
            // new Book('', 0,'','none', this.categories[]),
            // new Book('', 0,'','none', this.categories[]),
            // new Book('', 0,'','none', this.categories[]),
            // new Book('', 0,'','none', this.categories[]),
            // new Book('', 0,'','none', this.categories[]),
            // new Book('', 0,'','none', this.categories[]),
            // new Book('', 0,'','none', this.categories[]),
            // new Book('', 0,'','none', this.categories[]),
            // new Book('', 0,'','none', this.categories[]),
            // new Book('', 0,'','none', this.categories[]),
            // new Book('', 0,'','none', this.categories[]),
            // new Book('', 0,'','none', this.categories[]),

            

        ]
    }
    
    
}