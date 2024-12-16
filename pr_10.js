let name = prompt("Введите свое имя");
let age = prompt("Введите свой возраст");
alert("Привет, " + name + age + " - годиков");
age = Number(age);
if (age >= 18){
    alert("Вы совершеннолетний");
}
else{
    alert("Вы несовершеннолетний");
}

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

let a = 10;
while(a>0){
    console.log(a);
    a -= 1;
}

const lectures = ['Тема 1', 'Тема 2', 'Тема 3'];
const practices = ['Практика 1', 'Практика 2', 'Практика 3'];

lectures.push("Тема 4");

practices.unshift("Подготовка к практике");

console.log(lectures[3]);

console.log(practices[0]);

lectures.forEach(lecture => console.log(lecture));

practices.forEach(practice => console.log(practice));

function print_array(arr) {
    return arr.join(', ');
}

const myArray = [1, 2, 3, 4, 5];
console.log(print_array(myArray));


function print_value_array (arr){
    let newArr = [];
    arr.forEach(element => {
        if (element.startsWith('О')) {
            newArr.push(element);
        }
    });
    return newArr;
}

const array = ['Общество', 'Философия', 'Биология', 'Математика', 'Физика', 'Олимпиада'];

const new_array = print_value_array(array);
console.log(new_array);






