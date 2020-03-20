var FavoritesBooks = ["red", "black", "white"];

function addFavoriteBook(bookName) {

    let recherch = FavoritesBooks.includes("Great");

    if (!recherch === true) {
        FavoritesBooks.push("Graet");
        console.log(recherch)
        console.log(FavoritesBooks)
    } else {
        console.log("already exists");
    }
}
addFavoriteBook();

function printFavoritBooks() {
    console.log("livers favoris : " + FavoritesBooks[1]);
    console.log(FavoritesBooks.length);
    for (let bookName of FavoritesBooks) {
        console.log(bookName)
    }

}
printFavoritBooks();