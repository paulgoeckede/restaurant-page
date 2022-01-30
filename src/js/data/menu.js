import Item from "../classes/menu-item.js";

const menu = [];

//type, name, ingredients, price

const pizzaMargherita = new Item(
    "Pizza",
    "Pizza Margherita",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, error.",
    "8,90€"
);

const pizzaDiavolo = new Item(
    "Pizza",
    "Pizza Diavolo",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, error.",
    "11,90€"
);

const pizzaFunghi = new Item(
    "Pizza",
    "Pizza Funghi",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, error.",
    "11,90€"
);

const pizzaPeperoni = new Item(
    "Pizza",
    "Pizza Peperoni",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, error.",
    "10,90€"
);

const spaghettiCarbonara = new Item(
    "Pasta",
    "Spaghetti Carbonara",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, error.",
    "10,90€"
);

const spaghettiBolognese = new Item(
    "Pasta",
    "Spaghetti Bolognese",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, error.",
    "10,90€"
);

const aglioOlio = new Item(
    "Pasta",
    "Spaghetti Aglio e Olio",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, error.",
    "10,90€"
);

const pastaArrabiata = new Item(
    "Pasta",
    "Pasta Arrabiata",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, error.",
    "10,90€"
);

menu.push(pizzaMargherita);
menu.push(pizzaDiavolo);
menu.push(pizzaFunghi);
menu.push(pizzaPeperoni);
menu.push(spaghettiCarbonara);
menu.push(spaghettiBolognese);
menu.push(aglioOlio);
menu.push(pastaArrabiata);

export default function getCurrentMenu() {
    return menu;
}
