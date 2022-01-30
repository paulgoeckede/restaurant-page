import "../css/landing-page.css";
import "../css/header.css";
import "../css/general.css";
import Reviews from "./data/reviews.js";
import menuDom from "./dom-loader-menu.js";
import { renameContentDiv } from "./dom-loader-menu.js";

function generateContentDiv() {
    const contentDiv = document.createElement("div");
    contentDiv.setAttribute("id", "contentDivLanding");
    document.body.appendChild(contentDiv);
}

export default function domLoader() {
    const contentDiv = document.getElementById("contentDivLanding");

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
        renameContentDiv();
        menuDom();
    });

    contentDiv.appendChild(header);

    /* -------------- HEADER END -------------------- */
    /* -------------- MAIN START -------------------- */

    //Main text

    const main = document.createElement("main");
    const taglineDiv = document.createElement("div");
    main.setAttribute("id", "main");
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

    //Reviews
    const reviewDiv = document.createElement("div");
    reviewDiv.setAttribute("id", "reviewDiv");
    const currentReviews = Reviews();

    currentReviews.forEach(function (review) {
        const reviewAuthor = document.createElement("h5");
        const reviewText = document.createElement("h4");
        reviewAuthor.innerHTML = review.getAuthor;
        reviewText.innerHTML = review.getReview;
        const reviewContainer = document.createElement("div");
        reviewContainer.setAttribute("id", `reviewDiv${review.index}`);
        reviewContainer.appendChild(reviewText);
        reviewContainer.appendChild(reviewAuthor);
        reviewDiv.appendChild(reviewContainer);
    });

    //add to document
    main.appendChild(reviewDiv);
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

export { generateContentDiv };
