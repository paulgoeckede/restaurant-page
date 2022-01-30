import "../css/header.css";
import "../css/menu.css";
import "../css/general.css";
import "../css/contact-page.css";
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
        domLoader();
    });

    console.log(contentDiv.getAttribute("id"));

    //This highlights the current Tab in the header

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
    main.setAttribute("id", "mainContact");

    const contactHeader = document.createElement("h2");
    contactHeader.setAttribute("id", "contactHeader");
    contactHeader.innerHTML = "CONTACT US";

    //FORM
    const formContainer = document.createElement("div");
    formContainer.setAttribute("id", "formContainer");

    const form = document.createElement("form");

    //First Name
    const nameLabel = document.createElement("label");
    const nameInput = document.createElement("input");
    nameLabel.setAttribute("for", "name");
    nameLabel.innerHTML = "Your Name";
    nameInput.setAttribute("type", "text");
    nameInput.setAttribute("id", "name");
    nameInput.setAttribute("name", "name");
    nameInput.setAttribute("placeholder", "Your name");
    form.appendChild(nameLabel);
    form.appendChild(nameInput);

    //last name
    const mailLabel = document.createElement("label");
    const mailInput = document.createElement("input");
    mailLabel.setAttribute("for", "mail");
    mailLabel.innerHTML = "Your E-Mail";
    mailInput.setAttribute("type", "text");
    mailInput.setAttribute("id", "mail");
    mailInput.setAttribute("name", "mail");
    mailInput.setAttribute("placeholder", "Your e-mail");
    form.appendChild(mailLabel);
    form.appendChild(mailInput);

    //Subject
    const subjectLabel = document.createElement("label");
    const subjectText = document.createElement("textarea");
    subjectLabel.setAttribute("for", "subject");
    subjectLabel.innerHTML = "Subject";
    subjectText.setAttribute("id", "subject");
    subjectText.setAttribute("placeholder", "Write something!");
    subjectText.setAttribute("style", "height: 200px");
    form.appendChild(subjectLabel);
    form.appendChild(subjectText);

    //Submit Button
    const submit = document.createElement("input");
    submit.setAttribute("type", "submit");
    submit.setAttribute("value", "submit");
    form.appendChild(submit);

    main.appendChild(contactHeader);
    main.appendChild(form);
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
    const contentDiv = document.getElementById("contentDivContact");
    contentDiv.setAttribute("id", name);
}
