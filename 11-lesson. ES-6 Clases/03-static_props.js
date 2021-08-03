// Static
// min - static method
// let minNumber = Math.min(5, 20, 3, 10);

// console.log(minNumber instanceof Math);

// let timestamp = Date.now();
// console.log(timestamp);

// let date = new Date.now();
// console.log(date);

class Calculator {
    // Statis Property
    static PI = 3.14;

    static min(a, b) {
        return a > b ? b : a;
    }

    static sum(x, y) {
        return x + y;
    }

    static mult(x, y) {
        return x * y;
    }
}

// console.log(Calculator.PI);
// console.log(Calculator.min(100, 50));

console.log(Calculator.sum(5, 25));
console.log(Calculator.mult(5, 10));
