/**
 * Classe para gerenciar requisições XMLHttpRequest
 * Implementa processamento assíncrono de dados
 * @author Equipe de Arquitetura Web
 */

class AjaxHandler {
    /**
     * Realiza requisição GET assíncrona
     * @param {string} url - Endpoint da API
     * @param {function} onSuccess - Callback de sucesso
     * @param {function} onError - Callback de erro
     */
    static get(url, onSuccess, onError) {
        // PASSO 1: Criar objeto XMLHttpRequest
        const xhr = new XMLHttpRequest();
        
        // PASSO 2: Configurar monitoramento de estado
        xhr.onreadystatechange = function() {
            /**
             * readyState valores:
             * 0 - UNSENT: objeto criado
             * 1 - OPENED: open() foi chamado
             * 2 - HEADERS_RECEIVED: send() chamado, headers recebidos
             * 3 - LOADING: recebendo dados
             * 4 - DONE: operação completa
             */
            
            if (xhr.readyState === 4) { // Requisição completa
                if (xhr.status === 200) { // Sucesso
                    try {
                        const data = JSON.parse(xhr.responseText);
                        onSuccess(data);
                    } catch (e) {
                        onError('Erro ao processar resposta: ' + e.message);
                    }
                } else {
                    onError(`Erro HTTP: ${xhr.status} - ${xhr.statusText}`);
                }
            }
        };
        
        // PASSO 3: Configurar timeout
        xhr.timeout = 10000; // 10 segundos
        xhr.ontimeout = function() {
            onError('Tempo limite excedido');
        };
        
        // PASSO 4: Configurar requisição (método, URL, assíncrono)
        xhr.open('GET', url, true);
        
        // PASSO 5: Definir headers
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.setRequestHeader('Accept', 'application/json');
        
        // PASSO 6: Enviar requisição
        xhr.send();
        
        return xhr; // Retorna para possível cancelamento
    }
    
    /**
     * Realiza requisição POST assíncrona
     * @param {string} url - Endpoint da API
     * @param {object} data - Dados a enviar
     * @param {function} onSuccess - Callback de sucesso
     * @param {function} onError - Callback de erro
     */
    static post(url, data, onSuccess, onError) {
        const xhr = new XMLHttpRequest();
        
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200 || xhr.status === 201) {
                    try {
                        const response = JSON.parse(xhr.responseText);
                        onSuccess(response);
                    } catch (e) {
                        onError('Erro ao processar resposta: ' + e.message);
                    }
                } else {
                    onError(`Erro HTTP: ${xhr.status}`);
                }
            }
        };
        
        xhr.open('POST', url, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.timeout = 10000;
        
        // Converter objeto para JSON e enviar
        xhr.send(JSON.stringify(data));
        
        return xhr;
    }
    
    /**
     * Exibe loading durante requisição
     * @param {boolean} show - Mostrar ou ocultar
     */
    static toggleLoading(show) {
        const loader = document.getElementById('loading');
        if (loader) {
            loader.style.display = show ? 'block' : 'none';
        }
    }
}

// Exportar para uso em outros módulos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AjaxHandler;
}