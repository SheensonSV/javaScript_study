
let inp = document.querySelector('.input_class')
 let inp2 = document.querySelector('.input_class_2')
let btn = document.querySelector('.btn')
// let btn2 = document.querySelector('.btn2')
// let btn3 = document.querySelector('.btn3')
let btnPlus = document.querySelector('.btn-plus')
let btnMinus = document.querySelector('.btn-minus')
let btnDevide = document.querySelector('.btn-devide')
let btnMulti = document.querySelector('.btn-multi')
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

btnPlus.onclick = function() {
    console.log('+');
    out.innerHTML = summ(+inp.value, +inp2.value);
}
btnMinus.onclick = function() {
    console.log('-');
    out.innerHTML = minus(+inp.value, +inp2.value);
}
btnDevide.onclick = function() {
    console.log('/');
    out.innerHTML = devide(+inp.value, +inp2.value);
}
btnMulti.onclick = function() {
    console.log('*');
    out.innerHTML = multiply(+inp.value, +inp2.value);
}
let a = 'a = 12';
btn.onclick = function() {
    console.log('*');
    out.innerHTML = '<div>' + a + '</div>';
}
let chars = 'l'.charCodeAt(0)
console.log(5 > '1')


const one = document.querySelector('.one');
one.style.color = '#ff0055'
