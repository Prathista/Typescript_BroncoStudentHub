function checkStatus(GPA) {

    const gpa = parseFloat(GPA);
    if (gpa >= 3.0 && gpa <= 4.0) {
        alert("Congratulations! You are at Good Standing!");
    } else if (gpa<3.0){
        alert("Unfortunately, your GPA is not at Good Standing. " +
            "Your GPA either puts you on Probation/Probation with Controct or At-Risk" +
            "Please contact your advisor and read the information on this page to get more details.");
    }else{
        alert("Invalid or Null Input, Please Try Again!");
    }

}

function checkCollege(College) {

    const gpa = parseFloat(College);
    if (gpa >= 3.0 && gpa <= 4.0) {
        alert("Congratulations! You are at Good Standing!");
    } else if (gpa<3.0){
        alert("Unfortunately, your GPA is not at Good Standing. " +
            "Your GPA either puts you on Probation/Probation with Controct or At-Risk" +
            "Please contact your advisor and read the information on this page to get more details.");
    }else{
        alert("Invalid or Null Input, Please Try Again!");
    }

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





