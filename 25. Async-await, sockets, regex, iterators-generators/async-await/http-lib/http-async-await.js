class HTTP {
    async get(url, options = {}) {
        try {
            let response = await fetch(url, options);
            let responseData = await response.json();
            return responseData;
        } catch (error) {
            return error;
        }
    }

    async post(url, data) {
        let options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        };
        try {
            let response = await fetch(url, options);
            let responseData = await response.json();
            return responseData;
        } catch (error) {
            return error;
        }
    }

    async patch(url, data, id) {
        let options = {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        };
        try {
            let response = await fetch(url + "/" + id, options);
            let responseData = await response.json();
            return responseData;
        } catch (error) {
            return error;
        }
    }

    async delete(url, id) {
        let options = {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
        };
        try {
            let response = await fetch(url + "/" + id, options);
            let responseData = await response.json();
            return responseData;
        } catch (error) {
            return error;
        }
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
http.delete("http://localhost:3000/users", 4);

http.get("http://localhost:3000/users").then((users) => console.log(users));
