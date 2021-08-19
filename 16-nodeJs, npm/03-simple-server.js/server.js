let express = require("express");
let app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.send("Hello from NodeJs");
});

app.get("/about", (req, res) => {
    res.send("About page");
});

app.get("/contacts", (req, res) => {
    res.send("Contacts page");
});

let friends = [
    { id: 1, name: "Vova", age: 20 },
    { id: 2, name: "Sara", age: 34 },
    { id: 3, name: "Bob", age: 23 },
];

app.get("/friends", (req, res) => {
    // res.json({ id: 2, name: "Vova", age: 20 });
    res.status(200).json(friends);
});

let PORT = 5001;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});
