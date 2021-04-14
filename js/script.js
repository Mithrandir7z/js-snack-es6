// Ex 1 Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. 
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal Snack


// Ex 2 Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. 
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. 
// Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti. 
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.



// Ex 1 
console.log("Ex 1 --------------------------------");

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
let pesoMinore = bici[0].peso;


// --> Leggere intanto i dati con un for e determinare la bici col peso minore
for ( let i = 0; i < bici.length; i++ ) {
    let thisObject = bici[i];

    if (thisObject.peso < pesoMinore) {
        pesoMinore = thisObject.peso;

        var {nome, peso} = thisObject;
        
        var biciPiuLeggera = {
            nome,
            peso
        };
    }
    
}



// Dopo di che destrutturare quell'array con peso minore e stamparlo in un ul li col template literal.

console.log("la bici più leggera è --->", biciPiuLeggera);

biciPiuLeggera = `

    <h2>La bici più leggera</h2>

    <ul>
        <li>La bici più leggera è la: ${nome} che pesa solamente ${peso} kg!!</li>
    </ul>

`;

document.getElementById("print").innerHTML = biciPiuLeggera;








// Ex 2 Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. 
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. 
// Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti. 
// Infine usando la destrutturazione creiamo un nuovo array di oggetti i cui elementi contengono solo nomi e falli subiti 
// e stampiamo tutto in console.


//Ex 2
console.log("Ex 2 --------------------------------");

//Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.  
let squadre = [
    {
        'nome': 'Juventus',
        'punti_fatti': 0,
        'falli_subiti': 0
    } ,
    {
        'nome': 'Inter',
        'punti_fatti': 0,
        'falli_subiti': 0
    } ,
    {
        'nome': 'Milan',
        'punti_fatti': 0,
        'falli_subiti': 0
    } ,
    {
        'nome': 'Roma',
        'punti_fatti': 0,
        'falli_subiti': 0
    } ,
    {
        'nome': 'Fiorentina',
        'punti_fatti': 0,
        'falli_subiti': 0
    } ,
    {
        'nome': 'Lazio',
        'punti_fatti': 0,
        'falli_subiti': 0
    } ,
    {
        'nome': 'Lecce',
        'punti_fatti': 0,
        'falli_subiti': 0
    } ,
];


//Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.

//Infine usando la destrutturazione creiamo un nuovo array di oggetti i cui elementi contengono solo nomi e falli subiti 
// e stampiamo tutto in console.
let squadreAggiornate = [];

for ( let i = 0; i < squadre.length; i++ ) {
    let thisObject = squadre[i];

    thisObject.punti_fatti = Math.floor(Math.random() * 101);
    thisObject.falli_subiti = Math.floor(Math.random() * 101);

    var {nome, falli_subiti} = thisObject;

    var oggettoAggiornato = {
        nome, 
        falli_subiti
    };

    squadreAggiornate.push(oggettoAggiornato);
}

console.log(squadre);

console.log("squadre aggiornate array -->", squadreAggiornate);


