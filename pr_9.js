
let name = prompt("Введите свое имя");
let age = prompt("Введите свой возраст");
alert("Привет, " + name + age + " - годиков");
console.log("Ваше имя " + name);
console.log("Ваш возраст " + age);
age = Number(age);
if (age >= 18){
    console.log("Вы совершеннолетний");
    alert("Вы совершеннолетний");
}
else{
    console.log("Вы несовершеннолетний");
    alert("Вы несовершеннолетний");
}

let randomNum = Math.floor(Math.random() * 10) + 1;

let num= prompt("Введиет число от 1 до 10");

num = Number(num);

if (num === randomNum) {
    alert("Поздравляем! Вы угадали число!");
} else {
    if (num < 5) {
        alert("Ваше число меньше 5.");
    } else if (num > 5) {
        alert("Ваше число больше 5.");
    } else {
        alert("Вы не угадали число, оно не 5.");
    }
}

let password = prompt("Введите пароль");

password = Number(password);

if(password > 0){
    if(password = 12345){
        alert("Доступ разрешен");
    }
    else{
        alert("Доступ запрещен");
    }
}
else{
    alert("Вы не ввели пароль");
}


let first_num = prompt("Введите первое число");

let second_num = prompt("Введите второе число");

first_num = Number(first_num);

second_num = Number(second_num);

if (first_num > 0 && second_num > 0){

    let operator = prompt("Введите один из операторов (+, -, *, /)");
    if(operator == "+"){
        alert(first_num + "+" + second_num + "=" + (first_num+second_num));
    }
    else if(operator == "-"){
        alert(first_num + "-" + second_num + "=" + (first_num-second_num));
    }
    else if(operator == "*"){
        alert(first_num + "*" + second_num + "=" + (first_num*second_num));
    }
    else if(operator == "/"){
        alert(first_num + "/" + second_num + "=" + (first_num/second_num));
    }
    else{
        alert("Неверный оператор");
    }
}
else{
    alert("Вы не правильно ввели числа");
}


