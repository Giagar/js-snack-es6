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

// ESERCIZIO 2
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

// porting es6
let result = [];

for (let l = 0; l < listaSquadre.length; l++) {
    listaSquadre[l].punti = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
    listaSquadre[l].falli = Math.floor(Math.random() * (100 - 0 + 1)) + 0;

    let {nome, falli} = listaSquadre[l];

    result.push([nome, falli]);
}

console.log(result);