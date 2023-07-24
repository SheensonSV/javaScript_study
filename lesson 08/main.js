
let inp = document.querySelector('.input_class')
 let inp2 = document.querySelector('.input_class_2')
let btn = document.querySelector('.btn')
let btn2 = document.querySelector('.btn2')
// let btn3 = document.querySelector('.btn3')
let btnPlus = document.querySelector('.btn-plus')
let btnMinus = document.querySelector('.btn-minus')
let btnDevide = document.querySelector('.btn-devide')
let btnMulti = document.querySelector('.btn-multi')
let element = document.querySelector('.element')
let btnErase = document.querySelector('.btn-erase')
let out = document.querySelector('.out')

function summ (a, b) {
    return a + b;
}
function minus (a, b) {
    return a - b;
}
function devide (a, b) {
    return a / b;
}
function multiply (a, b) {
    return a * b;
}

let stylesStrings = ['black', 'big', 'toCenter'];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function changeSizeButton(btn) {
    btn.style.height = '60px';
    btn.style.width = '60px';
}

btnPlus.onclick = function() {
    console.log('+');
    out.innerHTML = summ(+inp.value, +inp2.value);
    changeSizeButton(btnPlus);
}
btnMinus.onclick = function() {
    console.log('-');
    out.innerHTML = minus(+inp.value, +inp2.value);
    changeSizeButton(btnMinus);

}
btnDevide.onclick = function() {
    console.log('/');
    out.innerHTML = devide(+inp.value, +inp2.value);
    changeSizeButton(btnDevide);

}
btnMulti.onclick = function() {
    console.log('*');
    out.innerHTML = multiply(+inp.value, +inp2.value);
    changeSizeButton(btnMulti);

}

btn.onclick = function() {
    element.classList.add('black');
    console.log('black');
    element.classList.add('big');
    console.log('big');
    element.classList.add('toCenter');
    console.log('toCenter');
    console.log(btn2);
    console.log(btn);
}

btn2.onclick = function() {
    console.log('clicked erase');
    let rnd = getRandomInt(3);
    let styleFromArray = stylesStrings[rnd];
    console.log('rnd: ' + rnd + ' style: ' + styleFromArray);
    element.classList.remove(styleFromArray);
    element.setAttribute('date', '19.07.2023');
    console.log(element);
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