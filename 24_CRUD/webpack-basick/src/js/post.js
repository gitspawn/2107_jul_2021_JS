// - Create
// Метод POST
// Тело
// Заголовки
// Ответ

let URL = "http://localhost:4040/books";

function addBook(URL, newBook) {
    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(newBook),
    };

    return fetch(URL, options).then((res) => res.json());
}

let book = {
    title: "Java 8",
    author: "Кай Хорстман",
    genres: ["программироние"],
    rating: 9.5,
};

addBook(URL, book);
