const produtos = [
    // Linhas
    { nome: "Linha Branca", preco: "R$ 4,50", descricao: "Linha resistente branca.", imagem: "img/linha-branca.jpg", categoria: "linhas" },
    { nome: "Linha Preta", preco: "R$ 4,50", descricao: "Linha resistente preta.", imagem: "img/linha-preta.jpg", categoria: "linhas" },

    // Lãs
    { nome: "Lã Azul", preco: "R$ 12,00", descricao: "Lã macia azul.", imagem: "img/la-azul.jpg", categoria: "lãs" },
    { nome: "Lã Vermelha", preco: "R$ 12,00", descricao: "Lã macia vermelha.", imagem: "img/la-vermelha.jpg", categoria: "lãs" },

    // Tesouras
    { nome: "Tesoura ponto vermelho MONDIAL", preco: "R$ 90,00", descricao: "Tesoura profissional para detalhes.", imagem: "IMG/tesoura_pontovermelho.jpg", categoria: "tesouras" },
    { nome: "Tesoura MONDIAL", preco: "R$ 32,00", descricao: "Tesoura MONDIAL segunda linha.", imagem: "IMG/tesoura_mondial.jpg", categoria: "tesouras" },
    { nome: "Tesoura simples rosa", preco: "R$ 20,00", descricao: "Tesoura simples.", imagem: "IMG/tesoura.jpg", categoria: "tesouras" },
    { nome: "agulha", preco: "R$ 25,00", descricao: "Tesoura robusta para tecidos.", imagem: "img/agulha_cabogrosso.jpg", categoria: "tesouras" },

    // Zíperes
    { nome: "Zíper Azul 20cm", preco: "R$ 3,00", descricao: "Zíper azul reforçado.", imagem: "img/ziper-azul.jpg", categoria: "zíperes" },
    { nome: "Zíper Vermelho 20cm", preco: "R$ 3,00", descricao: "Zíper vermelho reforçado.", imagem: "img/ziper-vermelho.jpg", categoria: "zíperes" },

    // Botões
    { nome: "Botões Flor", preco: "R$ 6,00", descricao: "Kit com botões floridos.", imagem: "img/botoes-flor.jpg", categoria: "botões" },
    { nome: "Botões Estrela", preco: "R$ 6,00", descricao: "Kit com botões em estrela.", imagem: "img/botoes-estrela.jpg", categoria: "botões" },

    // Tecidos
    { nome: "Tecido Algodão Azul 1m", preco: "R$ 25,00", descricao: "Tecido de algodão azul.", imagem: "img/tecido-azul.jpg", categoria: "tecidos" },
    { nome: "Tecido Algodão Vermelho 1m", preco: "R$ 25,00", descricao: "Tecido de algodão vermelho.", imagem: "img/tecido-vermelho.jpg", categoria: "tecidos" }
];

// Elementos principais
const listaProdutos = document.getElementById("listaProdutos");
const pesquisa = document.getElementById("pesquisa");

// Mostrar apenas um produto de cada categoria (destaques)
function mostrarDestaques() {
    const categorias = ["linhas", "lãs", "tesouras", "zíperes", "botões", "tecidos"];
    const destaques = categorias.map(cat => produtos.find(p => p.categoria === cat));
    mostrarProdutos(destaques);
}

// Mostrar produtos filtrados por categoria
function filtrarPorCategoria(categoria) {
    const filtrados = produtos.filter(p => p.categoria === categoria);
    mostrarProdutos(filtrados);
}

// Renderizar lista de produtos
function mostrarProdutos(lista) {
    listaProdutos.innerHTML = "";

    lista.forEach(produto => {
        listaProdutos.innerHTML += `
            <div class="produto">
                <img src="${produto.imagem}" alt="${produto.nome}">
                <h3>${produto.nome}</h3>
                <p>${produto.descricao}</p>
                <strong>${produto.preco}</strong>
                <button onclick="comprar('${produto.nome}')">Comprar no WhatsApp</button>
            </div>
        `;
    });
}

// Função de compra via WhatsApp
function comprar(nomeProduto) {
    const numero = "5549999338999"; // coloque o whatsapp real aqui
    const mensagem = `Olá! Tenho interesse no produto: ${nomeProduto}`;
    const link = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    window.open(link, "_blank");
}

// Pesquisa por nome
pesquisa.addEventListener("input", () => {
    const texto = pesquisa.value.toLowerCase();
    const filtrados = produtos.filter(p =>
        p.nome.toLowerCase().includes(texto)
    );
    mostrarProdutos(filtrados);
});

// Inicialização: mostrar apenas os destaques
mostrarDestaques();
