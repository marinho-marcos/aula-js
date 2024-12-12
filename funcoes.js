//FUNCOES COM 'FUNCTION'
function somar(a, b){
  let resultado = a + b;
  return resultado;
}

function incrementar(valor){
  return valor + 1;
}

let r1 = somar(2, 3);
let r2 = somar(5, 3);
let inc1 = incrementar(r1);
let inc2 = incrementar(somar(5, 8));

//EXPRESSION


let somar = function(a,b){
  return a + b;
};

let subtrair = function(a,b){
  return a - b;
};

let operacao = function(operador, a, b){
  return operador(a,b);
};

let a = 2;
let b = 3;

console.log(operacao(somar, a, b));
console.log(operacao(subtrair, a, b));


//ARROW FUNCTION COM APENAS UMA LINHA DE INSTRUCAO

let subtrair => (a,b) => a-b;

//ARROW FUNCTION COM APENAS UMA LINHA DE INSTRUCAO

let subtrair = (a,b) => {
  let res = a-b;
  return res;
}



function ehMaiorIdade(idade){
  if (idade >= 18){
    return true;
  } else {
    return false;
  }
}

