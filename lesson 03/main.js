
let inp = document.querySelector('.input_class')
let inp2 = document.querySelector('.input_class_2')
let btn = document.querySelector('.btn')
let btn2 = document.querySelector('.btn2')
let out = document.querySelector('.out')

btn.onclick = function() {
    let e = inp.value;
    console.log(e);
    let pr = prompt("че за?")
    out.innerHTML = e + pr;
    inp.value = '';
}
btn2.onclick = function() {
    let valueFromPrompt = prompt("Введи число по братски!?")
    if (valueFromPrompt >= 100) {
        out.innerHTML = 'value > 100';
    }
    else if (valueFromPrompt < 100) {
        console.log("valueFromPrompt < 100");
        out.innerHTML = '';
    } else {
        alert('вы ввели что то не то.');
    }
}

let chars = 'l'.charCodeAt(0)
console.log(5 > '1')


const one = document.querySelector('.one');
one.style.color = '#ff0055'

