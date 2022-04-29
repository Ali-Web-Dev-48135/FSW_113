/*This script should return the results 
of a function 
that converts the temperature 
provided by the api
(Kelvin).*/





/* Depending on the location of the city, 
the function should return 
degrees in either fahrenheit or centigrade.*/




export const convertToF = (dataToCheck) => {
    if(!dataToCheck.sys.country === "US")
    {
        
        return `${dataToCheck.main.temp * 10 - 273.15}C`;
    }
    else
    {
        const farenheit = parseInt((dataToCheck.main.temp - 273.15) * 1.8000 + 32.00); 
        return `${farenheit}F`;
    }
};

