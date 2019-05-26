// Задача 1

let str = "235";
let sum = 0;
for (let i = 0; i < str.length; i++) {
	sum += Number(str[i]);
}

console.log(sum);

// Задача 2

let str2 = "Несу возмездие во имя Луны!";
let doublesmb = "Л";
let doublestr = new RegExp (doublesmb, "ig");

console.log (str2.replace(doublestr, doublesmb+doublesmb));

// Задача 3

let pass = prompt("Введите пароль на латинице:");

let small = /(?=.*[a-z])/;
let large = /(?=.*[A-Z])/;
let num = /(?=(.*[0-9]){3,})/;
let spec = /(?=.*[!@#$%^&*])/;
let all


if (!small.test(pass)) {
	alert("Пароль должен содержать минимум 1 строчную букву");
}
if (!large.test(pass)) {
	alert("Пароль должен содержать минимум 1 заглавную букву");
}
if (!num.test(pass)) {
	alert("Пароль должен содержать минимум 3 цифры");
}
if (!spec.test(pass)) {
	alert("Пароль должен содержать минимум 1 спец символ !@#$%^&*");
}
if (pass.length < 10) {
	alert("Пароль должен содержать минимум 10 символов");
}

console.log(pass);