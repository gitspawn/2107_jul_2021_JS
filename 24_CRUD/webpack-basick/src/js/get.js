// Read
// Метод GET
// Ответ от сервера

let URL = "http://localhost:4040/books";

function fetchBooks(URL) {
    return fetch(URL, {})
        .then((res) => res.json())
        .catch((err) => console.log(err));
}

function fetchBookById(URL, bookID) {
    return fetch(URL + "/" + bookID, {})
        .then((res) => res.json())
        .catch((err) => console.log(err));
}

fetchBooks(URL).then((books) => dispalayBooks(books));
fetchBookById(URL, 3).then((book) => dispalayBooks(book));

function dispalayBooks(books) {
    console.log(books);
}
