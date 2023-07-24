console.log(typeof(1));
console.log(typeof(1.2));
console.log(typeof(1,2555));
console.log(typeof('2'));
console.log(typeof("text"));
console.log(typeof(true));
console.log(typeof(99999999n ));

let day = 13;
let month = '08';
let year = 1985
console.log(day + '.' + month + '.' + year);
console.log(`year ${year}`);

let btn = document.querySelector('.btn')
btn.onclick = function() {
    alert(day + '.' + month + '.' + year);
}
let birthDay = day + month + year;

const one = document.querySelector('.one');
one.innerHTML = one.textContent + " _ " + birthDay;
let myName = "Sergei";
console.log('Добро '+'пожаловать'+' на курс ' + myName);

