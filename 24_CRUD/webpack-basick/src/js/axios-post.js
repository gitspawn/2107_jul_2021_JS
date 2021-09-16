import axios from "axios";
let URL = "http://localhost:4040/books";

let newBook = {
    name: "Vova",
    title: "JS Helper",
};

axios
    .post(URL, newBook)
    .then((res) => res.data)
    .then((book) => console.log(book));
