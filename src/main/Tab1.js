function submit() {
    var grade1 = parseFloat(document.getElementById("grade1").value);
    if (grade1 == null)
        grade1 = 0;
    var grade2 = parseFloat(document.getElementById("grade2").value);
    if (grade2 == null)
        grade2 = 0;
    var grade3 = parseFloat(document.getElementById("grade3").value);
    if (grade3 == null)
        grade3 = 0;
    var grade4 = parseFloat(document.getElementById("grade4").value);
    if (grade4 == null)
        grade4 = 0;
    var weight1 = parseFloat(document.getElementById("weight1").value);
    if (weight1 == null)
        weight1 = 0;
    var weight2 = parseFloat(document.getElementById("weight2").value);
    if (weight2 == null)
        weight2 = 0;
    var weight3 = parseFloat(document.getElementById("weight3").value);
    if (weight3 == null)
        weight3 = 0;
    var weight4 = parseFloat(document.getElementById("weight4").value);
    if (weight4 == null)
        weight4 = 0;
    var grade = (grade1 * (weight1 / 100)) + (grade2 * (weight2 / 100)) + (grade3 * (weight3 / 100)) + (grade4 + (weight4 / 100));
    alert("Your final grade is a:" + grade);
}
