import axios from "axios";
let URL = "http://localhost:4040/books";

axios
    .get(URL)
    .then((res) => console.log(res.data))
    .then((books) => console.log(books))
    .catch(function (error) {
        // handle error
        console.log(error);
    });
