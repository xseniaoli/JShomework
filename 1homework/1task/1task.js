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

let a = -5;
let b = 13;
let c = -7;

if (a < b && a < c ) { 
	console.log ("значение a самое маленькое");
} else if (b < c) {
	console.log ("значение b самое маленькое");
} else {
	console.log ("значение c самое маленькое");
} 


//Задача 4

let d = 50;
let e = -20;
const CONST_VALUE = 10;

let m, n, number;

m = parseFloat(CONST_VALUE - d);
n = parseFloat(CONST_VALUE - e); 

if (m > 0) {
	m = m;
} else {
	m = -m;
}

if (n > 0) {
	n = n;
} else {
	n = -n;
}

if (number = m > n) {
	console.log ('Ближе к 10' + " " + e);
} else {
	console.log ('Ближе к 10' + " " + d);
}

