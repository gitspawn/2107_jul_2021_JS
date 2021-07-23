// CRUD
// Simple shop

// ES6 simple naming
// let name = "Sara";
// let items = [
//     { id: 1, name: "apples", price: 35, amount: 500, category: "fruits" },
//     { id: 2, name: "potato", price: 15, amount: 750, category: "vegatables" },
//     { id: 3, name: "banaba", price: 28, amount: 150, category: "fruits" },
//     { id: 4, name: "tomatoes", price: 20, amount: 350, category: "vegatables" },
// ];

// let shop = {
//     name,
//     adress: "Kyiv",
//     items,
// };

// console.log(shop);

let items = [
    { id: 1, name: "apples", price: 35, amount: 500, category: "fruits" },
    { id: 2, name: "potato", price: 15, amount: 750, category: "vegatables" },
    { id: 3, name: "banana", price: 28, amount: 150, category: "fruits" },
    { id: 4, name: "tomatoes", price: 20, amount: 350, category: "vegatables" },
];

let shop = {
    name: "Vova's",
    adress: "Kyiv",
    items: items,

    showItems() {
        // console.log(this.items);
        for (let item of this.items) {
            let { id, name, price, amount, category } = item;
            // console.log(`id-${item.id}, name- ${item.name}`)
            console.log(
                `id-${id}, name-${name}, price-${price}, amount-${amount}, category-${category}`
            );
        }
    },

    // addItem(newItem) {
    //     // this.items.push(newItem);
    //     // this.items = [...this.items, newItem];
    // },

    addItem({ id, name, price, amount, category }) {
        let item = {
            id,
            name,
            price,
            amount,
            category,
        };
        this.items.push(item);
    },

    updateItem(productName, newName) {
        for (let item of this.items) {
            if (item.name === productName) {
                item.name = newName;
            } else {
                console.log("Не нашли");
            }
        }
    },

    // removeItem(productName) {
    //     for (let item of this.items) {
    //         if (item.name === productName) {
    //             let index = this.items.indexOf(item);
    //             // console.log(index);
    //             this.items.splice(index, 1);
    //         }
    //     }
    // },

    removeItem(productName) {
        let itemsLength = this.items.length;
        for (let i = 0; i < itemsLength; i += 1) {
            // console.log(this.items[i].name);
            if (productName === this.items[i].name) {
                console.log("Нашли");
                this.items.splice(i, 1);
                break;
            } else {
                console.log("Не нашли");
            }
        }
    },
};

let kiwi = { id: 5, name: "kiwi", price: 40, amount: 100, category: "fruits" };

// let { id, name, price, amount, category } = kiwi;

// shop.addItem(kiwi);
// shop.updateItem("apples",  "goldApples");
// shop.updateItem("banana", "bananaSuper");
shop.removeItem("pizza");

shop.showItems();

// CRUD;
