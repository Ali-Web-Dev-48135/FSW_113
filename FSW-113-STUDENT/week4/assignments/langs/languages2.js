const lang = 'JavaScript'

// Create an event listener for the submit button that adds all 'input' elements to 
// a single array using the spread operator. Call the chkLang() function, passing in 
// the array as an argument.

const submitBtn = document.querySelector("button");
const queriedInputs = document.querySelectorAll("input");



const chkLang = langs => {
    let mergedArrays = [];
    // use an array method to check whether the user included 'JavaScript' in their
    // list of languages
    langs.forEach(element => mergedArrays.push(...element.value.split(" ")));
    let jsIncluded = mergedArrays.some(element => element === lang);
    let obj = document.querySelector('#TestResult');
    if (jsIncluded) 
        obj.innerText = `Congratulations!\nYou know ${lang}.`;
    else
        obj.innerText = `Sorry,\nyou don't know ${lang}.`;
}

submitBtn.addEventListener("click", chkLang.bind(null, queriedInputs));





