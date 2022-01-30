import "../css/header.css";
import "../css/menu.css";
import "../css/general.css";
import menuDom from "./dom-loader-menu.js";

export default function domLoader() {
    const contentDiv = document.getElementById("contentDivContact");
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
    const menuListItem = document.createElement("li");
    const contactListItem = document.createElement("li");
    navList.setAttribute("id", "navList");
    menuListItem.setAttribute("id", "menuLink");
    menuListItem.innerHTML = "MENU";
    contactListItem.setAttribute("id", "contactLink");
    contactListItem.innerHTML = "CONTACT";
    navList.appendChild(menuListItem);
    navList.appendChild(contactListItem);
    header.appendChild(navList);

    //Link functionality
    menuListItem.addEventListener("click", () => {
        contentDiv.innerHTML = "";
        renameDiv("contentDivMenu");
        menuDom();
    });

    contactListItem.addEventListener("click", () => {
        contentDiv.innerHTML = "";
        renameDiv("contentDivContact");
        contactDom();
    });

    console.log(contentDiv.getAttribute("id"));

    if (contentDiv.getAttribute("id") === "contentDivMenu") {
        menuListItem.classList.add("highlight");
        contactListItem.classList.remove("highlight");
    } else if (contentDiv.getAttribute("id") === "contentDivContact") {
        contactListItem.classList.add("highlight");
        menuListItem.classList.remove("highlight");
    } else if (contentDiv.getAttribute("id") === "contentDivLanding") {
        contactListItem.classList.remove("highlight");
        menuListItem.classList.remove("highlight");
    }

    contentDiv.appendChild(header);

    /* -------------- HEADER END -------------------- */
    /* -------------- MAIN START -------------------- */

    const main = document.createElement("main");
    main.setAttribute("id", "mainMenu");

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

function renameDiv(name) {
    const contentDiv = document.getElementById("contentDivMenu");
    contentDiv.setAttribute("id", name);
}
