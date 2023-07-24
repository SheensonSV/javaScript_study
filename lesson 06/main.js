
let inp = document.querySelector('.input_class')
// let inp2 = document.querySelector('.input_class_2')
let btn = document.querySelector('.btn')
let btn2 = document.querySelector('.btn2')
let btn3 = document.querySelector('.btn3')
let out = document.querySelector('.out')

btn.onclick = function() {
    const a = 2;
    let b = +prompt("угадай число.");
    console.log(a);console.log(b + ' ' + typeof b); 
    
    switch(typeof b) {
        case "number":
            switch(b) {
                case (a): 
                    out.innerHTML = 'угадал';
                    break
                default: 
                out.innerHTML = 'He угадал';
            }
            break
        case "NaN": 
            out.innerHTML = 'He cpaboTa/\\o!';
            break
        default:
            out.innerHTML = 'He cpaboTa/\\o!'; 
    }
    
}

btn2.onclick = function() {
    let b = prompt('vvedi chislo mezhdu 1 - 12');
    switch(+b) {
        case (1): 
            out.innerHTML = 'Zima';
            break;
        case (2): 
            out.innerHTML = 'Zima';
            break;
        case (3): 
            out.innerHTML = 'Zima';
            break;
        case (4): 
            out.innerHTML = 'Vesna';
            break;
        case (5): 
            out.innerHTML = 'Vesna';
            break;
        case (6): 
            out.innerHTML = 'Vesna';
            break;
        case (7):  
            out.innerHTML = 'Leto';
            break;
        case (8):  
            out.innerHTML = 'Leto';
            break;
        case (9):  
            out.innerHTML = 'Leto';
            break;
        case (10):  
            out.innerHTML = 'Zima';
            break;
        case (11):  
            out.innerHTML = 'Zima';
            break;
        case (12):  
            out.innerHTML = 'Zima';
            break;
        default:
            out.innerHTML = 'ne to chislo';
    }
}

btn3.onclick = function() {
    let a = null;
    let b = 'b';
    let c = 'c';
    
    alert(a ?? b ?? c);
}

let chars = 'l'.charCodeAt(0)
console.log(5 > '1')


const one = document.querySelector('.one');
one.style.color = '#ff0055'

