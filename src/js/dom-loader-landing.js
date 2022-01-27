import "../css/general.css";
import "../css/header.css";
import "../css/main.css";
import "../css/footer.css";

export default function domLoader() {
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
    const menuLink = document.createElement("a");
    const contactLink = document.createElement("a");
    menuLink.setAttribute("href", "");
    contactLink.setAttribute("href", "");
    menuLink.innerHTML = "MENU";
    contactLink.innerHTML = "CONTACT";
    navList.setAttribute("id", "navList");
    menuListItem.setAttribute("id", "menuListItem");
    contactListItem.setAttribute("id", "contactListItem");
    menuLink.setAttribute("id", "menuLink");
    contactLink.setAttribute("id", "contactLink");
    menuListItem.appendChild(menuLink);
    contactListItem.appendChild(contactLink);
    navList.appendChild(menuLink);
    navList.appendChild(contactLink);
    header.appendChild(navList);

    //content div generation
    const contentDiv = document.createElement("div");
    contentDiv.setAttribute("id", "contentDiv");
    contentDiv.appendChild(header);

    //add header to document
    document.body.appendChild(contentDiv);

    /* -------------- HEADER END -------------------- */
    /* -------------- MAIN START -------------------- */

    //Main text

    const main = document.createElement("main");
    const emptyDiv = document.createElement("div");
    const taglineDiv = document.createElement("div");
    main.setAttribute("id", "main");
    emptyDiv.setAttribute("id", "emptyDiv");
    taglineDiv.setAttribute("id", "taglineDiv");
    const heading = document.createElement("h1");
    heading.innerHTML =
        "<span class='tagline'>AUTHENTIC</span> ITALIAN <span class = 'tagline'> CUISINE </span>";
    taglineDiv.appendChild(heading);

    //Order button

    const orderButton = document.createElement("button");
    const buttonDiv = document.createElement("div");
    buttonDiv.setAttribute("id", "buttonDiv");
    orderButton.setAttribute("type", "button");
    orderButton.setAttribute("id", "orderButton");
    orderButton.innerHTML = "ORDER NOW";
    buttonDiv.appendChild(orderButton);
    taglineDiv.appendChild(buttonDiv);

    //add to document
    main.appendChild(emptyDiv);
    main.appendChild(taglineDiv);
    contentDiv.appendChild(main);

    /* -------------- MAIN END ---------------------- */
    /* -------------- FOOTER START ---------------------- */

    const footer = document.createElement("footer");
    const footerContent = document.createElement("p");
    footerContent.innerHTML = "copyright &copy; Paul Göckede";
    footer.appendChild(footerContent);
    contentDiv.appendChild(footer);

    /* -------------- FOOTER END ---------------------- */
}
