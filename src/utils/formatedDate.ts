export function formatedDateWithoutWeekDay(date: string) {
  const d = new Date(date);

  const month = d.getMonth();
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  return `${months[month]} ${d.getDate()}, ${d.getFullYear()}`;
}

export function formatedDateWithWeekDay(date: string) {
  const d = new Date(date);

  const weekDay = d.getDay();
  const weekDays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednsday',
    'Thrusday',
    'Friday',
    'Saturday',
  ];

  const month = d.getMonth();
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  return `${weekDays[weekDay]}, ${months[month]} ${d.getDate()}, ${d.getFullYear()}`;
}
