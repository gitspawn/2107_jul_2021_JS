// _

// console.log(_);

// console.log(_.isArray([1, 2, 3, 4]));

// let arr = [1, 2, 3, 4];

// _.forEach(arr, (elem) => {
//     console.log(elem);
// });

// _.each(arr, (elem) => {
//     console.log(elem);
// });

// ===================================
// Uniq

// let arr = [
//     1,
//     2,
//     3,
//     4,
//     5,
//     100,
//     3,
//     5,
//     2,
//     3,
//     ,
//     4,
//     "hello",
//     "Vova",
//     "hello",
//     "pizza",
//     100,
// ];

// let uniqArr = _.uniq(arr);
// console.log(uniqArr);

// ============================
// map
// let arr = [1, 2, 3, 4];
// let arrMap = _.map(arr, (item) => {
//     return item * 2;
// });

// console.log(arrMap);

// let friends = [
//     {
//         id: 1,
//         name: "Vova",
//         age: 20,
//         budget: 2400,
//         isComplete: true,
//         likes: 500,
//     },
//     {
//         id: 2,
//         name: "Sara",
//         age: 25,
//         budget: 3500,
//         isComplete: false,
//         likes: 1500,
//     },
//     { id: 3, name: "Mike", age: 30, budget: 300, isComplete: true, likes: 35 },
//     { id: 4, name: "Bob", age: 18, budget: 200, isComplete: false, likes: 200 },
// ];

// let namesArr = _.map(friends, "name");
// console.log(namesArr);
// let budgetArr = _.map(friends, "budget");
// console.log(budgetArr);

// =============================
// filter
// let filteredArr = _.filter(friends, { name: "Sara" });
// let filteredArr = _.filter(friends, { id: 3 });

// console.log(filteredArr);

// =======================
// sortby, groupby
// let sordedByLikes = _.sortBy(friends, "likes");
// let sordedByLikes = _.sortBy(friends, "budget");

// let grouped = _.groupBy(friends, "name");
// console.log(grouped);

// let result = _.groupBy(["one", "two", "three"], "length");
// console.log(result);

// ==========================
// chunk
// let arr = [
//     1,
//     2,
//     3,
//     4,
//     5,
//     100,
//     3,
//     5,
//     2,
//     3,
//     4,
//     "hello",
//     "Vova",
//     "hello",
//     "pizza",
//     100,
// ];

// let result = _.chunk(arr, 5);
// console.log(result);

//=================================================
// size
let user = {
    id: 1,
    name: "Vova",
    name: "Vova",
    name: "Vova",
    age: 20,
    budget: 2400,
    isComplete: true,
    likes: 500,
    likes: 500,
    likes: 500,
    likes: 500,
};

// let sz = _.size(user);

let resultRange = _.range(5, 10);
// => [1, 2, 3, 4]
console.log(resultRange);
