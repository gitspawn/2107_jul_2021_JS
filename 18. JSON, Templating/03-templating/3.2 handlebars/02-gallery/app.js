let galleryItems = [
    {
        img: "https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        text: "pizza",
    },
    {
        img: "https://images.pexels.com/photos/604660/pexels-photo-604660.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        text: "kebab",
    },
    {
        img: "https://media.istockphoto.com/photos/american-food-picture-id1005290646?s=612x612",
        text: "gamburger",
    },
];

let galleryRef = document.querySelector("#gallery").innerHTML;
let divRef = document.querySelector("#root");
// console.log(galleryRef);
// console.log(divRef);

let tempalteScript = Handlebars.compile(galleryRef);
let markup = tempalteScript(galleryItems);
divRef.innerHTML = markup;
