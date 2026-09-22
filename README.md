Atividade de TypeScript - Arrays, Objetos, Promises e Async/Await
Sobre a atividade

Esta atividade tem como objetivo praticar conceitos importantes de TypeScript e JavaScript aplicados ao contexto de jogos e consumo de APIs.

Os arquivos trabalhados foram:

    index_atv.ts

    index_atv_api.ts

Arquivo index_atv.ts

Neste arquivo foram abordados os seguintes conceitos:
Arrays

Os arrays sao usados para armazenar listas de valores. No exemplo, eles representam os estados possiveis de inimigos e chefes.

const enemy_state = ["Idle", "Chase", "Run", "Attack", "Death"];
const boss_state = ["Idle", "Hand_Attack", "Head_Attack", "Ultimate_Attack", "Death"];

Essa estrutura e util para controlar comportamentos de personagens em jogos.
Objetos

Os objetos armazenam informacoes no formato chave e valor. No exemplo, foi criado um objeto que relaciona um tipo de dano com um valor extra.

const extra_damage_by_type = {
fire: 3,
ice: 2,
electric: 4,
holy: 3
};

Essa estrutura facilita a busca e a manipulacao de dados em sistemas de combate.
Promises

Uma Promise representa um valor que ainda vai chegar. Ela pode ser concluida com sucesso usando resolve ou com erro usando reject.

No exemplo, foi criada uma promessa que espera 1 segundo antes de retornar uma mensagem.

const exemploDePromessa = new Promise<string>((resolve, reject) => {
setTimeout(() => {
resolve("2 - Promessa concluida como esperado");
}, 1000);
});

O resultado positivo e tratado com then e o resultado negativo com catch.

exemploDePromessa.then(resultado => {
console.log(resultado);
});

exemploDePromessa.catch(resultado => {
console.log("Error: aguarde alguns instantes e tente novamente");
});

Esse conceito e util em jogos quando um estado depende da conclusao de outro, como aguardar o fim de uma animacao.
Async e Await

A palavra async transforma uma funcao em assincrona e faz com que ela sempre retorne uma Promise.

A palavra await pausa a execucao da funcao ate que a promessa seja resolvida.
Arquivo index_atv_api.ts

Neste arquivo foi feita uma consulta a uma API externa usando fetch.
Type Usuario

Foi criado um tipo para representar os dados do usuario.

type Usuario = {
id: number;
name: string;
email: string;
phone: string;
};
Funcao buscarUsuario

Essa funcao recebe um id e retorna uma Promise do tipo Usuario.

async function buscarUsuario(id: number): Promise<Usuario> {
const resposta = await fetch(https://jsonplaceholder.typicode.com/users/${id});
const usuario = await resposta.json();
return usuario;
}
Funcao imprimirBusca

Essa funcao chama a funcao buscarUsuario e imprime os dados na tela.

async function imprimirBusca() {
console.log("Buscando usuario...");
const usuario = await buscarUsuario(3);
console.log("Encontrado!");
console.log("Nome:", usuario.name);
console.log("Email:", usuario.email);
console.log("Telefone:", usuario.phone);
}

imprimirBusca();
Como executar

Para rodar os arquivos e necessario ter o TypeScript instalado.

Comandos uteis:

npm install -g typescript
tsc index_atv.ts
node index_atv.js

tsc index_atv_api.ts
node index_atv_api.js

Tambem e possivel usar o ts-node para executar diretamente:

npx ts-node index_atv.ts
npx ts-node index_atv_api.ts
