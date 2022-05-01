/* import the convertTemp.js and getDaylight.js scripts with 
their default export*/

import {dayOrNightFunction}  from './getDayight.js';
import {convertToF} from './convertTemp.js';

/*declare any variables needed*/
const cityInputValue = document.querySelector("#city");
/*


 create an event listener for the click
 of the goBttn that calls a function to fetch the weather data
*/
document.querySelector("#goBttn").addEventListener("click", callWeatherFunction);

/*

create a function that calls the
 function that queries the api 
and then creates promises that will call a 
function to write the weather data to the HTML page        
*/

function callWeatherFunction()
{
     fetchWeatherData()
     .then( async (response) => {
        const data = await response.json();
        writeWeatherData(data);

     })
     .catch(error => console.log(error));
}

/*
use an asynchronous call to fetches the current weather
for the specified city, awaits it, 
and returns the resulting data
*/

async function fetchWeatherData()
{
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInputValue.value}&appid=6e2a74544f540cd27acce68e701f97e3`);
    return response;
}

/*

create a function that writes the temperature 
(using local units), humidity, and conditions
this function should also change the background 
color of the weather app to blue during the daylight
hours at the specified city*/

function writeWeatherData(dataToWorkWith)
{
    
    const tempDataValue = document.querySelector("#tempData");
    const humidDataValue = document.querySelector("#humidData");
    const conditionsData = document.querySelector("#conditionsData");
    const weatherWrapper = document.querySelector(".weatherWrapper");
    console.log(dataToWorkWith);
    weatherWrapper.style.backgroundColor  = dayOrNightFunction(dataToWorkWith.sys.sunrise, dataToWorkWith.sys.sunset, dataToWorkWith.dt);
    tempDataValue.innerHTML = convertToF(dataToWorkWith.sys.country, dataToWorkWith.main.temp);
    humidDataValue.innerHTML = dataToWorkWith.main.humidity + "%";
    conditionsData.innerHTML = dataToWorkWith.weather[0].description;
}





