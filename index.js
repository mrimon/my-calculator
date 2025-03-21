console.log("connected...");

const display = document.getElementById('calculate-display')

// append Number 
function appendNumber(value){
    display.value += value
}
function appendOperator(value){
    const currentValue = display.value;
    const lastChar = currentValue.slice(-1);
    if(['/', '*', '-', '+'].includes(lastChar)){
        display.value = currentValue.slice(0, -1) + value;
    }
    else{

        display.value+= value
    }
}
// clear display
function clearDisplay() {
    display.value='';
    
}
const calculateResult = ()=> {
    display.value = eval(display.value)
}
