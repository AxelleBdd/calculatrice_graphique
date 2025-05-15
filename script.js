// Déclaration des variables
let operation = [];
let display = document.getElementById('display');

//Déclaration des fonctions
function printValue(value){
    operation.push(value);
    display.innerText = operation.join('');
}

function deleteValue() {
    display.innerText = "";
    operation = [];
}

function calculate(){
    let stringOperation = operation.join('');
    let stringOperationArray = stringOperation.split("+");
    let numberOperationArray = stringOperationArray.map(Number);
    let sum = 0;
    numberOperationArray.map(number => sum += number);
    display.innerText = sum;
}