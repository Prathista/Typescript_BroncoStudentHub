function submit() {
    var grade1 = 0;
    var grade2 = 0;
    var grade3 = 0;
    var grade4 = 0;
    var weight1 = 0;
    var weight2 = 0;
    var weight3 = 0
    var weight4 = 0;
    var g1 = parseFloat((<HTMLInputElement>document.getElementById("grade1")).value);
    if (g1 >= 0 && g1 <= 100)
        grade1 = g1;
    var g2 = parseFloat((<HTMLInputElement>document.getElementById("grade2")).value);
    if (g2 >= 0 && g2 <= 100)
        grade2 = g2;
    var g3 = parseFloat((<HTMLInputElement>document.getElementById("grade3")).value);
    if (g3 >= 0 && g3 <= 100)
        grade3 = g3;
    var g4 = parseFloat((<HTMLInputElement>document.getElementById("grade4")).value);
    if (g4 >= 0 && g4 <= 100)
        grade4 = g4;
    var w1 = parseFloat((<HTMLInputElement>document.getElementById("weight1")).value);
    if (w1 >= 0 && w1 <= 100)
        weight1 = w1;
    var w2 = parseFloat((<HTMLInputElement>document.getElementById("weight2")).value);
    if (w2 >= 0 && w2 <= 100)
        weight2 = w2;
    var w3 = parseFloat((<HTMLInputElement>document.getElementById("weight3")).value);
    if (w3 >= 0 && w3 <= 100)
        weight3 = w3;
    var w4 = parseFloat((<HTMLInputElement>document.getElementById("weight4")).value);
    if (w4 >= 0 && w4 <= 100)
        weight4 = w4;
    var grade = (grade1*(weight1/100))+ (grade2*(weight2/100))+ (grade3*(weight3/100))+ (grade4+(weight4/100))
    alert("Your final grade is a:" + grade);
}