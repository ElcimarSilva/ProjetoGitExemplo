function getRandomName() {
    return Math.random().toString(36).slice(2);
   }


let randName = getRandomName();

console.log(randName);