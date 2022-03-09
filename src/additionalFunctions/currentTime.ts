const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];

export const currentTimeFunction = () => {
    const date = new Date();
    const numberDayWeek = date.getDay();
    let hours = date.getHours();
    let formatAmPm: string;
    if(hours >= 12) {
        formatAmPm = 'PM'
    } else {
        formatAmPm = 'AM'
    }
    hours = hours % 12;
    if (hours === 0) {
        hours = 12;
    }
    const time = hours + formatAmPm;
    return {
        weekday: days[numberDayWeek],
        time: time,
    }
}
