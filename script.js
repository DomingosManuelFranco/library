
let myLibrary = [
    {
        title: "Come to Be my Follower",
        author: "Jeff Jackson",
        pages: 150,
        info: function () {
             return `${this.title} by ${this.author}, ${this.pages}, ${this.read()}.`;
        }
    },

    {
        title: "Imitate their Faith",
        author: "Mark Sanderson",
        pages: 250,
        info: function () {
            return `${this.title} by ${this.author}, ${this.pages}, ${this.read()}.`;
        }
    },

    {
        title: "My Book of Bible Stories",
        author: "WatchTower Inc",
        pages: 430,
        info: function () {
            return `${this.title} by ${this.author}, ${this.pages}.`;
        }
    }
]
console.log(myLibrary);

function addBookToLibrary(params) {
    
}