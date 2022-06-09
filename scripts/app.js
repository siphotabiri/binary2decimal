let binaryNumber;
let decimalNumber;
let displayNumber;

const btn = document.getElementById('convert');

function converter (){

    binaryNumber = document.getElementById('bnumber');

    binaryNumber = binaryNumber.value;

    binaryNumber = Number(binaryNumber);

    decimalNumber = parseInt(binaryNumber, 2);

    displayNumber = document.getElementById('dnumber');

    displayNumber.value = decimalNumber;
}

btn.addEventListener('click', converter);
