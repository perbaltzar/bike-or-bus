//

/**
 * return the temperature from SMHI API results.
 * @param  {Object} weather
 */
export const getTemp = weather => {
  return weather.parameters.filter(w => {
    return w.name === 't';
  })[0].values[0];
};

/**
 * return the precipitation from SMHI API results
 * @param  {Object} weather
 */
export const getRain = weather => {
  return weather.parameters.filter(w => {
    return w.name === 'pcat';
  })[0].values[0];
};

/**
 * return the wind speed from SMHI API results
 * @param  {Object} weather
 */
export const getWind = weather => {
  return weather.parameters.filter(w => {
    return w.name === 'ws';
  })[0].values[0];
};

/**
 * rewrite SMHI weather number to text
 * @param  {Int} precipitation
 */
export const whichPrecipitation = precipitation => {
  switch (precipitation) {
    case 0:
      return 'clear';
    case 1:
      return 'snow';
    case 2:
      return 'snow'; // snow & rain
    case 3:
      return 'rain';
    case 4:
      return 'rain'; // drizzle
    case 5:
      return 'rain'; // freezing rain
    case 6:
      return 'rain'; // freezing drizzle
    default:
      break;
  }
};

/**
 * rewrite SMHI weather symbol to text
 * @param  {Int} skyData
 */
export const whichSky = skyData => {
  switch (skyData) {
    case (1, 2):
      return 'clear';
    case (3, 4, 5, 6, 7):
      return 'cloudy';
    default:
      break;
  }
};
