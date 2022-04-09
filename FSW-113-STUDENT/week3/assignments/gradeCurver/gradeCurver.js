// declare each of the variables marked with "**" in the appropriate scope and using the appropriate type

// create an event listener that calls the curveGrade() function when the Curve It!! button is clicked

// create an event listener that resets the scores and grades to their defaults when the Reset button is clicked

const submitBtn = document.getElementById("submit");
let range = maxGrade - minGrade;

const  applyBell = (grade, index, ary) => {
    
    
    let gradeSlice = range / 5;
    switch (true) {
        case grade >= (mean + (gradeSlice * 2)): 
            console.log(grade);
            ary[index] = 'A'
            break
        case grade >= (mean + gradeSlice): 
            ary[index] = 'B'
            break
        case grade >= (mean):
            ary[index] = 'C'
            break
        case grade >= (mean - gradeSlice): 
            ary[index] = 'D'
            break
        default:
            ary[index] = 'F'
            break
    }
}

const  convertArray = (obj) => {
    let ary = obj.value.split(',').map( x => parseInt(x));
    return ary
}


// Condense the number of lines within the curveGrade() function as much as possible by converting 
// the functions to arrow functions. You can also condense the number of lines by combining some 
// separate lines of code into single lines. It currently has 18 lines of code. Without counting  
// empty lines, can you get the number of lines down to 8?


const showGrades = document.querySelector("#grades");
const resetGrades = document.querySelector("#reset");


const curveGrades = () => {
    
    const aryGrades = convertArray(document.querySelector("#scores"));
    console.log(aryGrades);

    const minGrade = aryGrades.reduce((a, b) => Math.min(a,b));
    const maxGrade = aryGrades.reduce((a, b) => Math.max(a,b)); 

    const sum = (accumulator, currentValue) => accumulator + currentValue;
    const sumGrades = (array) => array.reduce(sum);
    let mean = sumGrades(aryGrades) / aryGrades.length;

    console.log("Transformed array printing...");
    // write the value of aryGrades to the grades div in the HTML document
    showGrades.innerText = `${aryGrades.forEach(applyBell)}`;
};

submitBtn.addEventListener("click", curveGrades);
resetGrades.addEventListener("click", () => console.log('Hello World'));

