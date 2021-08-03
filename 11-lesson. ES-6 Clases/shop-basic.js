//  Shop Class

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
        for (let item of this.items) {
            let { id, name, price, amount, category } = item;

            console.log(
                `id-${id}, name-${name}, price-${price}, amount-${amount}, category-${category}`
            );
        }
    },

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

    removeItem(productName) {
        for (let item of this.items) {
            if (item.name === productName) {
                let index = this.items.indexOf(item);
                this.items.splice(index, 1);
            }
        }
    },
};

let kiwi = { id: 5, name: "kiwi", price: 40, amount: 100, category: "fruits" };

shop.removeItem("pizza");
shop.showItems();
