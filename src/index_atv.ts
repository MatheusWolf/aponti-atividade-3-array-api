// A declaração de arrays em jogos é bem comum, é uma excelente alternativa para lidar com o 
// armazenamento de dados, incluindo estados(comportamentos) de personagens, inimigos e chefes.
// Abaixo 2 exemplos de states de inimigos, com um timer ou função randomica funcionaria perfeitamente em muitos jogos

const enemy_state = ["Idle", "Chase", "Run", "Attack", "Death"];
const boss_state = ["Idle", "Hand_Attack", "Head_Attack", "Ultimate_Attack", "Death"];

// Já os Objetos são ainda mais detalhados, eles podem armazenar informações e relacionar com uma chave, facilitando a busca 
// e manipulação. os objetos no typescript são os dicionários em outras linguagens e um exemplo prático é fazer essa relação chave-valor
// conversar, como abaixo, eu relaciono um tipo de dano com um valor de dano extra, que poderia ser usado em um sistema de combate.

const extra_damage_by_type = {
    fire: 3,
    ice: 2,
    electric: 4,
    holy: 3
};

// Funções assincronas são muito bem vindas em jogos, mas em sistemas dependentes são essenciais, quando uma função passa a
// depender de outra função, retorno de uma API ou banco de dados esse sistema se torna altamente acoplado, e um fluxo comum de
// execução já não é mais possível, então as funções assincronas entram em ação, ela permite que o fluxo de execução continue
// enquanto aguarda um retorno dependente.

// "Promise" é um objeto que representa a eventual conclusão ou falha. Um "valor" que ainda vai chegar como uma "promessa"
// Por exemplo, meu personagem só pode mudar de estado "attack" para "idle" quando a animação do ataque acabar, ou seja, o estado 
// de idle está aguardando uma promessa do estado de attack, quando a animação concluir essa promessa pode se cumprir mas, se o
// jogador apertar uma tecla de movimento a promessa se quebra, e ele vai direto para o estado de run (correr).

// "async" transforma uma função em assíncrona, dessa maneira ela sempre retorna uma Promise.
// "await" força um pause na execução da função assincrona até que a função dependente retorne um valor, e então o fluxo
// de execução continua.


// Declaração da promessa: Tipo de variavel (let ou const), nome, criação da promessa 
// (Se caso esse retorno seja tipado colocar entre "<string>"), condições (resolve, reject), seguido de uma arrow function
// nomeDaPromessa.then() -> o que fazer quando der certo
// nomeDaPromessa.catch() -> o que fazer quando der erro


console.log("1 - Inicio da ordem")
const exemploDePromessa = new Promise<string>((resolve, reject) => {
    // Aplicação de um deley para executar apois 1000 milisegundos ou 1 segundo
    setTimeout(() => {
        resolve("2 - Promessa concluida como esperado"); // <-
//        reject("2 - Erro na conclusão da Promessa"); // <- Para retornar erro na promessa
    }, 1000);
});
// A captura do resultado positivo utilizando .then()
exemploDePromessa.then(resultado => {
    console.log(resultado);
});
// A captura do resultado negativo utilizando .catch() acompanhando do tratamento de resposta
exemploDePromessa.catch(resultado => {
    console.log("Error: aguarde alguns instantes e tente novamente")
});
// fim da ordem de execução mostrando que a promessa não precisa retornar de maneira imediata
console.log("3 - Fim da ordem");


