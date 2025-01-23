// Weather API key and city
const apiKey = 'c70a7209d5d14ddaaa973609252301';
let city = prompt("Please Enter Your City Name");

// Fetch weather data from WeatherAPI
const weatherUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

async function getWeather() {
    try {
        const response = await fetch(weatherUrl)
        const data = await response.json();


    // Update weather info on the page
    document.getElementById('city-name').textContent = data.location.name;
    document.getElementById('temperature').textContent = data.current.temp_c;
    document.getElementById('weather-description').textContent = data.current.condition.text;
    document.getElementById('humidity').textContent = data.current.humidity;


    } catch(error){
        console.error('Error fetching weather data:', error);
    alert("Failed to load weather data. Please try again.");
    }
    
}

getWeather();