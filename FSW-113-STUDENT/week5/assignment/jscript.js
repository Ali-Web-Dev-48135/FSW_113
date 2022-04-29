// Declare any necessary variables.
// Button dom elements below.
const resetButtonElement = document.getElementById("reset");
const printCertificateElement = document.getElementById("print");

// Certificate input dom elements.
const studentNameCertificateElement = document.getElementById("certStudentName");
const studentClassNameCertificateElement = document.getElementById("certClassName");
const studentClassGradeCertificateElement = document.getElementById("certGrade");


// Add am evemt listener that responds to the click of the "print" button by calling a function to instantiate
//  a new student object, and another function to print the certificate.

const init = () => {
    
    // returning the student instance from the studentInstanceFunction function.
    let student = studentInstanceFunction();
    // console.log(student.ValidateInputs)();
    
    if(student.ValidateInputs() === 1) return;

        // getting and assigning the values for student name and class to the dom.
        studentNameCertificateElement.innerText = student.studentName;
        studentClassNameCertificateElement.innerText = student.studentClassName;

        // assigning the final grade to the certificate dom element.
        studentClassGradeCertificateElement.innerText = student.CalculateLetterGrade();    
    

};


// Add an event listener that responds to the click of the reset button by resetting all the values
// both in the form and in the certificate.

const resetStudentForm = () => {
    const inputFields = document.querySelectorAll("input");
    const certificateInputFields = [studentNameCertificateElement, studentClassNameCertificateElement, studentClassGradeCertificateElement];
    certificateInputFields.forEach(element => element.innerText = ""); // check this line later.
    inputFields.forEach(element => element.value = "");
};

resetButtonElement.addEventListener("click", resetStudentForm);

// Create a function that instantiates a new student object with the input from the HTML form.

const studentInstanceFunction = () => {
    
    let studentObject = new Student(
        document.getElementById("studentName").value,
        document.getElementById("className").value,
        convertStringToArray(document.getElementById("studentScores").value),
        convertStringToArray(document.getElementById("possibleScores").value)
    );
        return studentObject;
};

printCertificateElement.addEventListener("click", init);

// calculating grades from the string input converted to an array
// the calculation is being done through the class.

// Create a function that fills in the student's name, class name, and calculated grade on the certificate .
// done through the init function above.

// Create a function that converts the contents of a comma-separated text string to a numeric array.
// You can use this function when instantiating the arrays in the student object.
const convertStringToArray = (stringToConvert) => {
    return stringToConvert.split(",").map((number) => parseInt(number));
}

// The http-server paradigm was straight forward to understand and use.
// A promise to me is a function, or a special type of function which promieses to either do or don't fulfill a task.
//
