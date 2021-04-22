
const booksList = document.querySelector(".booksList");


let myLibrary = [
    {
        title: "Come to Be my Follower",
        author: "Jeff Jackson",
        pages: 150,
        info: function () {
            return `Title: ${this.title}.\n Author: ${this.author}.\n Pages: ${this.pages}.\n`; 
        }
    },

    {
        title: "Imitate their Faith",
        author: "Mark Sanderson",
        pages: 250,
        info: function () {
            return `Title: ${this.title}.\n Author: ${this.author}.\n Pages: ${this.pages}.\n`;
        }
    },

    {
        title: "My Book of Bible Stories",
        author: "WatchTower Inc",
        pages: 430,
        info: function () {
            return `Title: ${this.title}.\n Author: ${this.author}.\n Pages: ${this.pages}.`; 
        }    
    }

]


function addBookToLibrary() {
    
    myLibrary.forEach(books => {

        let parag = document.createElement('p');
        parag.classList.add('parag');
        parag = ;

        booksList.appendChild(parag);

        //console.log(books.info());
    })

    return booksList;
    
}

addBookToLibrary();