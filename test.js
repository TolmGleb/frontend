
let name = prompt("Введите ваше имя:");
let age = prompt("Введите ваш возраст:");

 console.log
alert(`Привет, ${name}! Твой возраст: ${age}`);
console.log(`Привет, ${name}! Твой возраст: ${age}`);




let name = prompt("Введите ваше имя:");
let age = prompt("Введите ваш возраст:");

age = Number(age);

alert(`Привет, ${name}! Твой возраст: ${age}`);
console.log(`Привет, ${name}! Твой возраст: ${age}`);

if (age >= 18) {
    alert("Вы совершеннолетний");
    console.log("Вы совершеннолетний");
} else {
    alert("Вы несовершеннолетний");
    console.log("Вы несовершеннолетний");
}



const correctPassword = "12345";

let userPassword = prompt("Введите пароль:");

if (userPassword === correctPassword) {
    alert("Доступ разрешен");
    console.log("Доступ разрешен");
} else if (userPassword === "") {
    alert("Пароль не может быть пустым");
    console.log("Пароль не может быть пустым");
} else {
    alert("Доступ запрещен");
    console.log("Доступ запрещен");
}





let num1 = Number(prompt("Введите первое число:"));
let num2 = Number(prompt("Введите второе число:"));
let operator = prompt("Введите оператор (+, -, *, /):");

let result;

if (operator === "+") {
    result = num1 + num2;
} else if (operator === "-") {
    result = num1 - num2;
} else if (operator === "*") {
    result = num1 * num2;
} else if (operator === "/") {
    if (num2 !== 0) {
        result = num1 / num2;
    } else {
        alert("На ноль делить нельзя");
        console.log("На ноль делить нельзя");
    }
} else {
    alert("Неверный оператор");
    console.log("Неверный оператор");
}

if (result !== undefined) {
    alert(`Результат: ${result}`);
    console.log(`Результат: ${result}`);
}
