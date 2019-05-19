//Задача 1

let allSquare = 10;
allSquare *= 100;

let squareOfOneRidge;
squareOfOneRidge = 15 * 25;

let totalNumberOfRidges;
totalNumberOfRidges = allSquare % squareOfOneRidge;

console.log(totalNumberOfRidges + "m2");

//Задача 2

let smallEllipse = 600;
smallEllipse /= 100;

let bigEllipse = 15;

let middleEllipse;
middleEllipse = bigEllipse - smallEllipse;
console.log(middleEllipse);

//Задача 3

let a = 3;
let b = -5;
let c = 12;

let smallNumber;
if (smallNumber = a < b && a < c ) { 
	console.log ("значение a самое маленькое");
} else if (smallNumber = b < a && b < c) {
	console.log ("значение b самое маленькое");
} else if (smallNumber = c < a && c < b) {
	console.log ("значение c самое маленькое");
} else {
	console.log ("что-то пошло не так");
}


//Задача 4

let d = -8;
let e = 5;
const CONST_VALUE = 10;

let m, n, number;

m = parseFloat(CONST_VALUE - d);
n = parseFloat(CONST_VALUE - e); 

if (m > 0) {
	console.log (m);
} else {
	console.log (-m);
}

if (n > 0) {
	console.log (n);
} else {
	console.log (-n);
}

if (number = m > n) {
	console.log ('Ближе к 10' + " " + e);
} else {
	console.log ('Ближе к 10' + " " + d);
}

