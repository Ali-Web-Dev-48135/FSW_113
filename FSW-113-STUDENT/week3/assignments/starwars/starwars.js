// declare any necessary variables



// define a function called 'fetchData()' that passes the values from 
// the 'queryType' and 'itemID' elements in starwars.html to the function 
// called 'getFromSWAPI()'
const queryTypeElement = document.getElementById("queryType");
const fetchData = () => {
    
    let itemIDElement = document.querySelector("#itemID");
    if(itemIDElement.value < 1 || itemIDElement.value > 10) {
        alert("Please enter a valid positive ID Between 1 And 10!");
        itemIDElement.value = "";
        return;
    }
    getFromSWAPI(queryTypeElement.value, itemIDElement.value);

}


const  getFromSWAPI = (queryType, itemID) => {
    // assign values to any necessary variables
    const nameDomElement = document.getElementById("dataLabel1");
    const nameDomValue = document.getElementById("dataValue1");
    const descDomElement = document.getElementById("dataLabel2");
    const descDomValue = document.getElementById("dataValue2");

    fetch(`https://swapi.dev/api/${queryType}`)
    .then((response) => {
        return response.json();
    })
    .then((data) => {

        
        updateInfo(data,itemID,nameDomElement, nameDomValue, descDomElement, descDomValue);
    })
    .catch(function(err) {
        console.warn(err);
    })
}


// create a new function called 'updateInfo()' that receives the data from 
// the call to that function (see above). Use logic to write the appropriate
//labels to 'dataLabel1' and 'dataLabel2' elements in starwars.html, as well
// as the appropriate values from the data object to the 'dataValue1' and 
// 'dataValue2' elements in starwars.html.

const updateInfo = (dataToOutput,dataIndex, nameEl, nameVal, descEl, descVal ) => {
    
    const resultArray = {...dataToOutput.results[dataIndex - 1]};
    let keyPair = Object.keys(resultArray);
    let valuePair = Object.values(resultArray);
    let dynamicString = queryTypeElement.value === "people" ? "Person": queryTypeElement.value;
    nameEl.innerText = `${dynamicString} ${keyPair[0].replace("_", " ")}:`;
    nameVal.innerText = `${valuePair[0].replace("_", " ")}`;
    descEl.innerText = `${keyPair[3].replace("_", " ")}:`;
    descVal.innerText = `${valuePair[3].replace("_", " ")}`;
};

