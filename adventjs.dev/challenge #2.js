// En el taller de Santa, los elfos tienen una lista de regalos que desean hacer y un conjunto limitado de materiales.
// Los regalos son cadenas de texto y los materiales son personajes . Su tarea es escribir una función que, dada una lista de regalos y los materiales disponibles, devuelva una lista de los regalos que se pueden hacer .
// Se puede hacer un regalo si tenemos todos los materiales necesarios para realizarlo. 

// const gifts = ['tren', 'oso', 'pelota']
// const materials = 'tronesa'

// manufacture(gifts, materials) // ["tren", "oso"]

// const gifts = ['juego', 'puzzle']
// const materials = 'jlepuz'

// manufacture(gifts, materials) // ["puzzle"]

// const gifts = ['libro', 'ps5']
// const materials = 'psli'

// manufacture(gifts, materials) // []

function manufacture(gifts, materials) {

    // return gifts.map(gift=>{
    //     let test = [...gift];
    //     console.log(test);
    //     test.forEach(element => !materials.includes(element));
        
    // });


    let giftsAdmitted = [];
    gifts.forEach(gift => {
        let validate = true;
        for (let i = 0; i < gift.length; i++) {
            if (!materials.includes(gift[i])) {
                validate = false;
                break;
            }
        }
        if(validate){
            giftsAdmitted.push(gift);
        }
    }
    );

    return giftsAdmitted;
}

const gifts = ['libro', 'ps5']
const materials = 'psli'

console.log(manufacture(gifts, materials));