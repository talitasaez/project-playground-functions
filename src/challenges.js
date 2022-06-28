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
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

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
