
let inp = document.querySelector('.input_class')
let inp2 = document.querySelector('.input_class_2')
let btn = document.querySelector('.btn')
let btn2 = document.querySelector('.btn2')
let out = document.querySelector('.out')

btn2.onclick = function() {
    let a = Number(inp.value);
    let b = Number(inp2.value);
    let sum = a + b;
    console.log('sum: ' + sum);
    if (sum > 15) {
        alert("Yes");
    } else {
        alert("No");
    }
}
btn.onclick = function() {
    let a = inp.value;
    let b = inp2.value;
    if (a === b) {
        out.innerHTML = "равны";
    } else {
        out.innerHTML = "НЕ равны";
    }
}

let chars = 'l'.charCodeAt(0)
console.log(5 > '1')


const one = document.querySelector('.one');
one.style.color = '#ff0055'

