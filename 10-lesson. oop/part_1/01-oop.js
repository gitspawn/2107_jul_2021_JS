// ООП - оъектно ориантированное программирование
// ООП - оъектно ориантированный подход
// ООП - оъектно ориантированный парадигма

// Процедурный стиль
let salary = 15000;
let overTime = 20;
let rate = 50;

function paySalary(salary, rate, overTime) {
    return (salary + overTime) * rate;
}

let vova = {
    name: "Vova",
    salary: 17500,
    overTime: 0,
    paySalary(salary, rate, overTime) {
        return (this.salary + this.overTime) * this.rate;
    },
};

let sara = {
    name: "Sara",
    salary: 25500,
    overTime: 40,
    paySalary(salary, rate, overTime) {
        return (this.salary + this.overTime) * this.rate;
    },
};

let bob = {
    name: "Bob",
    salary: 35000,
    overTime: 15,
    paySalary(salary, rate, overTime) {
        return (this.salary + this.overTime) * this.rate;
    },
};

let mike = {
    ...vova,
    name: "Mike",
};

// ===============================

bob.name;
bob.salary;

bob["name"];

function getProp(obj, prop) {
    obj[prop];
}
