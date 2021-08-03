//  Shop Class

// class DispalayItems {
//     showItems(items) {
//         for (let item of items) {
//             let { id, name, price, amount, category } = item;

//             console.log(
//                 `id-${id}, name-${name}, price-${price}, amount-${amount}, category-${category}`
//             );
//         }
//     }
// }

// let displayItem = new DispalayItems();

class DispalayItems {
    static showItems(items) {
        for (let item of items) {
            let { id, name, price, amount, category } = item;

            console.log(
                `id-${id}, name-${name}, price-${price}, amount-${amount}, category-${category}`
            );
        }
    }
}

class ShopDataProcessing {
    addItem({ name, price, amount, category }) {
        let item = {
            name,
            price,
            amount,
            category,
        };
        return item;
    }
}

let shopData = new ShopDataProcessing();

class Shop {
    #items; // private field

    constructor(name, adress, items) {
        this.name = name;
        this.adress = adress;
        this.#items = items;
    }

    // showItems() {
    //     displayItem.showItems(this.#items);
    // }

    showItems() {
        DispalayItems.showItems(this.#items);
    }

    addItem({ name, price, amount, category }) {
        let newItem = shopData.addItem({ name, price, amount, category });

        // this.#items.push(newItem);

        let addId = {
            ...newItem,
            id: this.#generateId(),
        };

        this.#items = [...this.#items, addId];
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

// ATB.addItem({ name: "beer", price: 35, amount: 100, category: "alkohol" });

// ATB.addItem({ name: "karambola", price: 65, amount: 450, category: "fruits" });

// ATB.addItem({ name: "kumkwat", price: 100, amount: 450, category: "fruits" });

ATB.updateItem("apples", "apples gold");
ATB.showItems();
