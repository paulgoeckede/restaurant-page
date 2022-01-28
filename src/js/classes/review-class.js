export default class {
    constructor(author, review) {
        this.author = author;
        this.review = review;
    }

    get getAuthor() {
        return this.author;
    }

    get getReview() {
        return this.review;
    }

    set setAuthor(author) {
        this.author = author;
    }

    set setReview(review) {
        this.review = review;
    }
}
