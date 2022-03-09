interface dataType {
    name: string,
    country: string,
    current: {
        weather: { icon: string, description: string }[],
        humidity: string,
        temp: string,
        wind_deg: string,
        wind_speed: string,
    },
    list: { main: { aqi: string } }[],
}

const degOneEighth: number = 45;
const baseUrlIcon = ' http://openweathermap.org/img/wn/'
const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];

export const convertCelsius = (value: string) => {
    const kelvin: number = 273.15;
    let tempKelvin: number = +value;
    return `${Math.round(tempKelvin - kelvin)}`;
}

const convertDegToText = (value: string) => {
    const numberValue: number = +value;
    const indexDirections: number = Math.round(numberValue / degOneEighth);
    return directions[indexDirections];
}

const getCurrentWeatherIcon= (icon: string) => {
    const resultUrlIcon: string = `${baseUrlIcon}${icon}.png`
    return resultUrlIcon;
}

const convertNumberToTextAirQuality = (value: string) => {
    switch (value) {
        case '1':
            return 'Good'
        case '2':
            return 'Fair'
        case '3':
            return 'Moderate'
        case '4':
            return 'Poor'
        case '5':
            return 'Very Poor'
        default:
            return 'Error'
    }
}


export const getWeatherData = (data: dataType) => {
    const city = data.name;
    const country = data.country;
    const tempCelsius = convertCelsius(data.current.temp);
    const wind = `${data.current.wind_speed} KPH ${convertDegToText(data.current.wind_deg)}`;
    const humidity = `${data.current.humidity}%`
    const icon = getCurrentWeatherIcon(data.current.weather[0].icon);
    const airQuality = convertNumberToTextAirQuality(`${data.list[0].main.aqi}`);
    const description = data.current.weather[0].description
    return {
        city,
        country,
        temperature: tempCelsius,
        humidity,
        wind,
        icon,
        airQuality,
        description
    }
}