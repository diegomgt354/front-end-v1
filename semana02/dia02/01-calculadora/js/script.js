

const input = document.querySelector("#input");
const buttons = document.querySelectorAll(".button");
const historial = document.querySelector("#historial");

let numActual = '';
let operador = '';
let operando = '';
let historyTxt = '';
let validateClear = true

buttons.forEach(button=>{
    button.addEventListener('click',(event)=>{
        const btnText = event.target.textContent;

        if('+-*'.includes(btnText)){
            operador = btnText;
            operando = Number(numActual)
            numActual = '0'
        }else if(btnText === '='){

            if(operador === '+'){
                numActual = Number(operando) + Number(numActual);
            }
            if(operador === '-'){
                numActual = Number(operando) - Number(numActual);
            }
            if(operador === '*'){
                numActual = Number(operando) * Number(numActual);
            }

            historyTxt = historyTxt + btnText + numActual;
            validateClear = false

        }else if(btnText === 'AC'){
            numActual = '0';
            operador = '';
            operando = '';
            historyTxt = '0';
        }else{
            if(validateClear){
                numActual = Number(numActual + btnText);
            }else{
                // input.value = '0';
                numActual = Number(btnText);
            }
            validateClear = true
        }

        if(btnText !== '=' && btnText !=='AC'){

            historyTxt = historyTxt + btnText;
        }

        input.value = numActual;
        historial.textContent  = historyTxt;
    })
});
