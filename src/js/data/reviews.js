import Review from "../classes/review-class.js";

const reviews = [];

const review1 = new Review(
    "New York Times",
    "This is easily the best pizza place in New York City. If you live in the area, or even if you don't, this place is a must visit"
);

const review2 = new Review(
    "Michelin",
    "I would give more than 3 stars if we could. Maybe we need to update our review guidelines, because Gepettos just broke the standards."
);

function addIndex() {
    for (let i = 0; i < reviews.length; i++) {
        reviews[i].index = i;
    }
}

reviews.push(review1);
reviews.push(review2);

export default function getReviews() {
    return reviews;
}
