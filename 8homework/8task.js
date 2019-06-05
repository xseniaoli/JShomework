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
