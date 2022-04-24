// Create a class called Student whose constructor maintains all four
// data inputs from the HTML page.
// The class should also contain the following methods:
// - a method that adds up all the student's scores
// - a method that adds up all the possible scores
// - a method that calculates the student's letter grade 
//(divide the student's score by the possible scores and use the resulting decimal to 
//determine grade)


class Student{
    
    constructor(name, className, studentScores, possibleScores) {
        this.studentName = name;
        this.studentClassName = className;

        // Array of student test scores.
        this.studentScores = studentScores;
        // Array of student max possible scores;
        this.possibleScores = possibleScores;
        
    }

    // maybe delete this validating method or refactor.
    ValidateInputs() 
    {
        if(this.studentName === "" ||
           this.studentClassName === "" ||
           this.studentScores === "" ||
           this.possibleScores === ""
           )
           {
            alert("Please enter all required fields!");
            return 1;
           }
        else 
        {
            return 0;
        }
        
    }
    AddingStudentScores()
    {
        
        return this.studentScores.reduce((p, c) => p + c, 0);
    }

    AddingPossibleScores() 
    {
        return this.possibleScores.reduce((p, c) => p + c, 0);
    }

    CalculateLetterGrade() 
    {
        
        let score = this.AddingStudentScores();
        let possibleScore = this.AddingPossibleScores();

        let letterGradeVal = Number((score/ possibleScore).toFixed(1));
        if(letterGradeVal <= 0.3)
        {
            return "F";
        } 
        else if(letterGradeVal <= 0.6)
        {
            return "D";
        }
        else if(letterGradeVal <= 0.7)
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

