/* This script should return the results of a 
function that use data from the api to determine 
whether it*/ 

/*is daylight in the specified city. It should
 return "blue" and "black" if night time.*/


export const dayOrNightFunction = (dataToWorkWith) => {
  if(dataToWorkWith.dt > dataToWorkWith.sys.sunrise)
  {
    return "black";
  }
  else
  {
    return "blue";
  }

};


