let aluno3 = {
  matricula: '2024100100100',
  nascimento: '2024-12-12',
  cpf: '000111222333',
  endereco: {                                          //NOVO OBJETO COMO ATRIBUTO DE UM OBJETO
    logradouro: 'rua da alameda',
    cep: '58225-000',
  },
  falar: (frase) => console.log('\nfalando' + frase)   //CHAVE/ATRIBUTO RECEBENDO FUNCAO COMO VALOR. TODOS ACIMA SAO ATRIBUTOS NORMAIS
}

let endereco = aluno3.endereco;                       //ATRIBUINDO OS ATRIBUTOS DO OBJETO 'ENDERECO' À VARIAVEL 'ENDERECO'
console.log(endereco.logradouro);                     //ACESSANDO VALOR DO ATRIBUTO 'LOGRADOURO' CONTIDO DENTRO OBJETO ENDEREÇO ATRAVES DA VARIAVEL ENDEREÇO QUE POR SUA VEZ CONTEM OS ATRIBUTOS DO OBJETO ENDEREÇO          
console.log(aluno3.endereco.cep);                     //ACESSANDO VALOR DO ATRIBUTO 'CEP' DIRETAMENTE DO OBJETO 'ENDERECO' QUE ESTÁ CONTIDO NO OBJETO 'ALUNO3'
aluno3.falar('O IFPB é top');

/////////////////////////////////////////////////////////////////

let alunos = [                              //CRIACAO DE ARRAY CONTENDO OBJETOS COMO ELEMENTOS
  {
    matricula: '2024100100101',
    nascimento: '2024-12-12',
    cpf: '000111222333',
    peso: 18.5,
  },
  {
    matricula: '2024100100102',
    nascimento: '2024-12-12',
    cpf: '000111222333',
    peso: 18.5,
  },
  {
    matricula: '2024100100103',
    nascimento: '2024-12-12',
    cpf: '000111222333',
    peso: 18.5,
  }
];

console.log("\ntransformando js para objeto JSON\n");

for (let aluno of alunos){                                //ITERANDDO SOBRE ARRAY DE ALUNOS COM O FOR OF QUE MANIPULA OS VALORES DIRETAMENTE
  let matricula = aluno.matricula;
  console.log(`Seja bem-vindo ${matricula}`);             //UTILIZANDO STRING LITERALS 

  let alunoJSON = JSON.stringify(aluno);
  console.log(alunoJSON);
}

console.log("\ntransformando JSON para js\n");

for (let aluno of alunos){
  let matricula = aluno.matricula;
  console.log(`Seja bem-vindo ${matricula}`);

  let alunoJSON = JSON.stringify(aluno);

  let alunoObjeto = JSON.parse(alunoJSON);
  console.log(alunoObjeto);
}



let a1 = alunos[0];