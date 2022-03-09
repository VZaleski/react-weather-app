const constantNumberOne = 1.8;
const constantNumberTwo = 32;

export const convertCelsiusToFahrenheit = (value:string) => {
    const numberFahrenheit: number = Math.round((+value * constantNumberOne + constantNumberTwo) * 100) / 100;
    const fahrenheit = `${numberFahrenheit}`;
    console.log(fahrenheit)
    return fahrenheit
}
