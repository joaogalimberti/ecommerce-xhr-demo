/**
 * Módulo de Gerenciamento do Carrinho de Compras
 * Utiliza XMLHttpRequest para comunicação com API
 */

// Carrinho em memória (simulando localStorage)
let carrinho = {
    itens: [],
    total: 0
};

/**
 * Adiciona produto ao carrinho
 * @param {number} produtoId - ID do produto
 */
function adicionarAoCarrinho(produtoId) {
    console.log('🛒 Adicionando produto ao carrinho:', produtoId);
    
    AjaxHandler.toggleLoading(true);
    
    // Simular requisição POST para API de carrinho
    const url = 'api/carrinho/adicionar';
    const dados = {
        produto_id: produtoId,
        quantidade: 1,
        timestamp: new Date().toISOString()
    };
    
    // Simular resposta da API (em produção seria uma requisição real)
    setTimeout(() => {
        // Adicionar ao carrinho local
        const itemExistente = carrinho.itens.find(item => item.produto_id === produtoId);
        
        if (itemExistente) {
            itemExistente.quantidade += 1;
        } else {
            carrinho.itens.push({
                produto_id: produtoId,
                quantidade: 1
            });
        }
        
        carrinho.total = carrinho.itens.reduce((sum, item) => sum + item.quantidade, 0);
        
        AjaxHandler.toggleLoading(false);
        mostrarNotificacao('✅ Produto adicionado ao carrinho!', 'success');
        
        atualizarContadorCarrinho();
    }, 500);
}

/**
 * Atualiza contador visual do carrinho
 */
function atualizarContadorCarrinho() {
    const badge = document.getElementById('cart-count');
    
    if (badge) {
        badge.textContent = carrinho.total;
        badge.style.display = carrinho.total > 0 ? 'inline-flex' : 'none';
        
        // Animação de "bounce"
        badge.style.animation = 'none';
        setTimeout(() => {
            badge.style.animation = 'bounce 0.5s ease';
        }, 10);
    }
}

/**
 * Remove produto do carrinho
 * @param {number} produtoId - ID do produto
 */
function removerDoCarrinho(produtoId) {
    const url = 'api/carrinho/remover';
    const dados = { produto_id: produtoId };
    
    AjaxHandler.post(
        url,
        dados,
        function(resposta) {
            console.log('Produto removido:', resposta);
            
            // Atualizar carrinho local
            carrinho.itens = carrinho.itens.filter(item => item.produto_id !== produtoId);
            carrinho.total = carrinho.itens.reduce((sum, item) => sum + item.quantidade, 0);
            
            mostrarNotificacao('Produto removido do carrinho', 'info');
            atualizarContadorCarrinho();
        },
        function(erro) {
            console.error('Erro ao remover:', erro);
            mostrarNotificacao('Erro ao remover produto', 'error');
        }
    );
}

/**
 * Limpa todo o carrinho
 */
function limparCarrinho() {
    if (confirm('Deseja realmente limpar o carrinho?')) {
        carrinho.itens = [];
        carrinho.total = 0;
        
        atualizarContadorCarrinho();
        mostrarNotificacao('Carrinho limpo', 'info');
    }
}

/**
 * Visualizar carrinho
 */
function visualizarCarrinho() {
    if (carrinho.total === 0) {
        mostrarNotificacao('Carrinho vazio', 'info');
        return;
    }
    
    console.log('📦 Itens no carrinho:', carrinho);
    alert(`Você tem ${carrinho.total} item(ns) no carrinho`);
}

// Event listener para ícone do carrinho
document.addEventListener('DOMContentLoaded', function() {
    const cartIcon = document.querySelector('.cart-icon');
    if (cartIcon) {
        cartIcon.addEventListener('click', visualizarCarrinho);
    }
});

// Animação de bounce para o badge
const style = document.createElement('style');
style.textContent = `
    @keyframes bounce {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.2); }
    }
`;
document.head.appendChild(style);