const displayer = document.querySelector('.displayer')
const mMarker = document.querySelector('.display__memory-indicator');

let m = 0;

let holder = '';
let active = '';
let operand1;
let operand2;
function displayNumber(e){
    holder = holder + e;
    if(!active){
        operand1 = parseFloat(holder);
        displayer.value = holder;
    }
    else{
        operand2 = parseFloat(holder);
        displayer.value = holder;
    }
}

function clearing(){
    active = '';
    holder = '';
    operand2 = ''
    operand1 = ''
    displayer.value = ''
}

function result(){
    let calc;
    if(operand2 || operand2 == 0){
        calc = eval(operand1 + active + operand2);
        displayer.value = calc;
        active = '';
        holder = '';
        operand2 = ''
        operand1 = calc;
    }
}

function calculate(operator){
    if(!active){
        holder = '';
    }
    if(active && holder){
        result();
    }
    if(operand1){
        active = operator;
    }
}

function clearMemory(){
    m = 0;
    mMarker.classList.remove('display__memory-indicator--active');
    displayer.value = m;
}

function memory(){
    displayer.value = m;
}

function memoryPlus(){
    mMarker.classList.add('display__memory-indicator--active');
    m = parseFloat(m) + parseFloat(displayer.value);
    holder = '';
    console.log(m)
}   

function memoryMinus(){
    mMarker.classList.add('display__memory-indicator--active');
    m = parseFloat(m) - parseFloat(displayer.value);
    holder = '';
    console.log(m)
} 

