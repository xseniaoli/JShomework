//Задача 1

let season = prompt ("Введите месяц в формате 1-январь, 2-февраль и т.п");
switch (season) {
	case "1-январь":
	case "2-февраль":
	case "12-декабрь":
		alert("Зима холода");
		break;
	case "3-март":
	case "4-апрель":
	case "5-май":
		alert("Весна ляпота");
		break;
	case "6-июнь":
	case "7-июль":
	case "8-август":
		alert("Лето - это маленькая жизнь");
		break;
	case "9-сентябрь":
	case "10-октябрь":
	case "11-ноябрь":
		alert("Осень, осень, лес остыл и листья сбросил");
		break;
	default:
        alert("Что-то пошло не так...");
}

//Задача 2

let height = parseInt(prompt("Введите длину:"));
let unit = parseInt(prompt("Выберете единицу измерения:\n1—дециметр\n2—километр\n3—метр\n4—миллиметр\n5—сантиметр"));
if (unit === 1) {
	alert(height/10 + "м");
} else if (unit === 2) {
	alert(height*1000 + "м");
} else if (unit === 3) {
	alert(height + "м");
} else if (unit === 4) {
	alert(height/1000 + "м");
} else if (unit === 5) {
	alert(height/100 + "м");
}

//Задача 3

let a = prompt("Введите целое число, лежащее в диапазоне от -999 до 999:");

if (a >= -999 && a <= -100) {
	alert("Отрицательное трехзначное число");
} else if (a >= -99 && a <= -10 ) {
	alert("Отрицательное двухзначное число");
} else if (a >= -9 && a <= -1 ) {
	alert("Отрицательное однозначное число");
} else if (a === 0) {
	alert("Нулевое число");
} else if (a >= 1 && a <= 9 ) {
	alert("Положительное однозначное число");
} else if (a >= 10 && a <= 99 ) {
	alert("Положительное двухзначное число");
} else if (a >= 100 && a <= 999 ) {
	alert("Положительное трехзначное число");
} else {
	alert("Что-то пошло не так...");
}

//Задача 4

for (var i = 1; i <= 100; i++) {
	if (i % 3 === 0 && i % 5 === 0) {
		console.log("ThreeFive");
	} else if (i % 3 === 0) {
		console.log("Three");
	} else if  (i % 5 === 0) {
		console.log("Five");
	} else {
		console.log("Nothing else matter");
	}
}

