// Задача 1

let color = document.getElementsByTagName("NAV");
for (let i = 0; i < color.length; i++){
	color[i].onclick = function(){
		if(this.style.backgroundColor == "") {
			this.style.backgroundColor = "#00CC00";
		} else {
			this.style.backgroundColor = "";
		}
	}
};

// Задача 2

let count = 0;
let button = document.getElementById("horde");
let display = document.getElementById("displayHorde"); 

button.onclick = function() {
	count++;
	display.innerHTML = count;
};

// Задача 3

let addComment = document.getElementById("comment");
let public = document.getElementById("button");
public.addEventListener("click", publicComm);

function publicComm(){
		let container = document.createElement("div");
		container.style.cssText = "display: flex; justify-content: space-around;"
		let image = document.createElement("img");
		image.src = "jpg/ava.jpg";
		image.style.cssText = "width: 50px; height: 50px; margin: 50px 0 0 300px;";
		let name = document.createTextNode("Silvana");
		let date = new Date();

		document.body.appendChild(image);
		document.body.appendChild(container);
		container.appendChild(name);

		container.innerHTML = comment.value + " " + name.textContent + " " + date.toDateString();
};
 
// Задача 4

let book = [{
	name: "The Lord of the Rings",
	articul: "D-343",
	author: "J. R. R. Tolkien",
	description: "Thousands of years before the events of the novel, the Dark Lord Sauron had forged the One Ring to rule the other Rings of Power and corrupt those who wore them: three for Elves, seven for Dwarves, and nine for Men."
}, 
{
	name: "The Witcher",
	articul: "G-334",
	author: "Andrzej Sapkowski",
	description: "Is a fantasy series of short stories and novels about the protagonist character Geralt of Rivia."

},
{
	name: "Mort",
	articul: "J-434",
	author: "Terry Pratchett",
	description: "As a teenager, Mort has a personality and temperament that makes him unsuited to the family farming business."
}]

let container = document.createElement("table");

let title = document.createElement("title");
container.appendChild(title);
title.innerText = "Books list";
title.style.cssText = "font-size: 20px;";

let header = document.createElement("tr");
container.appendChild(header);

let bookName = document.createElement("th");
header.appendChild(bookName);
bookName.innerText = "Book title";
let art = document.createElement("th");
header.appendChild(art);
art.innerText = "Article";
let authorName = document.createElement("th");
header.appendChild(authorName);
authorName.innerText = "Author";
let desc = document.createElement("th");
header.appendChild(desc);
desc.innerText = "Description";

function publicBooks(book) {
    for (let i = 0; i < book.length; i++) {

    	let content = document.createElement("tr");
    	container.appendChild(content);

    	let bookN = document.createElement("td");
    	bookN.innerText = book[i].name;
    	content.appendChild(bookN);

    	let artN = document.createElement("td");
    	artN.innerText = book[i].articul;
    	content.appendChild(artN);

    	let authorN = document.createElement("td");
    	authorN.innerText = book[i].author;
    	content.appendChild(authorN);

    	let descN = document.createElement("td");
    	descN.innerText = book[i].description;
    	content.appendChild(descN);


        container.style.cssText = "margin-top: 20px; border: 5px solid gray; background: aqua;";
        bookN.style.cssText = "border: 3px solid gray;";
        artN.style.cssText = "border: 3px solid gray;";
        authorN.style.cssText = "border: 3px solid gray;";
        descN.style.cssText = "border: 3px solid gray;";

        books.appendChild(container);
    };

}
publicBooks(book);