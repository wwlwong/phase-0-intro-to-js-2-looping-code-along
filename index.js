// Code your solutions in this file
const names = ["Charlie", "Samip", "Ali"];
const occasion = "birthday";
const messages = [];

function writeCards(names, occasion) {
  for (let i = 0; i < names.length; i++) {
    messages.push(`Thank you, ${names[i]}, for the wonderful ${occasion} gift!`);  
  }
  return messages;
}

let count = 20;

function countDown(count){
    while (count + 1 > 0) {
        console.log(count);
        count --   
    }
}
