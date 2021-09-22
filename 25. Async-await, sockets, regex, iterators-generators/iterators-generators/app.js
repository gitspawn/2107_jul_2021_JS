// Iterator

// let friendsArr = ["Vova", "Sara", "Mike"];

// function friendsIterator(friends) {
//     let nextIndex = 0;
//     return {
//         next: function () {
//             return nextIndex < friends.length
//                 ? { value: friends[nextIndex++], done: false }
//                 : { done: true };
//         },
//     };
// }

// let friends = friendsIterator(friendsArr);

// // console.log(friends);
// console.log(friends.next().value);
// console.log(friends.next().done);
// console.log(friends.next());
// console.log(friends.next());

// Generator
function* sayName(params) {
    yield [0, 1, 2, 3, 4];
    yield 100;
    yield "Sara";
}

let names = sayName();

console.log(names.next().value);
console.log(names.next().value);
console.log(names.next().value);
console.log(names.next().value);
