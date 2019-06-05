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

/*let arrProducts = [
	{
		photo: "card/card1.jpg",
		name: "Card 1",
		description: "Werewolf"
	},

	{
		photo: "card/card2..jpg",
		name: "Card 2",
		description: "Plotva"
	},

	{
		photo: "card/card3..jpg",
		name: "Card 3",
		description: "Ivasik"
	}
]*/



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