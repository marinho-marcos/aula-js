var idade = 70;
var resultado = idade + 1;

if (idade <= 18 && idade < 60){
  console.log('é adulto');
} else if (idade >= 60){
  console.log('é idoso');
} else if (idade >= 12 && idade < 18) {
  //elif()
  console.log('é adolescente');
} else {
  console.log('é criança');
}

