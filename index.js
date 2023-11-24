// let array = [0,10,4,7,24,38,14,43,56];
// let Btn1 = document.getElementById('btn1');
// let Btn2 = document.getElementById('btn2');
// let display = document.getElementById('output')

// function Max(){
//     answer = Math.max(...array)
//     display.value = answer.tostring()
// }
// function Min(){
//     answer = Math.min(...array) 
//     display.value = answer.tostring()
// }

// Btn1.addEventListener('click',Max)
// Btn2.addEventListener('click',Min)

let array = [0, 10, 4, 7, 24, 38, 14, 43, 56];
let Btn1 = document.getElementById('btn1');
let Btn2 = document.getElementById('btn2');
let display = document.getElementById('output');

function Max() {
    let answer = Math.max(...array);
    display.innerText = answer.toString();
}

function Min() {
    let answer = Math.min(...array);
    display.innerText = answer.toString();
}

Btn1.addEventListener('click', Max);
Btn2.addEventListener('click', Min);