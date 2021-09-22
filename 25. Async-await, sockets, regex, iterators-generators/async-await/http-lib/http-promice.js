// axios.get()
// axios.post()

//  GET
//  POST
//  PUT (PATACH)
//  DELETE

class HTTP {
    get(url, options = {}) {
        return new Promise((resolve, reject) => {
            return fetch(url, options)
                .then((res) => res.json())
                .then((data) => resolve(data))
                .catch((err) => reject(err));
        });
    }

    post(url, data) {
        let options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        };
        return new Promise((resolve, reject) => {
            return fetch(url, options)
                .then((res) => res.json())
                .then((data) => resolve(data))
                .catch((err) => reject(err));
        });
    }

    patch(url, data, id) {
        let options = {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        };
        return new Promise((resolve, reject) => {
            return fetch(url + "/" + id, options)
                .then((res) => res.json())
                .then((data) => resolve(data))
                .catch((err) => reject(err));
        });
    }

    delete(url, id) {
        let options = {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
        };
        return new Promise((resolve, reject) => {
            return fetch(url + "/" + id, options)
                .then((res) => res.json())
                .then((data) => resolve(data))
                .catch((err) => reject(err));
        });
    }
}

let http = new HTTP();

//GET
// http.get("http://localhost:3000/users").then((users) => console.log(users));

// POST
// let mike = {
//     name: "Mike",
//     email: "Mike@i.ua",
// };
// http.post("http://localhost:3000/users", mike);

// PATCH
// let mike = {
//     name: "Michael Jackson",
// };
// http.patch("http://localhost:3000/users", mike, 4);

// DELETE
// http.delete("http://localhost:3000/users", 4);

// http.get("http://localhost:3000/users").then((users) => console.log(users));
