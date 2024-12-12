/*

## Snack2
Creare un array di oggetti di squadre di calcio.

Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.

Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.

Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

*/

// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. 
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.

const squads = [
    { nome: "juventus", PuntiFatti: 0, FalliSubiti: 0 },
    { nome: "inter", PuntiFatti: 0, FalliSubiti: 0 },
    { nome: "Roma", PuntiFatti: 0, FalliSubiti: 0 },
    { nome: "Milan", PuntiFatti: 0, FalliSubiti: 0}
];

// Funzione per generare un numero random 

function RandomNum() {
    return Math.floor(Math.random() * 101);
}

// Aggiorniamo i punti e i falli subiti con valori random usando un ciclo for

for (let i = 0; i < squads.length; i++) {
    squads[i].PuntiFatti = RandomNum(); 
    squads[i].FalliSubiti = RandomNum(); 
}

console.log("Array aggiornato con punti e falli subiti" ,squads);

// creiamo un nuovo array solo con le informazioni che ci interessano 

let nomiefalli = squads.map(squads => ({ nome: squads.nome, FalliSubiti: squads.FalliSubiti}));

// stampo in console il nuovo arrray

console.log("Array aggiornato solo con il nome della squadra e i falli subiti", nomiefalli);
