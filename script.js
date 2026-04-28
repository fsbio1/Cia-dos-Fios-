const produtos = [
    // Linhas
    { nome: "Linha (princesa moda) 500m", preco: "R$ 14,00", descricao: "Linha branca para costura geral.", imagem: "img/princesamoda.jpg", categoria: "linhas" },
    { nome: "Linha costura (trichê) 1300m", preco: "R$ 7,50", descricao: "Linha preta para costura doméstica.", imagem: "img/linhacosturapequena.jpg", categoria: "linhas" },
    { nome: "Linha 100% poliéster (soltex) 1300m", preco: "R$ 12,00", descricao: "Linha resistente para uso profissional.", imagem: "img/linhacosturagrande.jpg", categoria: "linhas" },

    // Lãs e fios
    { nome: "Fio multicolor (círculo)", preco: "R$ 25,00", descricao: "Fio colorido para tricô e crochê.", imagem: "img/barbantemulticolor.jpg", categoria: "lãs" },
    { nome: "Barbante brilhante (fial)", preco: "R$ 25,00", descricao: "Barbante com brilho para artesanato.", imagem: "img/barbantefial_brilho.jpg", categoria: "lãs" },
    { nome: "Fio Amigurumi (círculo)", preco: "R$ 18,00", descricao: "Fio especial para amigurumi.", imagem: "img/amigurumi.jpg", categoria: "lãs" },
    { nome: "Fio (Cléa) 1000m", preco: "R$ 25,00", descricao: "Fio fino para crochê delicado.", imagem: "img/clea.jpg", categoria: "lãs" },
    { nome: "Barbante multifios (fial)", preco: "R$ 20,00", descricao: "Barbante resistente para artesanato.", imagem: "img/fiomacrame_fial.jpg", categoria: "lãs" },
    { nome: "Fio de malha (fisher)", preco: "R$ 25,00", descricao: "Fio de malha para tapetes e bolsas.", imagem: "img/iumalhafisher.jpg", categoria: "lãs" },
    { nome: "Lã harmonia (MODA Fios)", preco: "R$ 23,00", descricao: "Macia e aconchegante, ideal para tricô e crochê.", imagem: "img/modafios.jpg", categoria: "lãs" },
    { nome: "Barbante (Fial)", preco: "R$ 25,00", descricao: "Resistente e versátil, ótimo para artesanato e decoração.", imagem: "img/fio_fial.jpg", categoria: "lãs" },
    { nome: "Linha (Fial) Ouro", preco: "R$ 17,00", descricao: "Fina e brilhante, perfeita para trabalhos delicados.", imagem: "img/linha_fial_ouro.jpg", categoria: "lãs" },
    { nome: "Barbante Apolo Macramê (Círculo)", preco: "R$ 34,00", descricao: "Firme e durável, indicado para peças em macramê.", imagem: "img/apolo_macrame.jpg", categoria: "lãs" },
    { nome: "Barbante Bella (Pinguim)", preco: "R$ 25,00", descricao: "Macio e rendoso, ideal para crochê e roupas leves.", imagem: "img/bella.jpg", categoria: "lãs" },

    // Tesouras e acessórios
    { nome: "Tesoura ponto vermelho MONDIAL", preco: "R$ 90,00", descricao: "Tesoura profissional para detalhes.", imagem: "img/tesoura_pontovermelho.jpg", categoria: "tesouras" },
    { nome: "Tesoura MONDIAL", preco: "R$ 32,00", descricao: "Tesoura prática para uso geral.", imagem: "img/tesoura_mondial.jpg", categoria: "tesouras" },
    { nome: "Tesoura simples rosa", preco: "R$ 20,00", descricao: "Tesoura básica para costura.", imagem: "img/tesoura.jpg", categoria: "tesouras" },
    { nome: "Agulha reta cabo grosso", preco: "R$ 25,00", descricao: "Agulha resistente para tecidos pesados.", imagem: "img/agulha_cabogrosso.jpg", categoria: "tesouras" },
    { nome: "Agulha para máquina de overlock", preco: "R$ 30,00", descricao: "Agulha própria para overlock.", imagem: "img/agulha_overlock.jpg", categoria: "tesouras" },
    { nome: "Agulha para máquina doméstica", preco: "R$ 18,00", descricao: "Agulha para costura doméstica.", imagem: "img/agulha_maquina_dom.jpg", categoria: "tesouras" },
    { nome: "Agulha reta cabo fino", preco: "R$ 25,00", descricao: "Agulha fina para tecidos leves.", imagem: "img/agulha_retafina.jpg", categoria: "tesouras" },
    { nome: "Caixa de alfinetes", preco: "R$ 5,00", descricao: "Alfinetes para marcação de costura.", imagem: "img/alfinetes.jpg", categoria: "tesouras" },
    { nome: "Abridor de casas grande", preco: "R$ 5,00", descricao: "Ferramenta para abrir casas de botão.", imagem: "img/abridor_casa.jpg", categoria: "tesouras" },
    { nome: "Alicate bico redondo", preco: "R$ 20,00", descricao: "Alicate para trabalhos manuais.", imagem: "img/alicate.jpg", categoria: "tesouras" },
    { nome: "Cola universal (pega mil)", preco: "R$ 10,00", descricao: "Cola versátil para artesanato.", imagem: "img/cola.jpg", categoria: "tesouras" },
    { nome: "Cortador rotativo confort (círculo)", preco: "R$ 70,00", descricao: "Cortador rotativo para tecidos.", imagem: "img/cortador_rot.jpg", categoria: "tesouras" },

    // Tecidos
    { nome: "Malha canelada 1m", preco: "R$ 29,00", descricao: "Malha elástica com textura em estrias, usada em blusas e vestidos.", imagem: "img/tecido_canelada.jpg", categoria: "tecidos" },
    { nome: "Tecido de inverno Teddy 1m", preco: "R$ 35,00", descricao: "Tecido felpudo que imita lã de carneiro, macio e quente.", imagem: "img/nverno_ted.jpg", categoria: "tecidos" },
    { nome: "Tecido pele animal 1m", preco: "R$ 160,00", descricao: "Tecido sintético que imita peles, usado em moda e decoração.", imagem: "img/pele.jpg", categoria: "tecidos" },
    { nome: "Malha didier 1m", preco: "R$ 35,00", descricao: "Malha mista com bom caimento, indicada para camisetas e vestidos.", imagem: "img/tecido_inverno_lan.jpg", categoria: "tecidos" },
    { nome: "Tecido Tactel 1m", preco: "R$ 15,00", descricao: "Tecido leve e resistente, usado em roupas esportivas e lençóis.", imagem: "img/tecidomicrofibra_liso.jpg", categoria: "tecidos" },
    { nome: "Tecido microfibra estampado 1m", preco: "R$ 29,00", descricao: "Versão estampada da microfibra, ideal para moda e decoração.", imagem: "img/tecidomicrofibra_estampado.jpg", categoria: "tecidos" },
    { nome: "Tecido percal flex jacquard 1m", preco: "R$ 29,00", descricao: "Tecido plano macio e resistente, usado em roupas de cama.", imagem: "img/tecidomicrofibra.jpg", categoria: "tecidos" },
    { nome: "Tecido fleece mescla 1m", preco: "R$ 36,00", descricao: "Tecido macio e quente, ideal para casacos e mantas.", imagem: "img/inverno_fleece.jpg", categoria: "tecidos" },
    { nome: "Tecido fleece estampado 1m", preco: "R$ 32,00", descricao: "Fleece estampado, aconchegante e colorido para peças casuais.", imagem: "img/fleece_inverno.jpg", categoria: "tecidos" },
    { nome: "Juta 1m", preco: "R$ 25,00", descricao: "Tecido rústico de fibras naturais, usado em artesanato e decoração.", imagem: "img/juta.jpg", categoria: "tecidos" },
    { nome: "Tecido blackout 1m", preco: "R$ 50,00", descricao: "Tecido grosso que bloqueia a luz, usado em cortinas.", imagem: "img/blackoout.jpg", categoria: "tecidos" }
];

