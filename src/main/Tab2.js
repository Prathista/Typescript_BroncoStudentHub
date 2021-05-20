var gradeValues = {
    'A': 4.0,
    'A-': 3.7,
    'B+': 3.3,
    'B': 3.0,
    'B-': 2.7,
    'C+': 2.3,
    'C': 2.0,
    'C-': 1.7,
    'D+': 1.3,
    'D': 1.0,
    'D-': 0.7,
    'F': 0.0
};
// gpacalc.onclick = function() {
function gpaCalc() {
    var totalGradePoints = 0;
    var totalCredits = 0;
    for (var i = 1; i <= 6; i++) {
        var grade = document.calcGpaForm['grade' + i].value.trim().toUpperCase();
        var credit = document.calcGpaForm['credit' + i].value.trim();
        // skip if no grade is entered
        if (grade == "") {
            break;
        }
        // check if grade is invalid
        if (!gradeValues.hasOwnProperty(grade)) {
            alert("'" + grade + "' is not a valid letter grade. Course " + i + ".");
            return;
            // check if credit is empty
        }
        else if (credit == "") {
            alert("You left the number of credits blank for Course " + i + ".");
            return;
            // check if credit is not a number
        }
        else if (isNaN(credit)) {
            alert("Enter a valid number of credits for Course " + i + ".");
            return;
        }
        credit = parseInt(credit, 10);
        //add
        totalGradePoints += gradeValues[grade] * credit;
        totalCredits += credit;
    }
    // check if total credits is > 0
    if (totalCredits == 0) {
        alert("Total credits cannot equal zero.");
        return;
    }
    //  GPA
    gpa.value = Math.round((totalGradePoints / totalCredits) * 10) / 10;
}
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}
/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}
