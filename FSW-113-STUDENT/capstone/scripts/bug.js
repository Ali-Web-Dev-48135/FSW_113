// Create a variable of the right kind and in the right place such that each new bug that is added can increment that number

class Bug {
    constructor(reportedBy, system, subSystem, bugDesc) {
        // This constructor should be set up to accept the four user-input values from index.html: 
        // reportedBy, system, subSystem, and bugDesc
        this.reportedBy = reportedBy;
        this.system = system;
        this.subSystem = subSystem;
        this.bugDesc = bugDesc;
    }

    addBug() {
        // Create a div element that displays the bug information input by the user within the "listWrapper" DOM element. 
        // It should also contain buttons whose onClick events will call the deleteBug() and resolveBug() methods (see below). 
        let parentBugContainer = document.querySelector("#listWrapper");
        let bugContainerDomElement = document.createElement("div");
        bugContainerDomElement.className = "bugContainer";
        // bugContainerDomElement.id = this.instanceCounter;
        bugContainerDomElement.innerHTML = `
            <h5>Reported By: ${this.reportedBy}</h5>
            <h5>System: ${this.system}/${this.subSystem}</h5>
            <p>${this.bugDesc}</p>
           <button class="deleteBtn">Delete &cross;</button>
           <button class="doneBtn">Done &check;</button>
        `;
        let buttonDomElements = bugContainerDomElement.querySelectorAll("button");
        buttonDomElements[0].addEventListener("click", this.deleteBug.bind(null, bugContainerDomElement));
        buttonDomElements[1].addEventListener("click", this.resolveBug.bind(null, bugContainerDomElement));
        parentBugContainer.append(bugContainerDomElement);
        
    }

    deleteBug(event) {
        // Create code that will remove the appropriate bug from the DOM. 
        // You may need to Google how to remove an element from the DOM.
        event.remove();
    }

    resolveBug(event) {
        // Create code that changes the appropriate bug report to a darker color
        // continure from here maybe add a new css style to background color.
        // adding the class to change the background color for the completed bug.
        event.classList.add("bugCompleteStyle");
        
    }
}

function reportBug(e) 
{
    e.preventDefault();
    // Create code that instantiates the Bug class with the data input by the 
    // user in the index.html form. Then call the method to add the new bug report.
    let reportedByValue = document.querySelector("#reportedBy").value;
    let systemValue = document.querySelector("#system").value;
    let subSystemValue = document.querySelector("#subSystem").value;
    let bugDescValue = document.querySelector("#bugDesc").value;

    // validating user input.
    if(reportedByValue === "" || subSystemValue === "" ||
       systemValue === "" || bugDescValue === ""
    ){
        alert("Please Enter All The Required Fields.");
        return;
    }
    let newBug = new Bug(reportedByValue, systemValue, subSystemValue, bugDescValue);
    newBug.addBug();


}

const resetFields = () =>
{
    let reportedByValue = document.querySelector("#reportedBy").value = "";
    let systemValue = document.querySelector("#system").value = "";
    let subSystemValue = document.querySelector("#subSystem").innerHTML = "";
    let bugDescValue = document.querySelector("#bugDesc").value = "";

}

document.querySelector("#submitBtn").addEventListener("click", reportBug);
document.querySelector("#resetBtn").addEventListener("click", resetFields);

