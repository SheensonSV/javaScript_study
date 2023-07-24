let btn = document.querySelector('.btn')
let btn2 = document.querySelector('.btn2')
let btn3 = document.querySelector('.btn3')
let btn4 = document.querySelector('.btn4')

let element = document.querySelector('.element')

let out = document.querySelector('.out')
let preOut = document.querySelector('.pre-out');


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

btn.onclick = function() {
    preOut.innerHTML = '';
    let arrayOfNumbers = [];
    for (i = 0; i < 12; i++) {
        arrayOfNumbers[i] = getRandomInt(100);
        preOut.innerHTML = preOut.innerHTML + ' ' + arrayOfNumbers[i];
        console.log('! ' + preOut.innerHTML);
    }
    console.log('//' + arrayOfNumbers[4]);
    out.innerHTML = arrayOfNumbers[4];
}

btn2.onclick = function() {
   let arrayOfNumbers = [1,2,3,4,5,6,7,8,9,10,11,12]
   for (value of arrayOfNumbers) {
        if(value % 2 === 0) {
            preOut.innerHTML = preOut.innerHTML + ' ' + value;
            console.log('! ' + preOut.innerHTML);
        }
   }
}
btn3.onclick = function() {
    let arrayOfNumbers = [1,2,3,4,5,6,7,8,9,10,11,12]
    for (value of arrayOfNumbers) {
         if(value % 2 === 1) {
            preOut.innerHTML = preOut.innerHTML + ' ' + value;
            console.log('! ' + preOut.innerHTML);
         }
    }
}
btn4.onclick = function() {
    let arrayOfNumbers = [
        [1,2,3,4,5,6,7,8,9,10,11,12]
    ]
    for (value of arrayOfNumbers) {
        
        for(i = (value.length - 1); i >= 0; i-- ) {
            preOut.innerHTML = preOut.innerHTML + ' ' + value[i];
            console.log('! ' + preOut.innerHTML);
        }
    }
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