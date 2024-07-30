// Task: Illustrate how to create a new instance of the object using the constructor function Book with title set to 'JavaScript: The Good Parts' and author set to 'Douglas Crockford'.

function book(title,author){
    this.title=title;
    this.author=author;
}
var book1=new book('JavaScript: The Good Parts', 'Douglas Crockford');
console.log(book1);


