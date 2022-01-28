import "../css/menu.css";
import landingDom from "./dom-loader-landing";

export default function domLoader() {
    const contentDiv = document.getElementById("contentDiv");

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
        landingDom();
    });
    contentDiv.appendChild(header);

    /* -------------- HEADER END -------------------- */
    /* -------------- MAIN START -------------------- */

    const main = document.createElement("main");
    main.setAttribute("id", "main");

    const menu = document.createElement("div");
    menu.setAttribute("id", "menuDiv");

    const menuHeader = document.createElement("h3");
    menuHeader.setAttribute("id", "menuHeader");
    menuHeader.innerHTML = "Our Menu";

    menu.appendChild(menuHeader);

    main.appendChild(menu);

    contentDiv.appendChild(main);

    /* -------------- MAIN END -------------------- */
}
