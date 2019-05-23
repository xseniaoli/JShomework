// Задача 1

let A, B, C1, C2;

A = [ 12, 4, 3, 10, 1, 20 ];  
B = [-3, -7, -100, -33];

C1 = A.concat(B);
console.log(C1);

C2 = B.concat(A);
console.log(C2);

// Задача 2



// Задача 3

var arr = [12,4,3,10,1,20];
var min = arr[0];
var max = arr[0];

for (var i = 0; i < arr.length; i++) {

	if (arr[i] > max) {
		max = arr[i];
	}

	if (arr[i] < min) {
		min = arr[i];
	} 
	
}

console.log(arr);
console.log('Минимальное значение' + " " + min);
console.log('Максимальное значение' + " " + max);

var removeMin = arr.splice(arr.indexOf(min), 1);
var removeMax = arr.splice(arr.indexOf(max), 1);

console.log(removeMin);
console.log(removeMax);
console.log(arr);
