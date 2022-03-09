import {convertCelsius} from "./currentDataDetailsModule";

interface dataType {
    daily: {
        temp: {
            max: number,
            min: number
        },
        weather: {
            icon: string
        }[],
    }[],
}

const baseUrlIcon = ' http://openweathermap.org/img/wn/';
const days = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat'
];


export const dataDaysModule = (data: dataType) => {
    const arrayMaxTemp = data.daily.map((element) => {
        return convertCelsius(`${element.temp.max}`);
    });
    const arrayMinTemp = data.daily.map((element) => {
        return convertCelsius(`${element.temp.min}`);
    });
    const arrayIcons = data.daily.map((element) => {
        return `${baseUrlIcon}${element.weather[0].icon}.png`;
    });
    return {
        arrayMinTemp,
        arrayMaxTemp,
        arrayIcons,
    }
}