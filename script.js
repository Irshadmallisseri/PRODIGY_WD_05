const apiKey = "283b8182f15397a7f073ca96ec61bd8e"
const fetchWeather = (event) => {

    event.preventDefault(event)

    const locationInput = document.getElementById('locationSearch')
    const location = document.getElementById('location')
    const temperature = document.getElementById('temperature')
    const weatherImage = document.getElementById('weatherImage')
    const weatherStatus = document.getElementById('weatherStatus')
    const humidity = document.getElementById('humidity')
    const windSpeed = document.getElementById('windSpeed')

    const locationText = locationInput.value

    fetch('http://api.weatherapi.com/v1/current.json?key=16ad1d4dc26f4ababf1162527232809&q='
        + locationText, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then((response) => response.json())
        .then((data) => {
            location.textContent = data.location.name
            temperature.textContent = data.current.temp_c
            weatherImage.src = 'https:' + data.current.condition.icon
            weatherStatus.textContent = data.current.condition.text
            humidity.textContent = data.current.humidity
            windSpeed.textContent = data.current.wind_kph
        })
        .catch((error) => {
            console.log(error)
            alert('Please provide a valid location name.')
        })
}