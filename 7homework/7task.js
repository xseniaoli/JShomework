// Задача 1

let h = document.createElement("span");
h.style.color = "green";

let m = document.createElement("span");
m.style.color = "blue";

let s = document.createElement("span");
s.style.color = "red";

display.appendChild(h);
display.appendChild(m);
display.appendChild(s);

function checkTime(i) {
	if (i < 10) {
		i = "0" + i;
	}
	return i;
}

function displayTime() {
	let time = new Date();
	let hour = time.getHours();
	let minutes = time.getMinutes();
	let seconds = time.getSeconds();

	minutes = checkTime(minutes);
	seconds = checkTime(seconds);

	h.innerHTML = hour + ":";
	m.innerHTML = minutes + ":";
	s.innerHTML = seconds;

	let t = setTimeout(function() {
    	displayTime()
  	}, 500);
}

displayTime();

// Задача 2


let cards = [
	{
		photo: "card/card1.jpg",
		name: "Card 1",
		description: "Werewolf"
	},

	{
		photo: "card/card2.jpg",
		name: "Card 2",
		description: "Plotva"
	},

	{
		photo: "card/card3.jpg",
		name: "Card 3",
		description: "Ivasik"
	}
];

function products (arr){
	for (let i = 0; i < arr.length; i++) {
		let container = document.createElement("div");
		let image = document.createElement("img");
		image.src = arr[i].photo;
		image.style.cssText = "width: 450px; height: 500px";
		let card = document.createElement("span");
		card.innerText = arr[i].name;
		let descr = document.createElement("span");
		descr.innerText = arr[i].description;

		document.body.appendChild(container);
		container.appendChild(card);
		container.appendChild(image);
		container.appendChild(descr);

		container.style.cssText = "margin: 20px 0 0 50px; display: grid; grid-template-columns: 1fr; grid-template-rows: 40px 1fr 40px;"
		card.style.cssText = "font-size: 25px; font-weight: bold;"
		descr.style.cssText = "margin-top: 10px; font-size: 25px;"
	}
};

products(cards);



// Задача 3

function trafficLights(){

	let red = document.getElementsByClassName("red")[0];
	let yellow = document.getElementsByClassName("yellow")[0];
	let green = document.getElementsByClassName("green")[0];

	setTimeout (function(){
		red.style.opacity = 1;
		yellow.style.opacity = .3;
		green.style.opacity = .3;
	}, 1500);

	setTimeout (function(){
		red.style.opacity = .3;
		yellow.style.opacity = 1;
		green.style.opacity = .3;
	}, 2000);

	setTimeout (function(){
		red.style.opacity = .3;
		yellow.style.opacity = .3;
		green.style.opacity = 1;
	}, 2500);

	setTimeout (function(){
		red.style.opacity = .3;
		yellow.style.opacity = 1;
		green.style.opacity = .3;
	}, 3000);

	setTimeout (function(){
		red.style.opacity = 1;
		yellow.style.opacity = .3;
		green.style.opacity = .3;
	}, 3500);
}

let timer = setInterval (function() {
	trafficLights();
}, 3500);

trafficLights();