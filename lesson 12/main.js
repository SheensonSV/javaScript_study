let btn = document.querySelector('.btn')

let input = document.querySelector('.user-input')
let element = document.querySelector('.element')

let out = document.querySelector('.out')
let preOut = document.querySelector('.pre-out');
let divFirst = document.querySelector('.first');

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

document.querySelector('.one').onclick = function(event) {
    console.log(event);
    console.log('block-click-1');
}

document.querySelector('.two').oncontextmenu = function() {
    console.log('block-click-2 right button click');
}
document.querySelector('.two').ondblclick = function() {
    console.log('block-click-2 doubleclick');
}
/*let width = 100;
document.querySelector('.three').onmousemove = function(event) {
    console.log('block-click-3 mouse move ' + event.clientX + ' ' + event.clientY);
    this.style.width = width + 'px';
    ++width;
}*/
document.querySelector('.three').onmouseenter = function() {
    console.log('block-click-3 mouse enter ');
    this.style.background = 'pink';
}
document.querySelector('.three').onmouseleave = function() {
    console.log('block-click-3 mouse leave ');
    this.style.background = '#fff';
}
document.querySelector('.three').onmousedown = function() {
    console.log('block-click-3 mouse down ');
    this.style.background = 'red';
}
/*document.querySelector('.user-input').oninput = function(event) {
    console.log('user-input input ' + event);
}*/
/*document.querySelector('.user-input').onkeypress = function(event) {
    console.log('user-input keypress ' + event.key + ' code: ' + event.code + ' charCode: ' + event.charCode + ' keyCode: ' + event.keyCode);
    console.log(event);
}
document.querySelector('.user-input').onkeyup = function(event) {
    console.log('user-input keypress ' + event.key + ' code: ' + event.code + ' charCode: ' + event.charCode + ' keyCode: ' + event.keyCode);
    console.log(event);
}*/
//if return false - disable copy by context menu
/*document.querySelector('.two').oncontextmenu = function() {
    console.log('block-click-2');
    return false;
}*/
let width = 20;
let height = 20;
divFirst.onclick = function() {
    console.log(width + ' ' + height);
    this.style.width = width + 'px';
    this.style.height = height + 'px';
    width += 2;
    height += 2;
}

function getDataFromDiv(div) {
    console.log(div.innerHTML);
}
divFirst.ondblclick = function() {
    this.innerHTML = 'this is random ' + getRandomInt(100);
    getDataFromDiv(this);
}

document.querySelector('.second').onclick = function() {
    this.innerHTML = '2';
}
function getKeyCodeAndPastIt(event) {
    preOut.innerHTML = event.keyCode;
    return event.keyCode;
}
document.querySelector('.user-input').onkeypress = function(event) {
    if (!event.code.includes('Digit')) {
        getKeyCodeAndPastIt(event);
        out.innerHTML = 'true'
    } else {
        getKeyCodeAndPastIt(event);
        out.innerHTML = 'false'
    }
}
const one = document.querySelector('.Lesson');
one.style.color = '#ff0055'


/*
todo: Добавить и стилизовать див с событием клик, при клике увеличиваем его ширину и высоту на 15px

Добавить див с событием двойного клика. Написать функцию, которая будет запускаться при двойном клике и выводить в консоль данные, 
что есть внутри этого дива (написать произвольные данные внутри div)

Добавить картинку и при клике по ней заменять картинку на 2

Написать функцию, которая выводит в поле на странице код символа и возвращает его

Написать функцию, которая выведет false, если введена цифра
*/