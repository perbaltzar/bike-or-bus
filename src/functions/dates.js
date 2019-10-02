// Functions for formatting the output of time and dates, and changing dates due to time of the day

/**
 * Fixes format for written month
 * @param  {int} month
 */
export const checkMonth = month => {
  if (month < 10) {
    return `0${month}`;
  }
  return month;
};

/**
 * Changing date due to time of day, and reformat it.
 * @param  {Date} today
 * @param  {Int} day
 */
export const checkDay = (today, day) => {
  if (today.getHours() > 9) {
    if (day < 9) return `0${day + 1}`;
    return day + 1;
  }
  if (day < 9) return `0${day}`;
  return day;
};
