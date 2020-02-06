// Function Declaration
function sum(a, b, c) {
  return a + b + c;
}

let result = sum(1, 2, 3);
alert( result );

// Function Expression
let summ = function(a, b, c) {
  return a + b + c;
};
let resultt = summ(4, 5, 6);
console.log( resultt );


//Параметры по умолчанию
function multiply(a, b = 1) {
  return a*b;
}

console.log(multiply(5, 2));
console.log(multiply(5)); 
console.log(multiply(5, undefined));

//Пример для псевдомассива arguments
function showSity() {
  alert( arguments.length );
  alert( arguments[0] );
  alert( arguments[1] );
 
}
showSity("Винница", "Чернигов");
showSity("Новосибирск");

//Логическая проверка  аргумента на содержимость
function showName(firstName, lastName, ...titles) {
  alert( firstName + ' ' + lastName );

  alert( titles[0] );
  alert( titles[1] );

if (firstName.length >=1) {
	alert ('True');
} else if (firstName.length < 1) {
  alert('False');
}
}
showName("Юрий", "Морозов", "Люблю", "Зефирки"); 