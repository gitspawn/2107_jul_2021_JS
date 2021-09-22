// async / await

// async function sum(){
//     await
// }
// let sum = async function(){
//     await
// }
// let sum = async ()=>{
//     await
// }

// let btn = document.querySelector('.btn')

// btn.addEventListener('click', async ()=>{
//     await
// })

// function getAlbums() {
//     return fetch("https://jsonplaceholder.typicode.com/albums")
//         .then((res) => res.json())
//         .catch((err) => console.log(err));
// }

// getAlbums().then((albums) => console.log(albums));

// async / await

// async function getAlbumsAsync() {
//     let response = await fetch("https://jsonplaceholder.typicode.com/albums");
//     let albums = await response.json();
//     // console.log(albums);
//     return albums;
// }

// let albums = getAlbumsAsync().then((albums) => console.log(albums));
// console.log(albums);

// =======================================================
let delay = (time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(time);
        }, time);
    });
};

// delay(1500).then((deley) => {
//     console.log(deley);
// });

// ==========================================
// async function fetchData(url) {
//     await delay(1000);
//     console.log("Hello");
//     let response = await fetch(url);
//     let data = await response.json();
//     console.log(data);

//     console.log("Vova");
//     // return data;
// }

// let url = "https://jsonplaceholder.typicode.com/users";

// fetchData(url);
// // fetchData(url).then((data) => console.log(data));

// =========================================================
// async function fetchData(url) {
//     await delay(1000);
//     console.log("Hello");
//     let response = await fetch(url);
//     let data = await response.json();
//     // console.log(data);

//     console.log("Vova");
//     return data;
// }

// let url = "https://jsonplaceholder.typicode.com/users";

// fetchData(url);
// fetchData(url).then((data) => console.log(data));

// (function(){})()

// ====================================
// (async () => {
//     let users = await fetchData(url);
//     console.log(users);
// })(url);

// =================================
// let getUsers = async () => {
//     let users = await fetchData(url);
//     console.log(users);
// };

// getUsers();

// ===================================
// try...catch

// let userName = "Vova";
// console.log("Hello");
// console.log(userName);
// console.log("Pizza");

// try {
//     console.log("Hello");
//     console.log(userName);
// } catch (error) {
//     throw new Error("No userName");
//     console.log(error);
// }

// console.log("Pizza");

// async/await error handling

// ==========================
console.log("Before  async code");

async function fetchData(url) {
    try {
        await delay(1000);
        console.log("Hello");
        let response = await fetch(url);
        let data = await response.json();
        console.log("Vova");
        return data;
    } catch (err) {
        console.log(err);
    }
}

console.log("After async code");

let url = "https://jsonplaceholder.typicode.com/users";

let getUsers = async () => {
    let users = await fetchData(url);
    console.log(users);
};

getUsers();
