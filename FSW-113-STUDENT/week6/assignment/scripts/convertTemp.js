/*This script should return the results 
of a function 
that converts the temperature 
provided by the api
(Kelvin).*/





/* Depending on the location of the city, 
the function should return 
degrees in either fahrenheit or centigrade.*/




export const convertToF = (country, temp) => {
    let convertedTemperature;
    if(country != "US")
    {
        const celcius = parseInt((temp - 273.15)); 
        return `${celcius}C`;
    }
    else
    {
        const farenheit = parseInt((temp - 273.15) * 1.8000 + 32.00); 
        return `${farenheit}F`;
    }
};

