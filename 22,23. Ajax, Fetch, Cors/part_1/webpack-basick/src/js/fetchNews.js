function fetchNews(search, pageNumber) {
    const API_KEY = "8bc2be7fce9f45c3be5446f60af3b87c";
    let URL = `https://newsapi.org/v2/everything?q=${search}&page=${pageNumber}`;

    let options = {
        method: "GET",
        headers: {
            Authorization: API_KEY,
        },
    };

    return fetch(URL, options)
        .then((res) => res.json())
        .then((news) => {
            if (news.status === "ok") {
                // console.log(news.articles);
                return news.articles;
            }
        })
        .catch((err) => {
            console.log(err);
        });
}

export default fetchNews;
