export class Post {
    constructor(title, score, link) {
        this.title = title;
        this.score = score;
        this.link = "//www.reddit.com" + link;
        this.formatScore();
    }

    formatScore = () => {
        if(this.score > 1000) {
            this.score = (this.score / 1000).toFixed(1) + "k"
        }
    }

}

export default Post;