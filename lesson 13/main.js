let btn = document.querySelector('.btn')

let input = document.querySelector('.user-input')
let element = document.querySelector('.element')

let out = document.querySelector('.out')
let preOut = document.querySelector('.pre-out');
let divFirst = document.querySelector('.first');

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
let a = [1,2,3];
btn.onclick = function() {
    localStorage.setItem('arr', a);
    localStorage.setItem('arrJson', JSON.stringify(new Array('one', 'two', 'three')));
    out.innerHTML = localStorage.getItem('arr')[2];
    console.log(localStorage.getItem('arrJson'));

}

let xHTTP = new XMLHttpRequest();
xHTTP.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
        
        console.log(this.responseText);
    }
}

xHTTP.open('GET', 'https://automarine.ru', true);
xHTTP.send();

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