const listaProdutos = document.getElementById("listaProdutos");
const pesquisa = document.getElementById("pesquisa");

function mostrarDestaques() {
    const categorias = ["linhas", "lãs", "tesouras", "tecidos"];
    const destaques = categorias.map(cat => produtos.find(p => p.categoria === cat)).filter(Boolean);
    mostrarProdutos(destaques);
}

function filtrarPorCategoria(categoria) {
    const filtrados = produtos.filter(p => p.categoria === categoria);
    mostrarProdutos(filtrados);
}

function mostrarProdutos(lista) {
    listaProdutos.innerHTML = "";

    lista.forEach(produto => {
        listaProdutos.innerHTML += `
            <div class="produto">
                <img src="${produto.imagem}" alt="${produto.nome}" onclick="abrirImagem('${produto.imagem}', '${produto.nome.replace(/'/g, "\\'")}')">
                <h3>${produto.nome}</h3>
                <p>${produto.descricao}</p>
                <strong>${produto.preco}</strong>
                <button onclick="comprar('${produto.nome.replace(/'/g, "\\'")}')">Comprar no WhatsApp</button>
            </div>
        `;
    });
}

function comprar(nomeProduto) {
    const numero = "5549999338999";
    const mensagem = `Olá! Tenho interesse no produto: ${nomeProduto}`;
    const link = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    window.open(link, "_blank");
}

pesquisa.addEventListener("input", () => {
    const texto = pesquisa.value.toLowerCase();
    const filtrados = produtos.filter(p => p.nome.toLowerCase().includes(texto));
    mostrarProdutos(filtrados);
});

mostrarDestaques();

// MODAL (ZOOM)
const modal = document.getElementById("modal");
const modalImg = document.getElementById("imgModal");
const captionText = document.getElementById("caption");
const span = document.querySelector(".fechar");

function abrirImagem(src, alt) {
    modal.style.display = "block";
    modalImg.src = src;
    captionText.innerHTML = alt;
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
