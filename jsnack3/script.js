let numbers= [];
for(let i=0;i<6;i++){
    let number= prompt("Inserisci il numero "+ i);
    if((number %2) != 0){
        numbers.push(number);
    }
}
console.log(numbers)