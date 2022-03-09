const constantNumberOne = 1.8;
const constantNumberTwo = 32;

export const convertCelsiusToFahrenheit = (value:string) => {
    const fahrenheit = `${+value * constantNumberOne + constantNumberTwo}`;
    console.log(fahrenheit)
    return fahrenheit
}

export const convertFahrenheitToCelsius = (value:string) => {
    const celsius = `${(+value - constantNumberTwo) / constantNumberOne}`;
    console.log(celsius)
    return celsius;
}