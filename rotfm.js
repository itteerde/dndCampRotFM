class LootItem {
    constructor(name, holder, price) {
        this.name = name;
        this.holder = holder;
        this.price = price;
    }
}

let party = [
    "Dekthrikkur Glomp",
    "Ezo",
    "Gial Engstrand",
    "Herja Stormspoken",
    "Ketris Bearsmasher",
    "Kythos Snowbraid",
    "Sol Calmstone"
];
party = party.sort((a, b) => a.localeCompare(b));

const loot = [];