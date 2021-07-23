// let fruits = ["apple", "banana", "pear", "melon"];
// let users = ["vova", "sara", "bob", "mike"];
// let numbers = [10, 20, 30, 40, 50];

// let len = fruits.length;
// for (let i = 0; i < len; i += 1) {
//     console.log(fruits[i]);
// }

// for (let i = 0; i < users.length; i += 1) {
//     console.log(users[i]);
// }

// function arrayItrerate(arr) {
//     let len = arr.length;
//     for (let i = 0; i < len; i += 1) {
//         console.log(arr[i]);
//     }
// }

// function arrayItrerate(arr) {
//     for (let elem of arr) {
//         console.log(elem);
//     }
// }

// arrayItrerate(fruits);
// arrayItrerate(users);
// arrayItrerate(numbers);

// Find in arr

// function findItem(arr, name) {
//     let nameToLower = name.toLowerCase();
//     // console.log(arr);
//     // console.log(name);

//     for (let user of arr) {
//         if (nameToLower === user) {
//             return "Нашли";
//         }
//     }
//     return "Не нашли";
// }
// let result = findItem(users, "saRa");
// console.log(result);

// function findFriend(arrayOfFriends, friendName) {
//     let friend = arrayOfFriends.includes(friendName);
//     return friend ? "Нашли" : "Не нашли";
// }

// function findFriend(arrayOfFriends, friendName) {
//     return arrayOfFriends.includes(friendName) ? "Нашли" : "Не нашли";
// }
// let result = findFriend(users, "vova");
// console.log(result);

//  5 + 5 + 5 // 15
//  5 + 5 = 10
//  10 + 5 = 15

let numbers = [1000, 100, 10, 20, 30, 40, 50];
let numbers2 = [30, 40, 50];

function getSmallNumber(arr) {
    let small = arr[0];

    for (let i = 0; i < arr.length; i += 1) {
        // console.log(arr[i]);

        if (arr[i] < small) {
            small = arr[i];
        }
    }

    return small;
}

let result = getSmallNumber(numbers);
console.log(result);
