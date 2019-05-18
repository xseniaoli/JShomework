//Задача 1

let allSquare = 10;
allSquare *= 100;

let squareOfOneRidge;
squareOfOneRidge = 15 * 25;

let totalNumberOfRidges;
totalNumberOfRidges = allSquare / squareOfOneRidge;

let residue;
residue = totalNumberOfRidges % 2;
console.log(Math.ceil(residue));

//Задача 2

let smallEllipse = 600;
smallEllipse /= 100;

let bigEllipse = 15;

let middleEllipse;
middleEllipse = bigEllipse - smallEllipse;
console.log(middleEllipse);

//Задача 3

let a = prompt('Введите значение a');
let b = prompt('Введите значение b');
let c = prompt('Введите значение c');

let smallNumber;
smallNumber = (a < b, a < c ) ? "значение а самое маленькое" : 
	(b < a, b < c) ? "значение b самое маленькое" :
	(c < a, c < b) ? "значение c самое маленькое" : "что-то пошло не так";

console.log (smallNumber);

//Задача 4

let d = prompt('Введите значение m');
let e = prompt('Введите значение n');
const CONST_VALUE = 10;

let m, n, number;

m = (CONST_VALUE - d);
n =  (CONST_VALUE - e);

number = (m > n) ? "значение n ближе к 10" : 
	(n > m) ? "значение m ближе к 10" :
	"что-то пошло не так";

console.log(number);