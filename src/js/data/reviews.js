import Review from "../classes/review-class.js";

const reviews = [];

const review1 = new Review(
    "New York Times",
    "This is easily the best pizza place in New York City. If you live in the area, or even if you don't, this place is a must visit."
);

const review2 = new Review(
    "Michelin",
    "I would give more than 3 stars if we could. Maybe we need to update our review guidelines, because Gepetto's just broke the standards."
);

const review3 = new Review(
    "Paul's Food Guide",
    "This is the most incredible pizza I've ever had. I went here everyday since I visited the first time and gained 30 pounds. Pasta is also good."
);

function addIndex() {
    for (let i = 0; i < reviews.length; i++) {
        reviews[i].index = i;
    }
}

reviews.push(review1);
reviews.push(review2);
reviews.push(review3);

export default function getReviews() {
    return reviews;
}
