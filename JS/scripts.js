let tarefas = ["Estudar JS", "Estudar PHP", "Estudar Math"];

console.log("Tarefas criadas: " + tarefas);
console.log(tarefas.length);

//===============\\

tarefas.push("Estudar Banco de dados"); // push o nosso create do crud, serve para o momento já que não temos o BD
console.log(tarefas); //Após o push

//===============\\

tarefas.unshift("Estudar Lógica");
console.log(tarefas); //Após o Unshift

//===============\\

let deleter = tarefas.pop(); // pop deleta o ultimo item da lista, feito para o crud padrão. Método Pilha
console.log("Remover: "+deleter);
console.log(tarefas); //Após o pop

//===============\\

let deletarPrimeiro = tarefas.shift(); // shift deleta o primeiro item da lista. Método Fila
console.log("Remover: "+deletarPrimeiro);
console.log(tarefas); //Após o shift

//===============\\

let info = tarefas.includes("Estudar JS") ? "Tem!" : "Não tem!";
console.log(info);

