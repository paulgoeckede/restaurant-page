import "../css/landing-page.css";
import Reviews from "./data/reviews.js";

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
