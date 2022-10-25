const key = 'd24754b8c30e5c609dc65e0c01db6f7d'
const cityname = 'accra'

const api = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${key}&units=metric`

let temp = document.getElementById('temp')
let feel = document.getElementById('feel')
let humidity = document.getElementById('humidity')
let rain = document.getElementById('rain')
let pressure = document.getElementById('pressure')
let desc = document.getElementById('desc')
let wind = document.getElementById('wind')
let date = document.getElementById('date')

let dates = new Date()

date.innerHTML = dates.toDateString()

fetch(api).then(response=>response.json())
 .then((data)=>{
    console.log(data)
    temp.innerHTML = data.main.temp
    feel.innerHTML = data.main.feels_like
    desc.innerHTML = data.weather[0].main
    humidity.innerHTML = data.main.humidity
    wind.innerHTML = data.wind.speed
    pressure.innerHTML = data.main.pressure
}).catch((error)=>{
    console.log(error)
})