
// En la fábrica de juguetes del Polo Norte, cada juguete tiene un número de identificación único.
// Sin embargo, debido a un error en la máquina de juguetes, algunos números han sido asignados a más de un juguete.
// Encuentre el primer número de identificación que se ha repetido, donde la segunda aparición tiene el índice más pequeño .
// En otras palabras, si hay más de un número repetido, debes devolver el número cuya segunda aparición aparece primero en la lista. Si no hay números repetidos, devuelve -1. 

// const giftIds = [2, 1, 3, 5, 3, 2]
// const firstRepeatedId = findFirstRepeated(giftIds)
// console.log(firstRepeatedId) // 3
// // Even though 2 and 3 are repeated
// // 3 appears second time first

// const giftIds2 = [1, 2, 3, 4]
// const firstRepeatedId2 = findFirstRepeated(giftIds2)
// console.log(firstRepeatedId2) // -1
// // It is -1 since no number is repeated

// const giftIds3 = [5, 1, 5, 1]
// const firstRepeatedId3 = findFirstRepeated(giftIds3)
// console.log(firstRepeatedId3) // 5

function findFirstRepeated(gifts) {
    let indexs = [];

    let response = -1;
    gifts.forEach(gift => {
        let count = 0;
        for (let i = 0; i < gifts.length; i++) {
            if (gift === gifts[i]) {
                count++;
                if (count > 1) {
                    response = gift;
                    indexs.push(i);
                    // break;
                }
            }
        }
    });
    if (indexs.length == 0) {
        return -1;
    }
    let menor = indexs[indexs.length - 1];
    for (let i = 0; i < indexs.length; i++) {
        if (indexs[i] < menor) {
            menor = indexs[i];
        }
    }

    return gifts[menor];
}

const gifts = [1, 2, 3, 5, 6, 7, 8];
console.log(findFirstRepeated(gifts));