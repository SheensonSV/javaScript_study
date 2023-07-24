
// let inp = document.querySelector('.input_class')
// let inp2 = document.querySelector('.input_class_2')
let btn = document.querySelector('.btn')
let btn2 = document.querySelector('.btn2')
let btn3 = document.querySelector('.btn3')
let out = document.querySelector('.out')

btn.onclick = function() {
    out.innerHTML = '';
    for (i = 1; i <= 50; i++) {
        out.innerHTML = out.innerHTML + ' ' + i;
    }
}

btn2.onclick = function() {
    out.innerHTML = '';
    for (i = 50; i >= 25; i--) {
        out.innerHTML = out.innerHTML + ' ' + i;
    }
}

btn3.onclick = function() {
    out.innerHTML = '';
    for (i = 2500; i <= 3000; i++) {
        if (i % 2 != 0) {
            out.innerHTML = out.innerHTML + ' ' + i;
        }
    }
}
let chars = 'l'.charCodeAt(0)
console.log(5 > '1')


const one = document.querySelector('.one');
one.style.color = '#ff0055'

