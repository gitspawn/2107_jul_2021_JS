// https://httpstatuses.com/

// Ответы сервера
// 100 - информационные
// 200 - успех
// 300 - редиректы
// 400 - ошибки запроса
// 500 - ошибки сервера

// https://jsonplaceholder.typicode.com/posts/50
// https - протокол передачи данных
// jsonplaceholder.typicode.com - доменное имя
// posts/50 - endpoint (конечная точка)

// https://www.youtube.com/watch/cartoon?v=0uQwp2qn9cQ
// watch статический параметр
// cartoon инимечкий параметр
// ?v=0uQwp2qn9cQ&name=vova&age=30 строка запроса

// URI - https://www.youtube.com/watch/cartoon?v=0uQwp2qn9cQ
// URL - https://www.youtube.com/
// URN - /watch/cartoon?v=0uQwp2qn9cQ

// Chome JSON viewer
// https://chrome.google.com/webstore/detail/json-viewer/gbmdgpbipfallnflgajpaliibnhdgobh

// fetch();

// fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((response) => {
//         // console.log(typeof response);
//         // console.log(response.json());
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//     });

// =================================================
// Доступ к данным только внутри промиса
// let usersArr = [];

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((res) => res.json())
//     .then((users) => {
//         console.log("users", users);
//         usersArr = users;
//         console.log("usersArr", usersArr);
//     });

// console.log("51 usersArr", usersArr);

// ==========================================
// https://hn.algolia.com/api

// fetch("http://hn.algolia.com/api/v1/search?query=react&tags=comment")
//     .then((res) => res.json())
//     // .then((data) => console.log(data.hits));
//     .then(({ hits }) => console.log(hits));

// Relicensing React, Jest, Flow, and Immutable.js
//Italy is extending its coronavirus quarantine measures to the

// ===========================================================
// https://newsapi.org
// message: "Your API key is missing. Append this to the URL with the apiKey param, or use the x-api-key HTTP header."

// const API_KEY = "8bc2be7fce9f45c3be5446f60af3b87c";
// let URL = `https://newsapi.org/v2/everything?q=coronavirus&page=2&apiKey=${API_KEY}`;

// fetch(URL)
//     .then((res) => res.json())
//     .then((news) => {
//         // console.log(news.status);
//         if (news.status === "ok") {
//             console.log(news.articles);
//         }
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// ========================================

// const API_KEY = "8bc2be7fce9f45c3be5446f60af3b87c";
// let URL = `https://newsapi.org/v2/everything?q=coronavirus&page=1`;

// let options = {
//     method: "GET",
//     headers: {
//         // "X-Api-Key": API_KEY,
//         Authorization: API_KEY,

//         //  CORS
//         // "Content-type": "application/json",
//         // Access to fetch at 'https://newsapi.org/v2/everything?q=coronavirus&page=1' from origin 'http://127.0.0.1:5500' has been blocked by CORS policy: Request header field content-type is not allowed by Access-Control-Allow-Headers in preflight response.
//     },
// };

// fetch(URL, options)
//     .then((res) => res.json())
//     .then((news) => {
//         // console.log(news.status);
//         if (news.status === "ok") {
//             console.log(news.articles);
//         }
//     })
//     .catch((err) => {
//         console.log(err);
//     });

//==========================================================
// let URL =
//     "https://newsapi.org/v2/top-headlines?country=ua&category=sports&apiKey=8bc2be7fce9f45c3be5446f60af3b87c";

// fetch(URL)
//     .then((res) => res.json())
//     .then((news) => {
//         if (news.status === "ok") {
//             console.log(news.articles);
//         }
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// ===============================================================================================
// https://pixabay.com/api/docs/

/** 
 * collections: 1432
comments: 250
downloads: 355701
id: 801826
imageHeight: 3301
imageSize: 3959900
imageWidth: 4951
largeImageURL: "https://pixabay.com/get/g03a1c335b18f28160de0c2cc39917abd637cf9a04c671a5189c70410b72d23d0fb735ff33b8e0671dbb7ba7a47cdf1c0e99681fbbbf34f0e9c4152151590d94b_1280.jpg"
likes: 1631
pageURL: "https://pixabay.com/photos/pug-dog-blanket-dog-face-801826/"
previewHeight: 99
previewURL: "https://cdn.pixabay.com/photo/2015/06/08/15/02/pug-801826_150.jpg"
previewWidth: 150
tags: "pug, dog, blanket"
type: "photo"
user: "Free-Photos"
userImageURL: "https://cdn.pixabay.com/user/2014/05/07/00-10-34-2_250x250.jpg"
user_id: 242387
views: 766983
webformatHeight: 426
webformatURL: "https://pixabay.com/get/ge66a439e1ef2450c5be9a790d93b7572e5ce683cd7cfcdda824e127b41a11291974ebe11dcabd0f0788801c312aa4317_640.jpg"
webformatWidth: 640
*/

const API_KEY = "16847035-2769300c76d48561bbb060e95";
let options = {
    method: "GET",
    headers: {
        Authorization: API_KEY,
        "Content-type": "application/json",
    },
};

fetch(
    `https://pixabay.com/api/?key=${API_KEY}&q=sparrow&image_type=photo&pretty=true&category=animals`,
    options
)
    .then((res) => res.json())
    .then(({ hits }) => {
        genderGallery(hits);
    })
    .catch((err) => console.log(err));

let root = document.querySelector("#root");

function createImage(imgObj) {
    return `<img src=${imgObj.webformatURL} alt=${imgObj.tags}/>`;
}

function genderGallery(imagesArr) {
    let markup = imagesArr.reduce((acc, elem) => {
        return createImage(elem) + acc;
    }, "");

    root.insertAdjacentHTML("beforeend", markup);
}
