// ejercicios
// retorna true si dos string tiene la misma longitud sino devolver false

const sameLength = (str1, str2) => {
    let validate = false;
    if (str1.length === str2.length) {
        validate = true
    }
    return validate;
}

console.log(sameLength("hola", "hola"));
console.log(sameLength("hola", "chau chau"));

// 2. Retornar true si un numero es menor que 40 sino devolver false
// 3. Retornar True si un numero es menor que 60 sino devolver False

const numberMinor = (num, numberMax) => {
    let validate = false;
    if (num<numberMax) {
        validate = true
    }
    return validate;
}
console.log(numberMinor(20,40));
console.log(numberMinor(41,40));

console.log(numberMinor(40,60));
console.log(numberMinor(61,60));



// 4. Retornar True si un numero es par sino devolver False
const numberPar = (num) => {
    let validate = false;
    if (num%2===0) {
        validate = true
        }
        return validate;
}

console.log(numberPar(2));
console.log(numberPar(3));

// 5. Retornar True si un numero es impar sino devolver False
const numberImpar = (num) => {
    let validate = false;
    if (num%2!==0) {
        validate = true
    }
    return validate;
}

console.log(numberImpar(2));
console.log(numberImpar(3));

// 6. calcular el area de un triangulo y mostrar su resultado si tenemos los valores base y altura
const calculateArea = (base, height) => {
    return (base*height)/2
}

console.log(calculateArea(10,5));
console.log(calculateArea(20,10));


// 7. (TODO) Almacenar en una constante un número de 3 cifras y mostrar la suma de sus cifras elevada al cubo.
const numberFigures = (number)=>{
    let one = number%10; // primer numero
    let two = Math.floor(number/10)%10; // segundo numero
    let three = Math.floor(number/100); // tercer numero
    return (one+two+three);
}

console.log(numberFigures(492));
console.log(numberFigures(873));


// 8. (TODO) Almacenar en una constante un monto de dinero, luego mostrar cuanto le toca a cada socio según la siguiente tabla:
// SOCIO A = 30%, SOCIO B = 20%, SOCIO C = 60%

const moneyDistribution = (money)=>{
    let one = money*0.3;
    let two = money*0.2;
    let three = money*0.6;
    return [one, two, three]
}
const [socioA, socioB, socioC] = moneyDistribution(1000);
console.log(`Socio A = ${socioA}, Socio B = ${socioB}, Socio C = ${socioC}`)

const [socioA_1, socioB_1, socioC_1] = moneyDistribution(5500);
console.log(`Socio A = ${socioA_1}, Socio B = ${socioB_1}, Socio C = ${socioC_1}`)



const heroe = 'batman';
switch (heroe) {
    case ('superman'):
        console.log("tu eres el mas fuerte");
        break;
    case ('batman'):
        console.log("tu eres el guardian de la noche");
        break;
    default:
        console.log("no eres un heroe, eres un superheroe");
}

for (let i = 0; i < 10; i++) {
    console.log(i);
}

let contador = 0
while (contador < 10) {
    contador = contador + 1;
    console.log("hola while"+contador);
}

do {
    contador = contador + 1;
    console.log("hola do-while "+contador);
} while (contador < 10);



// 2. Retornar un saludo en tres diferentes lenguajes:
//    - si es español mostrará 'Hola'
//    - si es inglés mostrará 'Hello'
//    - si es aimara mostrará 'kamisaraki'

const lenguaje = 'español';

switch (lenguaje) {
    case 'español': console.log("hola"); break;
    case 'ingles': console.log("hello"); break;
    case 'aimara': console.log("kamisaraki"); break;
    default: console.log("lenguaje no soportado");
}

// 3. Si un numero es divisible entre 3 y 5 devolver 'fizzbuzz'
//    Si un numero es divisible entre 3 devolver 'fizz'
//    Si un numero es divisible entre 5 devolver 'buzz'
//    De lo contrario devolver el mismo número
const number = 15;

if (number%3===0 && number%5===0) {
    console.log("fizzbuzz");
} else if (number%3===0) {
    console.log("fizz");    
} else if (number%5===0) {
    console.log("buzz");
} else {  
    console.log(number);
}


// 4. Retornar true si un numero es primo sino devolver false
//    Pista: un numero primo es divisible por sí mismo y por 1
const primo = 47;

if (primo%primo===0 && primo%1===0) {
    console.log(true);
} else {
    console.log(false);
}

// 5. Devolver un valor que se incremente de dos en dos y devuelva los menores a 10
let contador1 = 0;
while (contador1 < 10) {
    contador1 = contador1 + 2;
    console.log(contador1);
}


const nuevo = []

console.log(nuevo[100])