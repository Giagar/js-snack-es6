// ESERCIZIO 1
const arr = [
    {
        nome: "bici1",
        peso: 9
    }, 
    {
        nome: "bici2",
        peso: 14
    }, 
    {
        nome: "bici3",
        peso: 19
    }, 
    {
        nome: "bici4",
        peso: 9
    } 
];

let biciLight = arr[0];

for (let i = 0; i < arr.length; i++) {
    if(arr[i].peso < biciLight.peso) {
        biciLight = arr[i];
    }
}

const risultatoBici = `La bici più leggera è <strong>${biciLight.nome}</strong> e pesa solo <strong>${biciLight.peso} kg</strong>.`;
document.querySelector(".risultatoBici").innerHTML = risultatoBici;

// ESERCIZIO 2
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const listaSquadre = [
    {
        nome: "squadra1",
        punti: 0,
        falli: 0
    }, 
    {
        nome: "squadra2",
        punti: 0,
        falli: 0
    }, 
    {
        nome: "squadra3",
        punti: 0,
        falli: 0
    }, 
    {
        nome: "squadra4",
        punti: 0,
        falli: 0
    } 
];

const result = [];

for (let l = 0; l < listaSquadre.length; l++) {
    listaSquadre[l].punti = randomNumber(0, 100);
    listaSquadre[l].falli = randomNumber(0, 100);

    const {nome, falli} = listaSquadre[l];

    result.push({
        nome, 
        falli
    });
}

console.log(result);

// ESERCIZIO 3
const arrEs3 = ['a', 'b', 'c', 'd', 'e', 'f'];

//con forEach
const fewerElements1 = (arr, min, max) => {

    let arrResult = [];
    arr.forEach((el, i) => {
        if(i >= (min - 1) && i <= (max - 1)) { // -1 perché min e max sono da considerare in "linguaggio umano"
            arrResult.push(el)
        }
    })
    
    return arrResult;
}

console.log(fewerElements1(arrEs3, 2, 5))

//con filter
const fewerElements2 = (arr, min, max) => {

    return arr.filter((el, i) => {
        return i >= (min - 1) && i <= (max - 1); // -1 perché min e max sono da considerare in "linguaggio umano"
    })
}

console.log(fewerElements2(arrEs3, 2, 5))
