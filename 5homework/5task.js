// Задача 1

let a = [2,2,2];
let a2 = [4,2];

function diff (arr, arr2) {
	
	if (arr.length === arr2.length) {
		return true;
	} else {
		return false;
	}
}

console.log(diff(a, a2));


// Задача 2

function range (value1, value2, step) {
	let arr = [];

	if (step == undefined) {
		step = 1;
	}

	if (step > 0) {
		for (let i = value1; i <= value2; i+= step) {
			arr.push(i);
		}
	}
	return arr;
}

console.log(range(1,10,2));


// Задача 3

let student = {
	name: "Ksenia",
	surname: "Olina",
	age: 25,
	hobby: ["programming", "photo", "music"],
	study: "ITMO"
}

function showInfo(student) {
  console.log(student);
}
showInfo(student);

//или

function info({name,surname,age,hobby,study}) {
	console.log(name + " " + surname + " " + age + " " + hobby + " " + study);
}
info(student);

