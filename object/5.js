// Task: Write a constructor function Movie that takes title and director as parameters and sets them as properties. Add a prototype method getDescription that returns "The movie [title] was directed by [director].".

function movie(title,director){
    this.title=title;
    this.director=director;
}

let movie1=new movie("Kalki","NagAshwin")
console.log(movie1)
movie.prototype.getDescription = function(){
    return "The movie "+ this.title +" was directed by "+ this.director + "."
}
console.log(movie1.getDescription());