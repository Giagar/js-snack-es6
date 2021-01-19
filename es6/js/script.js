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

console.log(`La bici più leggera è ${biciLight.nome} e pesa solo ${biciLight.peso} kg.`);

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
