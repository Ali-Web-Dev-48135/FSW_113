// Call the "getSystems()" function in such a way that when the page loads, the "system" select element displays the three sytems 
// whose parentID is zero.



async function getSystems(parentId, DomELement) {
    // This function will accept two arguments (see week three): the parentID and the DOM element that will ultimately receive the data. 
    // Code this function as an asynchronous operation that will fetch data from the data.json file (see week three).
    // After receiving the JSON data, the asynchronous promise should use a higher order array method (see week two) to return only 
    // those items from the JSON that have the matching parentID. That promise should then call a function that passes two parameters, 
    // this new array and the DOM element to the "populateDD" function (below).

    // Note that although a number being passed as a parameter into a function may look like a numeral, it may be a string value 
    // instead, and may need to be converted to an integer. 

    let response = await fetch("./data.json")
    .then(async response => {
        const responseData = await response.json();
        const filteredParentIdArray = [responseData.systems.find(element => element.sysName === parentId)];
        const formedArrayFromParentId = [responseData.systems.filter(element => element.parentID === filteredParentIdArray[0].sysID)];
        
        // passing the filtered array to populateDD function.
        populateDD(formedArrayFromParentId, DomELement);
    })
    .catch(error => console.log(error));

}

function populateDD(systemsJsonArray, DomElement) {
    // This function receives the array and DOM element from the "getSystems()" function (above). This function should fill the 
    // appropriate DOM element with options from which the user can select. However, since that DOM element has an "onChange" event, this
    // function first needs to add an option that says "Select an Item". Then use a looping mechanism (week one) to create the rest of  
    // the select element's options using the sysName and sysID from the passed in array (see week five).
    
    let childNodeArray = [...DomElement.childNodes];
    for(let i = 0; i < childNodeArray.length; i++)
    {
        DomElement.removeChild(childNodeArray[i]);
    }
    // creating a new array with the proper structure to loop over and populate the #subSystem DomElement.

    const DESTRUCTED_ARRAY = [...systemsJsonArray[0]];
    DESTRUCTED_ARRAY.forEach(element => {
        let optionDomElement = document.createElement("option");
        optionDomElement.value = element.sysName;
        optionDomElement.innerText = `${element.sysName}`;
        DomElement.append(optionDomElement);
    });
}

document.querySelector('#system').addEventListener("change", () => {
    //This eventListener responds to a change to the "system" select element by passing the selected value from the "system" element 
    // to the "getSystems()" function along with the "subSystem" DOM element so that the second drop-down list is populated with the 
    // appropriate sub-systems from the data.json file.
     const SUB_SYSTEM_DOM_ELEMENT = document.querySelector("#subSystem");
     const DEFAULT_VALUE = "defaultVal";
     let systemValue = document.querySelector("#system").value;
     if(systemValue === DEFAULT_VALUE)
     {
        alert("Select one of the following to filter, Operations , Sales or Customer Support");
        return;
     }
     getSystems(systemValue, SUB_SYSTEM_DOM_ELEMENT);
})



// populate the system select DomElement.

const populateSystemFunction =  async () => {
    // querying the #system dom element and appending the default option.
    const SYSTEM_SELECT_DOM_ELEMENT = document.querySelector("#system");
    const DEFAULT_OPTION_VALUE = document.createElement("option");
    DEFAULT_OPTION_VALUE.value = "defaultVal";
    DEFAULT_OPTION_VALUE.innerText = "Select An Item";
    SYSTEM_SELECT_DOM_ELEMENT.append(DEFAULT_OPTION_VALUE);

    // fetching and filtering the elements where parent ID is zero.
    const dataJsonResponse = await fetch("./data.json");
    const responseParsed = await dataJsonResponse.json();
    const filteredParentIdZeroArray = [...responseParsed.systems.filter(element => element.parentID === 0)];

    // looping over the ParentID zero object array and creating options elements for each one.
    filteredParentIdZeroArray.forEach(element => {
        let newOption = document.createElement("option");
        newOption.value = element.sysName;
        newOption.innerText = element.sysName;
        SYSTEM_SELECT_DOM_ELEMENT.append(newOption);
    });
};

populateSystemFunction();


