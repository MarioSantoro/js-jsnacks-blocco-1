const listMember=["Mario" , "Chiara" , "Pino"];
let nome = prompt("Inserisci il tuo nome");
if(listMember.includes(nome)){
    console.log("Sei in lista e puoi partecipare");
}else{
    console.log("Non sei in lista e non puoi partecipare");
}