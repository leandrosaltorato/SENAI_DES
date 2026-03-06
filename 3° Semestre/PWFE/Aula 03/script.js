let filmes = JSON.parse(localStorage.getItem("filmes")) || [];

document.addEventListener("DOMContentLoaded",
    renderizarTabela()
);

function abrirModal() {
    document.getElementById("modal").style.display = "block";
}

function fecharModal() {
    document.getElementById("modal").style.display = "none";
    limparCampos();
}

function salvarFilme() {
    const imagem = document.getElementById("imagem").value;
    const genero = document.getElementById("genero").value.trim();
    const nome = document.getElementById("nome").value.trim();
    const ano = document.getElementById("ano").value;
    const autor = document.getElementById("autor").value.trim();

    if (!genero || !nome) {
        alert("genero e Nome são obrigatórios!");
        return;
    }
    const existe = filmes.find(filmes => filmes.genero === genero);

    if (existe) {
        alert("genero já cadastrado!");
        return;
    }

    const novoFilme = {
        id: Date.now(),
        imagem,
        genero,
        nome,
        ano,
        autor
    };

    filmes.push(novoFilme);
    atualizarLocalStorage();
    renderizarTabela();
    fecharModal();
}

function renderizarTabela() {
    const tabela = document.getElementById("dados");
    tabela.innerHTML = "";

    filmes.forEach(filmes => {
        tabela.innerHTML += `
        <tr>
            <td><img src="${filmes.imagem}" width=60"></td>
            <td>${filmes.genero}</td>
            <td>${filmes.nome}</td>
            <td>${filmes.ano}</td>
            <td>${filmes.autor}</td>
            <td>
            <button onclick="excluirfilmes(${filmes.id})">Excluir</button>
            </td>
            </tr>
        `;
    });
}

function excluirfilmes(id) {
    if (!confirm("Deseja realmente excluir?")) return;

    filmes = filmes.filter(filmes => filmes.id !== id)
    atualizarLocalStorage();
    renderizarTabela();
}

function atualizarLocalStorage() {
    localStorage.setItem("filmes", JSON.stringify(filmes));
}

function limparCampos() {
    document.getElementById("genero").value = "";
    document.getElementById("nome").value = "";
    document.getElementById("ano").value = "";
    document.getElementById("autor").value = "";
}

function filtrar() {

    const genero = document.getElementById("filtro").value;

    const tabela = document.getElementById("dados");

    tabela.innerHTML = "";

    filmes.forEach(filme => {

        if (genero === "todos" || filme.genero === genero) {

            tabela.innerHTML += `
            <tr>
                <td><img src="${filme.imagem}"></td>
                <td>${filme.genero}</td>
                <td>${filme.nome}</td>
                <td>${filme.ano}</td>
                <td>${filme.autor}</td>
                <td>
                <button onclick="excluirfilmes(${filme.id})">Excluir</button>
            </td>
            </tr>
`;

        }

    });

}
