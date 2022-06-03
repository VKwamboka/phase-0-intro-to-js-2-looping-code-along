// Code your solutions in this file
const messages = [];
function writeCards(name){
    for ( let count = 0;count < name.length; count++) {
    messages.push (`Thank you, ${name[count]}, for the wonderful surprise gift!`);
    }   
    return messages;  
}

function  countDown(number){
    //let  number;
    for (let i = number; i>=0; i--){
        console.log (i);
    }
    return number;
}
