let number=[];
let somma=0;
for(let i=0 ; i<10 ; i++){
    number.push(parseInt(prompt("Inserisci il numero" + i)));
    somma= number[i] + somma;
}

console.log("La somma dei tuoi numeri è: " +somma);