var FavoritesBooks = ["red", "black", "white"];
class Bookshelf {
    constructor() {
        this.addFavoriteBook();
        this.printFavoritBooks();
    }
    addFavoriteBook(bookName) {
        let recherch = FavoritesBooks.includes("Great");

        if (!recherch === true) {
            FavoritesBooks.push("Graet");
            console.log(recherch)
            console.log(FavoritesBooks)
        } else {
            console.log("already exists");
        }
    }
    printFavoritBooks() {
        console.log("livers favoris : " + FavoritesBooks[1]);
        console.log(FavoritesBooks.length);
        for (let bookName of FavoritesBooks) {
            console.log(bookName)
        }

    }
}
const sss = new Bookshelf();