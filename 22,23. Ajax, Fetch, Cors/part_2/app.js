/*
Thank you for registering with the open platform.
A new key has been created for you: 3534a47c-f615-488a-ac2b-1cbb3a5481ee
You can try this key by accessing https://content.guardianapis.com/search?api-key=3534a47c-f615-488a-ac2b-1cbb3a5481ee in your browser.
*/

// https://open-platform.theguardian.com/documentation/
// Example: https://content.guardianapis.com/search?page=2&q=debate&api-key=test

/**
 
id: "world/2021/sep/14/putin-self-isolates-coronavirus-found-entourage"
isHosted: false
pillarId: "pillar/news"
pillarName: "News"
sectionId: "world"
sectionName: "World news"
type: "article"
webPublicationDate: "2021-09-14T11:01:00Z"
webTitle: "Putin self-isolates after coronavirus found in entourage"
webUrl: "https://www.th
 * 
 */

class News {
    constructor(uri) {
        this.uri = uri;
        this.prevButton = document.querySelector("#prev");
        this.nextButton = document.querySelector("#next");
        this.input = document.querySelector("input[type='number']");
        this.inputSearch = document.querySelector("form");
        this.inputValue = "";
        this.span = document.querySelector("span");
        this.list = document.querySelector(".list");
        this.pageCounter = 1;
    }
    // Public class field
    // init = () => {
    //     console.log("Start News");
    // };

    // Public class field
    // vova = "Vova";

    fetchNews = () => {
        let query = `&q=${this.inputValue}`;
        let url = this.uri + this.pageCounter + query;

        fetch(url, {})
            .then((response) => response.json())
            .then((data) => {
                if (data.response.status === "ok") {
                    if (data.response.status === "ok") {
                        this.renderNews(data.response.results);
                        this.renderPagintion(data.response);
                    }
                }
            })
            .catch((err) => {
                this.renderError(err);
            });
    };

    renderNews(arrResults) {
        this.list.innerHTML = "";
        let listCollection = arrResults.map(
            ({ webUrl, webTitle, webPublicationDate }) => {
                let li = document.createElement("li");
                let a = document.createElement("a");
                let p = document.createElement("p");

                a.href = webUrl;
                a.target = "_blank";
                a.textContent = webTitle;

                p.textContent = "Date: " + webPublicationDate;

                a.append(p);
                li.append(a);

                return li;
            }
        );

        this.list.append(...listCollection);
    }

    renderPagintion(response) {
        this.input.value = response.currentPage;
        this.span.textContent = response.pages;
    }

    renderError(err) {
        console.log(err);
    }

    onPrevBtnClick = () => {
        console.log("Prev");
        this.pageCounter -= 1;
        this.input.value = this.pageCounter;
        this.fetchNews();
    };

    onNextBtnClick = () => {
        console.log("Next");
        this.pageCounter += 1;
        this.input.value = this.pageCounter;
        this.fetchNews();
    };

    onInputChange = (event) => {
        let inputValue = event.target.value;
        this.pageCounter = Number(inputValue);
        if (inputValue > 0) {
            this.fetchNews();
        }
    };

    onSearchChange = (event) => {
        event.preventDefault();
        // Длинная срока чтоб было понятно откуда берется
        console.log(event.target.elements);
        this.inputValue = event.target.elements.text.value.toLowerCase();
        this.fetchNews();
    };

    loadListeners = () => {
        window.addEventListener("load", this.fetchNews);
        this.prevButton.addEventListener("click", this.onPrevBtnClick);
        this.nextButton.addEventListener("click", this.onNextBtnClick);
        this.input.addEventListener("input", this.onInputChange);
        this.inputSearch.addEventListener("submit", this.onSearchChange);
    };

    init = () => {
        this.loadListeners();
    };
}

const API_KEY = "3534a47c-f615-488a-ac2b-1cbb3a5481ee";
let URI = `https://content.guardianapis.com/search?q=&api-key=${API_KEY}&page=`;

new News(URI).init();
// new News(URI).fetchNews();
// console.log(new News().vova);

// ====================================
// Потеря контекста фиксим через bind
// class News {
//     constructor(uri) {
//         this.uri = uri;
//         this.prevButton = document.querySelector("#prev");
//         this.nextButton = document.querySelector("#next");
//         this.input = document.querySelector("input");
//         this.span = document.querySelector("span");
//         this.list = document.querySelector(".list");
//     }

//     fetchNews() {
//         fetch(this.uri, {})
//             .then((response) => response.json())
//             .then((data) => console.log(data));
//     }
//     loadListeners() {
//         window.addEventListener("load", this.fetchNews.bind(this));
//     }
//     init() {
//         this.loadListeners();
//     }
// }
// ================================================

// const API_KEY = "3534a47c-f615-488a-ac2b-1cbb3a5481ee";
// let URI_EXAMPLE = `https://content.guardianapis.com/search?page=1&q=coronavirus&api-key=${API_KEY}`;

// fetch(URI_EXAMPLE, {})
//     .then((response) => response.json())
//     .then((data) => console.log(data));
