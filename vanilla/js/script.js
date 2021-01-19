var arr = [
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

var temp = 100;
var index = 0;

for (var i = 0; i < arr.length; i++) {
    if (arr[i].peso < temp) {
        temp = arr[i].peso;
        index = i;
    }
}

console.log(arr[index].nome)

// variante
var temp1 = 100;
var result = "";

for (var m = 0; m < arr.length; m++) {
    if (arr[m].peso < temp1) {
        temp1 = arr[m].peso;
        result = arr[m].nome;
    }
}

console.log(result);

// variante: se ci fossero più bici con lo stesso peso?
// soluzione base
var temp2 = 100;

for (var i = 0; i < arr.length; i++) {
    if (arr[i].peso < temp2) {
        temp2 = arr[i].peso;
    }
}

for (var l = 0; l < arr.length; l++) {
    if(arr[l].peso === temp2) {
        console.log(arr[l].nome);
    }
}

//correzione: invece di impostare una variabile = 0, usare il primo oggetto come riferimento
var biciLeggera = arr[0];

for (var n = 0; n < arr.length; n++) {
    if(arr[n].peso < biciLeggera.peso) {
        biciLeggera = arr[n];
    }
}

console.log(biciLeggera);

//ESERCIZIO 2
var listaSquadre = [
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

var resultSquadre = [];

for (var l = 0; l < listaSquadre.length; l++) {
    listaSquadre[l].punti = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
    listaSquadre[l].falli = Math.floor(Math.random() * (100 - 0 + 1)) + 0;

    resultSquadre.push({
        nome: listaSquadre[l].nome, 
        falli: listaSquadre[l].falli
    });
}

console.log(resultSquadre);