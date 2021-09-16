// - Delete (ID)
//     Метод DELETE
//     Ответ

function removeBook(URL, bookID) {
    let options = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
    };
    return fetch(URL + "/" + bookID, options)
        .then((res) => res.json())
        .catch((err) => console.log(err));
}

let URL = "http://localhost:4040/books";
removeBook(URL, 5);
