// Exemplo de função assincrona com consulta a uma API externa de dados (dados de cadastro)
// 1. definir os dados que serão utilizados para não ficar um exemplo enorme vou usar apenas (nome, email e phone)
// criar o type generico para usar no promise da função async
type Usuario = {
    id: number;
    name: string;
    email: string;
    phone: string;
};

// 2. Função que busca o usuário
// a função realiza a consulta ao jsonplaceholder, o await faz com que o codigo aguarde a execução/retorno da consulta
async function buscarUsuario(id: number): Promise<Usuario> {
    // o id será o numero responsavel pelo dado, que pode ser acessador direto no navegador
    // https://jsonplaceholder.typicode.com/users/3
    const resposta = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const usuario = await resposta.json();
    // a função retorna o json (formato de dado trabalhavel)
    return usuario;
}

// 3. Função principal para rodar a função buscarUsuario(3) com o id "3" e imprimir o resultado
async function imprimirBusca() {
    console.log("Buscando usuário...");

    const usuario = await buscarUsuario(3);

    console.log("Encontrado!");
    console.log("Nome:", usuario.name);
    console.log("Email:", usuario.email);
    console.log("Telefone:", usuario.phone);
}
// 4. chamar efetivamente a função principal e rodar o código completo!
imprimirBusca();