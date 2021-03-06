import React, { Component } from 'react';
import './App.css';
import Vehicle from '../Vehicle/';
import Weather from '../Weather/';
import Text from '../Text/';
import Footer from '../Footer';
import Button from '../Button';
import H1 from '../H1';
import bike from '../../bike.svg';
import bus from '../../bus.svg';
import clear from '../../sun.svg';
import rain from '../../rain.svg';
import snow from '../../snow.svg';


class App extends Component {

  state = {
    vehicle: bike,
    morningTemp: 0,
    morningWeather: clear,
    afternoonTemp: 0,
    afternoonWeather: clear,
    checked: false,
    reason: 'Go by Bike!'
  }

  componentDidMount(){
    const url = 'https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/11.9895/lat/57.7204/data.json';
    const date = new Date();
    let year = date.getFullYear();
    // Translating month to readable with API. 
    let month = (date.getMonth()+1);
    if (month < 10){
      month = `0${month}`;
    }
    console.log(year);
    fetch(url)
      .then(response => response.json())
      .then(json => {
        
        const day = this.checkDate(json.timeSeries[0].validTime);
        console.log(`${year} ${month} ${day}`)
        const bikeWeathers = json.timeSeries.filter(item => {
          return item.validTime === `${year}-${month}-${day}T08:00:00Z` ||
            item.validTime === `${year}-${month}-${day}T16:00:00Z`;
        })
        // GETTING TEMP AND PRECIPITATION
        const morningTemp = bikeWeathers[0].parameters.filter(bikeWeather => {
          return bikeWeather.name === "t";
        })[0].values[0];
        const morningRain = bikeWeathers[0].parameters.filter(bikeWeather => {
          return bikeWeather.name === "pcat";
        })[0].values[0];
        
        const afternoonTemp = bikeWeathers[1].parameters.filter(bikeWeather => {
          return bikeWeather.name === "t";
        })[0].values[0];
        const afternoonRain = bikeWeathers[1].parameters.filter(bikeWeather => {
          return bikeWeather.name === "pcat";
        })[0].values[0];
        
        const checkWeather = [
          {
            temp: morningTemp,
            rain: morningRain
          },
          {
            temp: afternoonTemp,
            rain: afternoonRain
          }
         ]
         
          this.setState({
            vehicle: this.shouldIGoByBike(checkWeather) ? bike : bus,
            morningTemp: morningTemp,
            morningWeather: this.whichPrecipitation(morningRain),
            afternoonTemp: afternoonTemp,
            afternoonWeather: this.whichPrecipitation(afternoonRain)
          });

      })
  }

  // Checking if it's past midnight. 
  checkDate = (currentTime) => {
    const hour = currentTime.substring(11, 13);
    let date = currentTime.substring(8, 10);
    if (hour > 8) {
      date++;
    }
    if (date.toString().length < 2){
      return (`0${date}`)
    }
    return (date);
  }
  whichPrecipitation = (precipitation) => {
        switch (precipitation) {
            case 0:
                return clear;
            case 1:
                return snow;
            case 2:
                return snow;
            case 3:
                return rain;
            case 4:
                return rain;
            case 5:
                return rain;
            case 6:
                return rain;
            default:
                break;
        }
    }

  shouldIGoByBike = (bikeWeathers) => {
    let isWeatherGoodEnoughForBike = true;
    bikeWeathers.forEach(bikeWeather => {
      if (bikeWeather.temp < 5) {
        isWeatherGoodEnoughForBike = false;
        this.setState ( {
          reason: 'It\'s Too Cold Outside!'
        }) 
      }
      if (bikeWeather.rain > 0) {
        isWeatherGoodEnoughForBike = false;
        this.setState({
          reason: 'It\'s Gonna Rain!'
        })
      }
    });
    return isWeatherGoodEnoughForBike;
  }

  handleClick = () => {
    this.setState({
      checked: true
    });
  }
  render() {
    return (
      <div className="App">
        <Text text="Should I" />
        <H1 text="BIKE-OR-BUS" />
        <Text text="To Yrgo Tomorrow?" />
        <Button text="Let's Check!" onClick={this.handleClick}/>
        <Vehicle image={this.state.vehicle}
                  names={this.state.checked ? 'vehicle-container active' : 'vehicle-container'}
                  reason={this.state.reason}
        >BIKE</Vehicle> 
        <div className="weather-container">
          <div>
            <Text text="Morning" />
            <Weather temperatur={this.state.morningTemp} weather={this.state.morningWeather} active={this.state.checked} />
          </div>
          <div>
            <Text text="Afternoon" />
            <Weather temperatur={this.state.afternoonTemp} weather={this.state.afternoonWeather} active={this.state.checked} />  
          </div>
        </div>
        <Footer text="© Per Baltzar"></Footer>
      </div>
    );
  }
}

export default App;
