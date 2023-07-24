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
function converUnixTime(time) {
    let unix_timestamp = time
    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    let date = new Date(unix_timestamp * 1000);
    // Hours part from the timestamp
    let hours = date.getHours();
    // Minutes part from the timestamp
    let minutes = "0" + date.getMinutes();
    // Seconds part from the timestamp
    let seconds = "0" + date.getSeconds();

    // Will display time in 10:30:23 format
    let formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    console.log(formattedTime);
    return formattedTime;
}
btn.onclick = function() {
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=51&lon=46&appid=ddd559582ecfe3459cf24d928e320fe1')
    .then(function(resp) {return resp.json()})
    .then(function(data) {
        console.log(data);
        document.querySelector('.city').textContent = 'Город: ' + data.name;
        document.querySelector('.temperature').textContent = 'Температура: ' + String(+data.main.temp - 273).slice(0,4) + ' C';
        document.querySelector('.windSpeed').textContent = 'Скорость ветра: ' + data.wind.speed + ' m/c';
        document.querySelector('.humidity').textContent = 'Влажность: ' + data.main.humidity + ' %';
        document.querySelector('.country').textContent = 'Страна: ' + data.sys.country;
        document.querySelector('.sunrize').textContent = 'Восход: ' + converUnixTime(+data.sys.sunrise);
        document.querySelector('.suset').textContent = 'Закат: ' + converUnixTime(+data.sys.sunset);
        document.querySelector('.suset').textContent = 'Погода: ' + data.weather[0].description;
        document.querySelector('.icon').innerHTML = `<img src = 'https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png'>`;
    });
    /*
    base: "stations"
    clouds: {all: 1}
    cod: 200
    coord: {lon: 46, lat: 51}
    dt: 1689771466
    id: 542464
    main: {temp: 297.22, feels_like: 296.94, temp_min: 297.22, temp_max: 297.22, pressure: 1003, …}
    name: "Krasnoarmeysk"
    sys: {country: 'RU', sunrise: 1689728574, sunset: 1689786073}
    timezone: 14400
    visibility: 10000
    weather: [{…}]
    wind: {speed: 7.68, deg: 303, gust: 9.62}
    */
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