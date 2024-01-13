const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const temp_min = document.querySelector('.weather-min');
const temp_max = document.querySelector('.weather-max');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind = document.getElementById('wind-speed');

async function checkWeather(city, country_code){
    const api_key = "963f3e3b71955c3ac3217a35004721af"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country_code}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response => response.json());

    temperature.innerHTML = `${Math.round(weather_data.main.temp -
    273.15) * 9/5 +32}°F`;

    temp_min.innerHTML = `Low: ${Math.round(weather_data.main.temp_min - 
    273.15) * 9/5 +32}°F`;

    temp_max.innerHTML = `High: ${Math.round(weather_data.main.temp_max - 
    273.15) * 9/5 +32}°F`;

    description.innerHTML = `${weather_data.weather[0].description}`;

    humidity.innerHTML = `${weather_data.main.humidity}%`;

    wind.innerHTML = `${weather_data.wind.speed}mph`
    console.log(weather_data)

    switch(weather_data.weather[0].main){
        case 'Cloud':
            weather_img.src = "/assets/cloudy.png";
            break;
        case 'Clear':
            weather_img.src = "/assets/sun.png";
            break;
        case 'Rain':
            weather_img.src = "/assets/rainy.png";
            break;
        case 'Snow':
            weather_img.src = "/assets/snow.png";
            break;
        case 'Mist':
            weather_img.src = "/assets/fog.png";
            break;
    }

}
searchBtn.addEventListener('click', ()=>{
    checkWeather(inputBox.value);
});
