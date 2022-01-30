import "../css/menu.css";
import "../css/general.css";
import landingDom from "./dom-loader-landing";
import currentMenu from "./data/menu.js";

export default function domLoader() {
    const contentDiv = document.getElementById("contentDivLanding");
    contentDiv.setAttribute("id", "contentDivMenu");

    /* -------------- HEADER START -------------------- */

    //Header, Navbar generation
    const header = document.createElement("header");
    //Logo
    const logoDiv = document.createElement("a");
    logoDiv.setAttribute("id", "logo");
    logoDiv.innerHTML = "Gepetto's Pizza";
    logoDiv.setAttribute("href", "index.html");
    header.appendChild(logoDiv);
    //Links
    const navList = document.createElement("ul");
    const landingListItem = document.createElement("li");
    const contactListItem = document.createElement("li");
    navList.setAttribute("id", "navList");
    landingListItem.setAttribute("id", "landingLink");
    landingListItem.innerHTML = "HOME";
    contactListItem.setAttribute("id", "contactLink");
    contactListItem.innerHTML = "CONTACT";
    navList.appendChild(landingListItem);
    navList.appendChild(contactListItem);
    header.appendChild(navList);

    //Link functionality
    landingListItem.addEventListener("click", () => {
        contentDiv.innerHTML = "";
        renameContentDiv();
        landingDom();
    });
    contentDiv.appendChild(header);

    /* -------------- HEADER END -------------------- */
    /* -------------- MAIN START -------------------- */

    const main = document.createElement("main");
    main.setAttribute("id", "mainMenu");

    const menuDiv = document.createElement("div");
    menuDiv.setAttribute("id", "menuDiv");

    const pizzaDiv = document.createElement("div");
    pizzaDiv.setAttribute("id", "pizzaDiv");

    const pastaDiv = document.createElement("div");
    pastaDiv.setAttribute("id", "pastaDiv");
    //type, name, ingredients, price
    const menuArray = Array.from(currentMenu());
    menuArray.forEach((Item) => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("itemDiv");
        const itemName = document.createElement("h4");
        itemName.innerHTML = Item.name;
        const itemIngredients = document.createElement("p");
        itemIngredients.innerHTML = Item.ingredients;
        const itemPrice = document.createElement("p");
        itemPrice.setAttribute("id", "price");
        itemPrice.innerHTML = Item.price;
        itemDiv.appendChild(itemName);
        itemDiv.appendChild(itemIngredients);
        itemDiv.appendChild(itemPrice);
        if (Item.type === "Pizza") {
            pizzaDiv.appendChild(itemDiv);
        } else if (Item.type === "Pasta") {
            pastaDiv.appendChild(itemDiv);
        }
        console.log(Item);
    });

    main.appendChild(pizzaDiv);
    main.appendChild(pastaDiv);
    contentDiv.appendChild(main);

    /* -------------- MAIN END -------------------- */
    /* -------------- FOOTER START ---------------------- */

    const footer = document.createElement("footer");
    const footerContent = document.createElement("p");
    footerContent.innerHTML = "copyright &copy; Paul Göckede";
    const fotoCredit = document.createElement("a");
    fotoCredit.innerHTML = "Background by Valeria Aksakova";
    fotoCredit.setAttribute("href", "https://de.freepik.com/valeria-aksakova");
    footer.appendChild(fotoCredit);
    footer.appendChild(footerContent);
    contentDiv.appendChild(footer);

    /* -------------- FOOTER END ---------------------- */
}

function renameContentDiv() {
    const contentDiv = document.getElementById("contentDivMenu");
    if (contentDiv !== null) {
        contentDiv.setAttribute("id", "contentDivLanding");
    }
}

export { renameContentDiv };
