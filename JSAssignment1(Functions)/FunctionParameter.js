let firstNumber=function sendFirstNumber(){ return 5; }
function multiply(firstNumber){
    console.log(firstNumber)
    return firstNumber()*10;
}
console.log(multiply(firstNumber))