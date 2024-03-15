const url = 'https://api.openweathermap.org/data/2.5/'
const key = 'aaa8e38d8e44989cb36339f262673e34'

const setQuery = (e) => {
if(e.keyCode == '13')
getResult(searchBar.value)

}

const getResult = (cityName) => {
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
    fetch(query)
    .then(weather => {
        return weather.json()
    })
    .then(displayResult)
}

const displayResult = (result) =>{
let city = document.querySelector('.city')
city.innerText = `${result.name}, ${result.sys.country}` 
let temp = document.querySelector('.temp')
temp.innerText = `${result.main.temp}°C`
let desc= document.querySelector('.desc')
desc.innerText = result.weather[0].description
let minmax= document.querySelector('.minmax')
minmax.innerText = `${Math.round(result.main.temp_min)}°c /${Math.round(result.main.temp_max)}°c`

}

const searchBar = document.getElementById('searchBar')
searchBar.addEventListener('keypress',setQuery)