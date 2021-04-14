// Ex 1 Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. 
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal Snack


// Ex 2 Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. 
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. 
// Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti. 
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.



// Ex 1 
console.log("Ex 1");

//Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
let bici = [
    {
        'nome': 'Mountain Bike',
        'peso': 12
    } ,
    {
        'nome': 'Bmx',
        'peso': 8
    } ,
    {
        'nome': 'Graziella',
        'peso': 17
    } ,
    {
        'nome': 'Ducati',
        'peso': 4
    } ,
    {
        'nome': 'Alpine',
        'peso': 5
    }
];

console.log(bici);

// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal Snack
var pesoMinore = bici[0].peso;
console.log(pesoMinore);

// --> Leggere intanto i dati con un for e determinare la bici col peso minore
for ( let i = 0; i < bici.length; i++ ) {
    let thisObject = bici[i];

    if (thisObject.peso < pesoMinore) {
        pesoMinore = thisObject.peso;
    }
}

console.log("La bicicletta più leggera è di: ", pesoMinore, "kg, ed è la: ");

// Dopo di che destrutturare quell'array con peso minore e stamparlo in un ul li col template literal.