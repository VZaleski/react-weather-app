const baseUrlIcon = ' http://openweathermap.org/img/wn/'

export const currentWeatherIconFunction = (icon: string) => {
    const resultUrlIcon: string = `${baseUrlIcon}${icon}.png`
    return resultUrlIcon;
}