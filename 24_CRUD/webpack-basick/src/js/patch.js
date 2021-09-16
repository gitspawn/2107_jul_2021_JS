// - Update (ID)
//     Методы PUT и PATCH
//     Тело
//     Заголовки
//     Ответ

function updateByID(URL, bookToUpdate, bookID) {
    let options = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(bookToUpdate),
    };

    return fetch(URL + "/" + bookID, options).then((res) => res.json());
}

let bookToUpdate = {
    title: "TypeScript",
    author: "Sara Smith",
};

let URL = "http://localhost:4040/books";
updateByID(URL, bookToUpdate, 4);
