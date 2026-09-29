// CRUD: Create(criar), Read(Ler), Update(Atualizar), Delete(apagar)
// É considerado a base ou 80% das operações mais importantes que envolvem banco de dados


// Tipo que representa um post da API
type Post = {
    id: number;
    userId: number;
    title: string;
    body: string;
};

// URL base da API
const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

// Função auxiliar para verificar o status da resposta
function verificarStatus(resposta: Response, operacao: string): void {
    if (resposta.ok) {
        console.log(`[OK] ${operacao} - status ${resposta.status}`);
    } else {
        console.log(`[ERRO] ${operacao} - status ${resposta.status}`);
    }
}

// READ: buscar a lista de posts e mostrar o título dos 3 primeiros
async function listarPosts(): Promise<void> {
    console.log("READ: listando posts");

    const resposta = await fetch(BASE_URL);
    verificarStatus(resposta, "Listar posts");

    const posts: Post[] = await resposta.json();

    for (let i = 0; i < Math.min(posts.length, 3); i++) {
        const post = posts[i];
        //  Recomendação do vscode para tratar a possibilidade do post ser null ou sem valor
        if (!post) {
            continue;
        }
        //  Printa no console os dados capturados
        console.log(`${i + 1}. ${post.title}`);
    }
}

// READ: buscar o post de id 1 e mostrar o título
async function buscarPost(id: number): Promise<void> {
    console.log(`--- READ: buscando post ${id} ---`);

    const resposta = await fetch(`${BASE_URL}/${id}`);
    verificarStatus(resposta, "Buscar post");

    if (!resposta.ok) {
        console.log("Post nao encontrado.");
        return;
    }

    const post: Post = await resposta.json();
    console.log("Titulo:", post.title);
}

// CREATE: criar um post novo e mostrar o post devolvido pela API
async function criarPost(userId: number, title: string, body: string): Promise<void> {
    console.log("CREATE: criando post ---");

    const resposta = await fetch(BASE_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            userId: userId,
            title: title,
            body: body
        })
    });

    verificarStatus(resposta, "Criar post");

    const postCriado: Post = await resposta.json();
    console.log("Post devolvido pela API:");
    console.log(postCriado);
}

// UPDATE: atualizar o post de id 1 com um novo título
async function atualizarPost(id: number, novoTitulo: string): Promise<void> {
    console.log(`--- UPDATE: atualizando post ${id} ---`);

    const resposta = await fetch(`${BASE_URL}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id: id,
            userId: 1,
            title: novoTitulo,
            body: "Conteudo atualizado"
        })
    });

    verificarStatus(resposta, "Atualizar post");

    const postAtualizado: Post = await resposta.json();
    console.log("Post atualizado:");
    console.log(postAtualizado);
}

// DELETE: apagar o post de id 1 e mostrar mensagem de confirmação
async function apagarPost(id: number): Promise<void> {
    console.log(`DELETE: apagando post ${id} ---`);

    const resposta = await fetch(`${BASE_URL}/${id}`, {
        method: "DELETE"
    });

    verificarStatus(resposta, "Apagar post");

    if (resposta.ok) {
        console.log(`Post ${id} apagado com sucesso.`);
    } else {
        console.log(`Nao foi possivel apagar o post ${id}.`);
    }
}

// Função principal que executa todas as etapas na ordem
async function main(): Promise<void> {
    await listarPosts();
    await buscarPost(1);
    await criarPost(1, "Novo post de teste", "Corpo do post criado na atividade");
    await atualizarPost(1, "Titulo atualizado pela atividade");
    await apagarPost(1);
}

main();