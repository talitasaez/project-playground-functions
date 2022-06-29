// Desafio 1

function compareTrue(parametro1, parametro2) {
  if (parametro1 === true && parametro2 === true) {
    return true;
  } else {
    return false;
  }
}


// Desafio 2
function calcArea(base, height) {
  let calcArea;
  calcArea = (base * height) / 2;
  return calcArea;
}



// Desafio 3
function splitSentence(frase) {
  let resultado;
   resultado = frase.split(" ");
  return resultado;

}




// Desafio 4
function concatName(arrayst) {
  let primeiro = 0;
  let utlimo = 0;

  for (let index = 0; index < arrayst.length; index += 1){
  primeiro = arrayst[0];
  ultimo = arrayst[arrayst.length-1];

}
return ultimo + ", " + primeiro

}




// Desafio 5
function footballPoints(w, t) {
  return (w *3) + t;
  }
console.log(footballPoints(14,8))
 


// Desafio 6
function maiorNumero (array){
let maior = array[0];
for (let index = 0; index < array.length; index +=1){
  if (array[index] > maior){
    maior = array[index];
  }
}
return maior;

}

function highestCount(array) {
  let maior = maiorNumero (array) 
  let count = 0;

  for (let index = 0; index < array.length; index += 1){
    if (maior === array[index]){
      count +=1;
    }

  }
 return count;
}



// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let rato = mouse;
  let gato1 = cat1;
  let gato2 = cat2;
  

  if ((Math.abs(rato - gato1)) < (Math.abs(rato - gato2))){
    return 'cat1'
  } else if ((Math.abs(rato - gato1)) === (Math.abs(rato - gato2))){
    return 'os gatos trombam e o rato foge'
  } else { 
    return 'cat2'


}
}
console.log(catAndMouse(1, 0, 2));

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
