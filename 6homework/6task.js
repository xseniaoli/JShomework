// Задача 1

let a = {
    name: 'static',
    count: 0
}

function foo(value1, value2, step) {
	let arr = [];
	for (let i = 0; i < step; i++) {
		let b = Object.assign({}, value1);
		b[value2] = i;
		arr.push(b);
	}
	return arr;
}

console.log(foo(a, 'count', 10));

// Задача 2

function getRandom() {
	let array = [];
	function getRandomNum() {
		while (array.length < 100) {
			let num = 1 + Math.floor(Math.random() * 100);
			if(!array.includes(num)){
			array.push(num);
			}
		} 
		return array;
	}
	return getRandomNum;
}

let getRandomCheck = getRandom();

console.log(getRandomCheck());

// Задача 3

let student = {
	name: "Василий",
	surname: "Васильев",
	age: 30,
	hobby: ["Музыка", "кино", "виски"],
	study: "Холодилке",
	display: function() {
		console.log(
			this.name,
			this.surname + ".",
			this.age + " лет.",
			"Интересы: " + this.hobby + ".",
			"Учится в " + this.study
			);
	}
}

student.display();


//Задача 4

function factorial(n) {
	if (n != 1) {
		return n * factorial(n - 1);
	} else {
		return 1;
	}
}

console.log(factorial(5));


//Задача 5

let arr2 = [ 
{ 'price' : 10, 'count' : 2 }, 
{ 'price' : 5, 'count' : 5}, 
{ 'price' : 8, 'count' : 5 }, 
{ 'price' : 12, 'count' : 4 }, 
{ 'price' : 8, 'count' : 4},
]

arr2.sort (function(val1, val2) {
	return val1.price - val2.price;
});

console.log(arr2);