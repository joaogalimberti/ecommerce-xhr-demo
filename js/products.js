/**
 * Script para carregar e exibir produtos via XMLHttpRequest
 * Demonstra processamento assíncrono no e-commerce
 */

// Aguardar carregamento do DOM
document.addEventListener('DOMContentLoaded', function() {
    
    // PASSO 1: Usuário acessa a página (evento disparador)
    console.log('🚀 Iniciando carregamento de produtos...');
    
    carregarProdutos();
    
    // Adicionar evento ao botão de busca
    const btnBuscar = document.getElementById('btn-buscar');
    if (btnBuscar) {
        btnBuscar.addEventListener('click', function() {
            const termo = document.getElementById('input-busca').value;
            buscarProdutos(termo);
        });
    }
    
    // Adicionar eventos aos filtros
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remover classe active de todos
            filterBtns.forEach(b => b.classList.remove('active'));
            // Adicionar ao clicado
            this.classList.add('active');
            
            const categoria = this.getAttribute('data-categoria');
            filtrarPorCategoria(categoria);
        });
    });
});

/**
 * Carrega todos os produtos da API
 */
function carregarProdutos() {
    // PASSO 2: Ativar indicador de loading
    AjaxHandler.toggleLoading(true);
    
    const url = 'api/produtos.json'; // Em produção seria uma API REST real
    
    // PASSO 3: Realizar requisição assíncrona
    AjaxHandler.get(
        url,
        // CALLBACK DE SUCESSO
        function(data) {
            console.log('✅ Produtos recebidos:', data);
            
            // PASSO 4: Processar resposta
            exibirProdutos(data.produtos);
            registrarProdutos(data.produtos.length);
            
            // PASSO 5: Ocultar loading
            AjaxHandler.toggleLoading(false);
            
            // PASSO 6: Notificar usuário
            mostrarNotificacao('Produtos carregados com sucesso!', 'success');
        },
        // CALLBACK DE ERRO
        function(erro) {
            console.error('❌ Erro ao carregar produtos:', erro);
            
            AjaxHandler.toggleLoading(false);
            mostrarNotificacao('Erro ao carregar produtos: ' + erro, 'error');
        }
    );
}

/**
 * Busca produtos por termo
 * @param {string} termo - Termo de busca
 */
function buscarProdutos(termo) {
    if (!termo || termo.trim() === '') {
        carregarProdutos();
        return;
    }
    
    AjaxHandler.toggleLoading(true);
    
    const url = 'api/produtos.json';
    
    AjaxHandler.get(
        url,
        function(data) {
            // Filtrar produtos localmente
            const produtosFiltrados = data.produtos.filter(p => 
                p.nome.toLowerCase().includes(termo.toLowerCase()) ||
                p.descricao.toLowerCase().includes(termo.toLowerCase())
            );
            
            exibirProdutos(produtosFiltrados);
            registrarProdutos(produtosFiltrados.length);
            AjaxHandler.toggleLoading(false);
            
            mostrarNotificacao(`${produtosFiltrados.length} produto(s) encontrado(s)`, 'info');
        },
        function(erro) {
            console.error('Erro na busca:', erro);
            AjaxHandler.toggleLoading(false);
            mostrarNotificacao('Erro na busca: ' + erro, 'error');
        }
    );
}

/**
 * Filtra produtos por categoria
 */
function filtrarPorCategoria(categoria) {
    if (categoria === 'todos') {
        carregarProdutos();
        return;
    }
    
    AjaxHandler.toggleLoading(true);
    
    AjaxHandler.get(
        'api/produtos.json',
        function(data) {
            const produtosFiltrados = data.produtos.filter(p => p.categoria === categoria);
            exibirProdutos(produtosFiltrados);
            registrarProdutos(produtosFiltrados.length);
            AjaxHandler.toggleLoading(false);
            mostrarNotificacao(`Categoria: ${categoria}`, 'info');
        },
        function(erro) {
            AjaxHandler.toggleLoading(false);
            mostrarNotificacao('Erro ao filtrar: ' + erro, 'error');
        }
    );
}

/**
 * Exibe produtos no DOM
 * @param {Array} produtos - Lista de produtos
 */
function exibirProdutos(produtos) {
    const container = document.getElementById('produtos-container');
    
    if (!container) {
        console.error('Container de produtos não encontrado');
        return;
    }
    
    // Limpar container
    container.innerHTML = '';
    
    if (produtos.length === 0) {
        container.innerHTML = '<p class="no-products">Nenhum produto encontrado.</p>';
        return;
    }
    
    // PASSO 7: Atualizar interface (DOM) com os dados recebidos
    produtos.forEach(produto => {
        const card = criarCardProduto(produto);
        container.appendChild(card);
    });
}

/**
 * Cria card HTML para um produto
 * @param {object} produto - Dados do produto
 * @returns {HTMLElement}
 */
function criarCardProduto(produto) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <img src="${produto.imagem}" alt="${produto.nome}">
        <h3>${produto.nome}</h3>
        <p class="descricao">${produto.descricao}</p>
        <p class="preco">R$ ${produto.preco.toFixed(2)}</p>
        <button class="btn-adicionar" data-id="${produto.id}">
            Adicionar ao Carrinho
        </button>
    `;
    
    // Adicionar evento ao botão
    const btn = card.querySelector('.btn-adicionar');
    btn.addEventListener('click', function() {
        adicionarAoCarrinho(produto.id);
    });
    
    return card;
}

/**
 * Exibe notificação para o usuário
 * @param {string} mensagem - Mensagem a exibir
 * @param {string} tipo - Tipo: success, error, info
 */
function mostrarNotificacao(mensagem, tipo = 'info') {
    const notif = document.createElement('div');
    notif.className = `notificacao ${tipo}`;
    notif.textContent = mensagem;
    
    document.body.appendChild(notif);
    
    // Remover após 3 segundos
    setTimeout(() => {
        notif.classList.add('fade-out');
        setTimeout(() => notif.remove(), 300);
    }, 3000);
}