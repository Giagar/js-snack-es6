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

//porting es6
let biciLight = arr[0];

for (let i = 0; i < arr.length; i++) {
    if(arr[i].peso < biciLight.peso) {
        biciLight = arr[i]
    }
}

console.log(`La bici più leggera è ${biciLight.nome} e pesa solo ${biciLight.peso} kg.`);

//ESERCIZIO 2
var listaSquadre = [
    {
        nome: "bici1",
        punti: 0,
        falli: 0
    }, 
    {
        nome: "bici2",
        punti: 0,
        falli: 0
    }, 
    {
        nome: "bici3",
        punti: 0,
        falli: 0
    }, 
    {
        nome: "bici4",
        punti: 0,
        falli: 0
    } 
];

var result = [];

for (var l = 0; l < listaSquadre.length; l++) {
    listaSquadre[l].punti = Math.random();
    listaSquadre[l].falli = Math.random();

    let {punti, falli} = listaSquadre[l];

    result.push([punti, falli]);
}

console.log(result);

// porting es6

let result2 = [];

for (let l = 0; l < listaSquadre.length; l++) {
    listaSquadre[l].punti = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
    listaSquadre[l].falli = Math.floor(Math.random() * (100 - 0 + 1)) + 0;

    let {punti, falli} = listaSquadre[l];

    result2.push([punti, falli]);
}

console.log(result2);