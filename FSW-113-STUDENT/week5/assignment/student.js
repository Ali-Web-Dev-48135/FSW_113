// Create a class called Student whose constructor maintains all four
// data inputs from the HTML page.
// The class should also contain the following methods:
// - a method that adds up all the student's scores
// - a method that adds up all the possible scores
// - a method that calculates the student's letter grade 
//(divide the student's score by the possible scores and use the resulting decimal to 
//determine grade)


class Student{
        // let studentNameElement = document.getElementById("studentName");
        // const classNameElement = document.getElementById("className");
        // const studentScoresElement = document.getElementById("studentScores");    
        // const possibleScoresElement = document.getElementById("possibleScores");
    
    constructor() {
        this.studentNameDomElement = document.getElementById("studentName").value;
        this.classNameDomElement = document.getElementById("className").value;
        this.studentScoresDomELement = document.getElementById("studentScores").value;
        this.possibleScoresDomElement = document.getElementById("possibleScores").value
        this.ValidateInputs();
    }

    ValidateInputs() 
    {
        if(this.studentNameDomElement.value === "" ||
           this.classNameDomElement.value === "" ||
           this.studentScoresDomELement.value === "" ||
           this.possibleScoresDomElement.value === ""
           )
           alert("Please enter all required fields!");
           
           return;
        
    }
    AddingStudentScores(array)
    {
        
        return array.reduce((p, c) => p + c);
    }

    AddingPossibleScores(array) 
    {
        return array.reduce((p, c) => p + c);
    }

    CalculateLetterGrade(score, possibleScore) 
    {
        // let studentGrade = this.AddingStudentScores();
        // let possibleGrade = this.AddingPossibleScores();

        let letterGradeVal = Number((score/ possibleScore).toFixed(1));
        if(letterGradeVal <= 0.3)
        {
            return "D";
        } 
        else if(letterGradeVal <= 0.6)
        {
            return "C";
        }
        else if(letterGradeVal <= 0.8)
        {
            return "B";
        }
        else if(letterGradeVal <= 0.9)
        {
            return "A";
        }
        else
        {
            return "A+";
        }
    }

    // class method for printing out the values for debugging.
    ConsoleStudentDetails()
    {
        const studentObject = {
            studentName : this.studentNameDomElement,
            studentClass: this.classNameDomElement,
            studentScores: this.studentScoresDomELement,
            studentPossibleScores: this.possibleScoresDomElement,
        }        
    }

}

