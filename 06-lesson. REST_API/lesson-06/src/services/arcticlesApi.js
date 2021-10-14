import axios from "axios";

function fetchArticlesWithQuery(searchQuery = "react", page = 0) {
    return axios
        .get(
            `http://hn.algolia.com/api/v1/search?query=${searchQuery}&page=${page}&hitsPerPage=10`
        )
        .then((response) => response.data.hits);
}

function fetchArticlesWithAutor() {
    console.log("fetchArticlesWithAutor");
}

export default {
    fetchArticlesWithQuery,
    fetchArticlesWithAutor,
};
