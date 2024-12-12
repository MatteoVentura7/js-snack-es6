/*

## Snack 1
Creare un array di oggetti:

Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.

Stampare a schermo la bici con peso minore.

*/

// Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.

const biciclette = [
    { nome: "Bianchi Sprint", peso: 20.5 },
    { nome: "Mountainbike", peso: 38.2 },
    { nome: "KTM", peso: 27.9 },
    { nome: "Pinarello", peso: 22.4 }
];

let biciclettaLeggera = biciclette[0];

// Ciclo che trova la bici con peso minore

for (let i = 1; i < biciclette.length; i++) {
    if (biciclette[i].peso < biciclettaLeggera.peso) {
        biciclettaLeggera = biciclette[i];
    }
}

// Stampare a schermo la bici con il peso minore
console.log("La bici con il peso minore è:", biciclettaLeggera.nome, "con un peso di", biciclettaLeggera.peso, "kg.");