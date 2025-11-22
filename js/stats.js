/**
 * Módulo de Estatísticas em Tempo Real
 * Monitora requisições XMLHttpRequest e atualiza métricas
 */

// Objeto para armazenar estatísticas
const stats = {
    requisicoes: 0,
    produtosCarregados: 0,
    tempoTotal: 0,
    tempos: []
};

/**
 * Registra uma nova requisição
 * @param {number} tempoMs - Tempo da requisição em ms
 */
function registrarRequisicao(tempoMs) {
    stats.requisicoes++;
    stats.tempoTotal += tempoMs;
    stats.tempos.push(tempoMs);
    
    atualizarEstatisticas();
}

/**
 * Registra produtos carregados
 * @param {number} quantidade - Número de produtos
 */
function registrarProdutos(quantidade) {
    stats.produtosCarregados = quantidade;
    atualizarEstatisticas();
}

/**
 * Atualiza os contadores visuais na página
 */
function atualizarEstatisticas() {
    // Atualizar número de requisições
    const statRequests = document.getElementById('stat-requests');
    if (statRequests) {
        statRequests.textContent = stats.requisicoes;
    }
    
    // Atualizar produtos carregados
    const statProducts = document.getElementById('stat-products');
    if (statProducts) {
        statProducts.textContent = stats.produtosCarregados;
    }
    
    // Atualizar tempo médio
    const statTime = document.getElementById('stat-time');
    if (statTime) {
        const tempoMedio = stats.tempos.length > 0 
            ? Math.round(stats.tempoTotal / stats.tempos.length)
            : 0;
        statTime.textContent = `${tempoMedio}ms`;
    }
}

/**
 * Wrapper do AjaxHandler.get para incluir tracking
 */
const AjaxHandlerOriginalGet = AjaxHandler.get;
AjaxHandler.get = function(url, onSuccess, onError) {
    const startTime = Date.now();
    
    return AjaxHandlerOriginalGet.call(this, url, 
        function(data) {
            const endTime = Date.now();
            const duration = endTime - startTime;
            
            registrarRequisicao(duration);
            
            if (onSuccess) {
                onSuccess(data);
            }
        },
        function(error) {
            const endTime = Date.now();
            const duration = endTime - startTime;
            
            registrarRequisicao(duration);
            
            if (onError) {
                onError(error);
            }
        }
    );
};

/**
 * Reseta estatísticas
 */
function resetarEstatisticas() {
    stats.requisicoes = 0;
    stats.produtosCarregados = 0;
    stats.tempoTotal = 0;
    stats.tempos = [];
    
    atualizarEstatisticas();
    console.log('📊 Estatísticas resetadas');
}

/**
 * Exibe relatório detalhado no console
 */
function exibirRelatorio() {
    console.group('📊 Relatório de Performance');
    console.log('Total de requisições:', stats.requisicoes);
    console.log('Produtos carregados:', stats.produtosCarregados);
    console.log('Tempo total:', stats.tempoTotal + 'ms');
    console.log('Tempo médio por requisição:', 
        stats.tempos.length > 0 
            ? Math.round(stats.tempoTotal / stats.tempos.length) + 'ms'
            : '0ms'
    );
    console.log('Tempo mais rápido:', Math.min(...stats.tempos) + 'ms');
    console.log('Tempo mais lento:', Math.max(...stats.tempos) + 'ms');
    console.groupEnd();
}

// Inicialização ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    console.log('📊 Módulo de estatísticas carregado');
    atualizarEstatisticas();
    
    // Atualizar a cada 5 segundos (se houver animação desejada)
    setInterval(() => {
        // Pode adicionar animações ou atualizações periódicas aqui
    }, 5000);
});

// Expor funções globalmente para debug
window.statsDebug = {
    exibir: exibirRelatorio,
    resetar: resetarEstatisticas,
    dados: () => stats
};