let btn = document.querySelector('.btn')
let btn2 = document.querySelector('.btn2')
let btn3 = document.querySelector('.btn3')
let btn4 = document.querySelector('.btn4')
let input = document.querySelector('.user-input')
let element = document.querySelector('.element')

let out = document.querySelector('.out')
let preOut = document.querySelector('.pre-out');


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

btn.onclick = function() {
    let firstSet = new Set();
    console.log('adding to Set \'e\' \'r\' \'i\' \'k\' \'t\' \'h\' \'e\' \'b\' \'e\' \'s\' \'t\'');
    console.log(firstSet.add('e'));
    console.log(firstSet.add('r'));
    console.log(firstSet.add('i'));
    console.log(firstSet.add('k'));
    console.log(firstSet.add('t'));
    console.log(firstSet.add('h'));
    console.log(firstSet.add('e'));
    console.log(firstSet.add('b'));
    console.log(firstSet.add('e'));
    console.log(firstSet.add('s'));
    console.log(firstSet.add('t'));
    for (value of firstSet) {
        console.log(value);
    }
}
let secondSet = new Set();
btn2.onclick = function() {
    console.log(secondSet.add(input.value));
}

btn3.onclick = function() {
    console.log(secondSet.has(input.value));
    preOut.innerHTML = secondSet.has(input.value);
}
btn4.onclick = function() {
    let newArrayOfRandomInt = [];
    for(i = 0; i < 15; i++) {
        let randomInt = getRandomInt(19)
        console.log('i=' + i + ' randomInt=' + randomInt);
        newArrayOfRandomInt.push(randomInt);
    }
    let secondArrayOfIntGreaterThenFive = [];
    for(value of newArrayOfRandomInt) {
        if (value > 5) {
            secondArrayOfIntGreaterThenFive.push(value);
        }
    }
    console.log('newArrayOfRandomInt: ' + newArrayOfRandomInt);
    console.log('array where int > 5: ' + secondArrayOfIntGreaterThenFive);
}
const one = document.querySelector('.one');
one.style.color = '#ff0055'
function capitalize(str) {
    if (!str) return str;
    return str.split(' ')
    .map(word => {
        word.charCodeAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(' ');
}
/*
todo: Создайте сет и добавьте в него элементы 'e' 'r' 'i' 'k' 't' 'h' 'e' 'b' 'e' 's' 't' через add и вывод в консоль
Создать кнопку и поле для ввода и написать функцию которая будет добавлять в этот набор, которые пользователи будут вводить в поля ввода, инпут
Создать кнопку и функцию, которая будет делать проверку, если введенный пользователем элемент есть, то выводим под кнопку запись true, если нет - false
Создать функцию, при нажатии на кнопку она перебирает массив с помощью for of и возвращает нам новый массив, куда входят все элементы больше 5 (массив произвольный)
*/