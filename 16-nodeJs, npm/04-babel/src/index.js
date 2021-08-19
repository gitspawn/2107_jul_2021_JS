//  Shop Class

function generateId() {
    return Math.random().toString().slice(2);
}

class Shop {
    #items; // private field

    constructor(name, adress, items) {
        this.name = name;
        this.adress = adress;
        this.#items = items;
    }

    showItems() {
        for (let item of this.#items) {
            let { id, name, price, amount, category } = item;

            console.log(
                `id-${id}, name-${name}, price-${price}, amount-${amount}, category-${category}`
            );
        }
    }

    addItem({ name, price, amount, category }) {
        let item = {
            id: this.#generateId(),
            name,
            price,
            amount,
            category,
        };
        this.#items.push(item);
    }

    updateItem(productName, newName) {
        for (let item of this.#items) {
            if (item.name === productName) {
                item.name = newName;
            } else {
                console.log("Не нашли");
            }
        }
    }

    removeItem(productName) {
        for (let item of this.#items) {
            if (item.name === productName) {
                let index = this.#items.indexOf(item);
                this.#items.splice(index, 1);
            }
        }
    }

    // Private method
    #generateId() {
        return Math.random().toString().slice(2);
    }
}

let items = [
    { id: 1, name: "apples", price: 35, amount: 500, category: "fruits" },
    { id: 2, name: "potato", price: 15, amount: 750, category: "vegatables" },
    { id: 3, name: "banana", price: 28, amount: 150, category: "fruits" },
    { id: 4, name: "tomatoes", price: 20, amount: 350, category: "vegatables" },
];

let ATB = new Shop("ATB", "Kyiv", items);
// let Silpo = new Shop("Silpo", "Lviv", items);

let kiwi = {
    name: "kiwi",
    price: 40,
    amount: 100,
    category: "fruits",
};

let melon = {
    name: "melon",
    price: 35,
    amount: 600,
    category: "fruits",
};

ATB.addItem(melon);

ATB.showItems();
