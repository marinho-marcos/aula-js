let alunos = ['maria', 'joao', 'joana'];

let nome = alunos[alunos.length - 1];

let tam = alunos.length;

for(let i= 0; i < tam; i++){
  let aluno = alunos[i];
  let mensagem = `Seja bem-vindo, ${aluno}`;
  console.log(mensagem);
}

// for(let i in alunos){
//   let aluno = alunos[i];
//   let mensagem = `Bem-vindo, ${aluno}`;
// }

// for(let aluno of alunos){
//   let mensagem = `Bem-vindo, ${aluno}`;
// }