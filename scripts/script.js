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
    console.log("inside result")
    let calc;
    console.log(operand2)
    if(operand2 || operand2 == 0){
        console.log(calc)
        calc = eval(operand1 + active + operand2);
        displayer.value = calc;
        active = '';
        holder = '';
        operand2 = ''
        operand1 = calc;
    }
    console.log("OUT")
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

document.onkeypress = keyPress;

function keyPress(e) {
    e.preventDefault();
    var x = e || window.event;
    var key = (x.keyCode || x.which);
    if (key == 13 || key == 3) {
        result();
    } else if (key >= 48 && key <= 57) {
        var num = key - 48; 
        displayNumber(num);
    } else if (key == 43 || key == 45 || key == 42 || key == 47) { 
        var operator;
        switch(key) {
            case 43:
                operator = "+";
                break;
            case 45:
                operator = "-";
                break;
            case 42:
                operator = "*";
                break;
            case 47:
                operator = "/";
                break;
        }
        calculate(operator);
    } else if (key == 27) { // check if the pressed key is Escape
        clearing();
    }
}









