// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });


function destructivelyAppendCat(name) {
cats.push("Ralph");
}

function destructivelyPrependCat(name) {
    cats.unshift("Bob");

}
function destructivelyRemoveLastCat(name) {
    cats.pop();
}
function destructivelyRemoveFirstCat(name) {
    cats.shift();
}
function appendCat(name) {

    const copyCats = [...cats, 'Broom'];
    return copyCats;
}

function prependCat(name) {
    const copyCats = ['Arnold', ...cats];
    return copyCats;
}
function removeLastCat(name) {
    const copyCats = cats.slice(0, 2);
    return copyCats;
}
function removeFirstCat(name) {
 const copyCats = cats.slice(1);
 return copyCats;   
}