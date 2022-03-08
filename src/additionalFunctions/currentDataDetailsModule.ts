interface dataType {
    weather: { id:number }[],
    name: string,
    sys: { country:object },
    main: { humidity:string, temp: string },
    wind: { speed: string, deg: string},
}

const kelvin: number = 273.15;
const degOneEighth: number = 45;

const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];

const convertCelsius = (value: string) => {
    let tempKelvin: number = +value;
    return `${tempKelvin - kelvin}`;
}

const convertDegToText = (value: string) => {
    const numberValue: number = +value;
    const indexDirections: number = Math.round(numberValue / degOneEighth);
    return directions[indexDirections];
}

export const getWeatherData = (data: dataType) => {
    const city = data.name;
    const country = data.sys.country;
    const tempCelsius = convertCelsius(data.main.temp);
    const wind = `${data.wind.speed} KPH ${convertDegToText(data.wind.deg)}`;
    const humidity = `${data.main.humidity}`
    /*return {
        city,
        country,
        temperature: tempCelsius,
        humidity,
        wind,
    }*/
}