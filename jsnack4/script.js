let arraytemp= [];
let sum=0;
let number = parseInt(prompt("Insersci un numero di 4 cifre"));
let str = number.toString();
for(let i=0;i<str.length;i++){
    arraytemp[i] = str.charAt(i);
}


for(let i=0 ;i< arraytemp.length;i ++){
    sum += parseInt(arraytemp[i]);
}

console.log("La somma dei numeri che hai scelto è: " + sum)
