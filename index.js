// declaring variables
let Btn1 = document.getElementById('btn1');
let Btn2 = document.getElementById('btn2');
let display = document.getElementById('output');
//function for finding and displaying the higher input
function Max() {
    let fstNum = parseInt(document.getElementById('input1').value);
    let secNum = parseInt(document.getElementById('input2').value);
    let answer1 = Math.max(fstNum, secNum);
    display.value = `Max: ` + answer1;
}
// function for finding and displaying the lower input
function Min() {
    let fstNum = parseInt(document.getElementById('input1').value);
    let secNum = parseInt(document.getElementById('input2').value);
    let answer2 = Math.min(fstNum, secNum);
    display.value = `Min: ` + answer2;
}

Btn1.addEventListener('click', Max);
Btn2.addEventListener('click', Min);