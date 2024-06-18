

const altura = document.querySelector("#altura");
const peso = document.querySelector("#peso");
const button = document.querySelector(".button");
const imc = document.querySelector("#imc");


let imcTetx = "";
let condicion = "";

button.addEventListener('click',event=>{
    
    if(peso.value === "" || altura.value === ""){
        return
    }

    imcTetx = parseFloat(peso.value)/ Math.pow(parseFloat(altura.value),2);
    console.log(imcTetx);

    if(imcTetx<18.5){
        condicion = "Baja";
    }else if(imcTetx<=24.9){
        condicion = "Normal";
    }else if(imcTetx<=29.9){
        condicion = "Normal";
    }else{
        condicion = "Sobrepeso";
    }
    
    imc.textContent  = condicion;

});

