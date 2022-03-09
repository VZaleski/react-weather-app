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

const countDays = 8;
const date = new Date();
let numberDayWeek = date.getDay();

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

    const arrayWeekday = new Array(countDays).fill('');
    arrayWeekday.forEach((element, index, arr) => {
        if(numberDayWeek < days.length) {
            arr[index] = days[numberDayWeek];
            numberDayWeek++;
        } else {
            numberDayWeek = 0;
            arr[index] = days[numberDayWeek];
            numberDayWeek++;
        }
    })
    numberDayWeek = date.getDay();
    return {
        arrayMinTemp,
        arrayMaxTemp,
        arrayIcons,
        arrayWeekday,
    }
}