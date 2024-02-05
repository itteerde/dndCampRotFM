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

function reportLootForPerson(name, loot) {
    let s = `<table>`;

    loot.filter(i => i.holder === name).forEach(i => { `<tr><td>${i.name}</td><td>${i.price}</td></tr>` });

    s = s + `</table>`;

    return s;
}

function reportLoot(party, loot) {

    let content = `<table>`;

    party.forEach(c => { content = content + `<tr>${reportLootForPerson(c.name, loot)}</tr>` });

    content = content + `</table>`;

    ChatMessage.create({ content: content });
}