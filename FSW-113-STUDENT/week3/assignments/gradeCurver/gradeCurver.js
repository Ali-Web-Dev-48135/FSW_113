
// declare each of the variables marked with "**" in the appropriate scope and using the appropriate type

let range = 0;
let gradeSlice = 0;
let mean = 0;

// create an event listener that calls the curveGrade() function when the Curve It!! button is clicked
const submitBtn = document.getElementById("submit");

// create an event listener that resets the scores and grades to their defaults when the Reset button is clicked

function applyBell(grade, index, ary) {
    switch (true) {
        case grade >= (mean + (gradeSlice * 2)): 
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
    document.getElementById("grades").innerText = ary.toString();
}

const  convertArray = (obj) => {
    let ary = obj.value.split(',').map( (x) =>  parseInt(x));
    return ary
}

// Condense the number of lines within the curveGrade() function as much as possible by converting 
// the functions to arrow functions. You can also condense the number of lines by combining some 
// separate lines of code into single lines. It currently has 18 lines of code. Without counting  
// empty lines, can you get the number of lines down to 8?

function curveGrades() {
    
    const sumGrades = array => array.reduce((accumulator, currentValue) => accumulator + currentValue);

    const  aryGrades = convertArray(document.querySelector('#scores'));

    let minGrade =  aryGrades.reduce((a, b) => Math.min(a, b));
    
    let maxGrade = aryGrades.reduce((a, b) =>  Math.max(a, b));
    
    mean = sumGrades(aryGrades) / aryGrades.length;
    
    range = maxGrade - minGrade;

    gradeSlice = range / 5;

    aryGrades.forEach(applyBell);

    
   
    // write the value of aryGrades to the grades div in the HTML document.
   // added the above comment logic on line 31.
    
}

const resetHandler = () => {
    document.getElementById("scores").value = "";
    document.getElementById("grades").innerText = "Curved Grades Show Here";
};

const resetBtn = document.getElementById("reset");
resetBtn.addEventListener("click", resetHandler);
submitBtn.addEventListener("click", curveGrades);