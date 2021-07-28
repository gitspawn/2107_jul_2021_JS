/*
const getCash = function (amount, balance) {
    if (amount === 0) {
        console.log("Введите сумму больше нуля");
    } else if (amount > balance) {
        console.log("Недостаточно средств на счету");
    } else {
        console.log("Средства сняты");
    }
};
*/

// Guard Clause

let getCash = function (amount, balance) {
    if (amount === 0) {
        console.log("Введите сумму больше нуля");
        return;
    }

    if (amount > balance) {
        console.log("Недостаточно средств на счету");
        return;
    }

    console.log("Средства сняты");
};

getCash(200, 400);
