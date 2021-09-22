// let re = /hello/;
// console.log(re);
// console.log(typeof re);
// console.log(re instanceof RegExp);

// RegExp methods
// ===============================
// exec() arr ot null

// let result = re.exec("is hello world");
// console.log(result);

// test() true / false
// let result = re.test("is hello world");
// console.log(result);

// String
//============================
// match() arr ot null
// let str = "this is hello world";
// // let result = str.match(/hello/);
// let result = str.match(re);
// console.log(result);

// search(); index or -1
// let str = "hel world";
// let result = str.search(/hello/);
// let result = str.search(re);
// console.log(result);

// replace()
// let str = "hello world";
// let result = str.replace(/hello/, "pizza");
// let result = str.replace("hello", "pizza");
// let result = str.replace(re, 'pizza');
// console.log(result);

// Квантификаторы
// /\.m?js$/
// /\.css$/i,
// /\.s[ac]ss$/i,
// /\.hbs$/,
// let re = /hello/i;
// let re = /hello/gi;
// let re = /^hello/i;
// let re = /hello$/i;
// let re = /h.llo/i;
// let re = /h*llo/i;
// let re = /gra?e?y/i;
// let re = /\.png./i;
// let re = /\.css/i;
// let re = /\.s[ac]ss$/i;
// let re = /[5-9]/i;
// let re = /[a-zA-Z]/;
// let re = /\w/;
// let re = /\d/;
// let re = /\D/;
let re = /\W/;

// grey
// gray

let result = re.test("@");
console.log(result);

// *.jpeg
