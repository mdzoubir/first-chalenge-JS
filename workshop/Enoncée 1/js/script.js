var favoriteBooks = ["red", "black", "white"];

function addFavoriteBook(bookName) {

    var book = favoriteBooks.includes("Great");
    console.log(book);
    if (book !== true) {
        favoriteBooks.push("Great")
    } else {
        console.log("it's aready exist");

    }
    console.log(favoriteBooks);

}
addFavoriteBook();

function printFavoriteBooks() {
    var number = favoriteBooks.length;

    console.log("livers favoris : " + favoriteBooks[0])
    for (const element of favoriteBooks) {
        console.log(favoriteBooks.length + " " + element);
    }
    for (let y = 0; y < favoriteBooks.length; y++) {
        console.log(y + " " + favoriteBooks[y])
    }
}


printFavoriteBooks();