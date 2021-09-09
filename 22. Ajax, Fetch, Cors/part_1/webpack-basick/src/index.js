import fetchNews from "./js/fetchNews";
import createMarkup from "./js/markup";

fetchNews("cat", 1).then((data) => {
    console.log(data);
    createMarkup(data);
});
