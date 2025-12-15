<!-- Hero Section -->
<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20,24,26&height=280&section=header&text=🛒%20E-Commerce%20Brasil&fontSize=80&fontColor=fff&animation=fadeIn&fontAlignY=40"/>

<img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=600&size=28&duration=4000&pause=1000&color=3B82F6&center=true&vCenter=true&repeat=true&width=900&height=100&lines=Processamento+Assíncrono+com+XMLHttpRequest+⚡;Experiência+de+Compra+em+Tempo+Real+🛍️;Arquitetura+Moderna+Sem+Frameworks+🚀;100%25+JavaScript+Vanilla+💻" alt="Typing SVG" />

<br><br>

![Status](https://img.shields.io/badge/Status-Projeto_Educacional-success?style=for-the-badge&logo=academicapple&logoColor=white)
![Build](https://img.shields.io/badge/Build-Passing-brightgreen?style=for-the-badge&logo=checkmarx)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge&logo=open-source-initiative&logoColor=white)

<br>

**Uma demonstração completa de como construir aplicações web modernas usando apenas JavaScript puro**

[🎯 Objetivo](#-objetivo-do-projeto) • [⚡ Features](#-features-implementadas) • [🏗️ Arquitetura](#️-arquitetura) • [🚀 Como Usar](#-como-usar) • [📚 Aprendizado](#-o-que-você-vai-aprender)

</div>

---

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">

<!-- Project Overview -->
## 🎯 **Objetivo do Projeto**

<table>
<tr>
<td width="60%">

### 💡 **Por que este projeto existe?**

Este projeto foi criado para **demonstrar na prática** como funciona o **processamento assíncrono** em aplicações web reais. Através de um e-commerce funcional, você vai entender:

- 🔄 Como o **XMLHttpRequest** gerencia requisições HTTP
- 📡 Comunicação com APIs REST sem recarregar a página
- 🎨 Atualização dinâmica da interface do usuário
- ⚡ Criação de experiências fluidas e responsivas

**Tudo isso sem usar frameworks ou bibliotecas externas!**

</td>
<td width="40%">

<img src="https://media.giphy.com/media/L1R1tvI9svkIWwpVYr/giphy.gif" width="100%">

</td>
</tr>
</table>

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">

<!-- Features -->
## ⚡ **Features Implementadas**

<div align="center">

### **Funcionalidades do E-Commerce**

<table>
<tr>
<td align="center" width="33%">

### 🛍️ **Catálogo**
<img src="https://img.shields.io/badge/Status-Funcional-success?style=flat-square" />

Carregamento assíncrono de produtos com imagens, descrições e preços dinâmicos

</td>
<td align="center" width="33%">

### 🔍 **Busca**
<img src="https://img.shields.io/badge/Status-Tempo_Real-blue?style=flat-square" />

Filtro instantâneo de produtos enquanto você digita, sem delays

</td>
<td align="center" width="33%">

### 🛒 **Carrinho**
<img src="https://img.shields.io/badge/Status-Interativo-orange?style=flat-square" />

Adicione/remova itens com feedback visual e contador atualizado

</td>
</tr>
</table>

<table>
<tr>
<td align="center" width="50%">

### 📊 **Estatísticas**
<img src="https://img.shields.io/badge/Status-Monitorando-purple?style=flat-square" />

Acompanhe requisições, tempo de resposta e performance em tempo real

</td>
<td align="center" width="50%">

### 🎨 **UI Moderna**
<img src="https://img.shields.io/badge/Status-Responsivo-red?style=flat-square" />

Design limpo, animações suaves e totalmente adaptável a qualquer tela

</td>
</tr>
</table>

</div>

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">

<!-- Architecture -->
## 🏗️ **Arquitetura**

<div align="center">

### **Fluxo de Requisição XMLHttpRequest**

```mermaid
sequenceDiagram
    participant U as 👤 Usuário
    participant UI as 🎨 Interface
    participant XHR as ⚡ XMLHttpRequest
    participant API as 🌐 API REST
    
    U->>UI: Clica em "Carregar Produtos"
    UI->>XHR: Cria nova requisição
    XHR->>XHR: readyState: 1 (OPENED)
    XHR->>API: GET /api/produtos.json
    XHR->>XHR: readyState: 2 (HEADERS_RECEIVED)
    XHR->>XHR: readyState: 3 (LOADING)
    API-->>XHR: Retorna JSON
    XHR->>XHR: readyState: 4 (DONE)
    XHR->>UI: Envia dados processados
    UI->>U: Exibe produtos na tela
```

</div>

### 📦 **Estrutura Modular**

<div align="center">

```
┌─────────────────────────────────────────────────────────┐
│                    🌐 index.html                        │
│                  (Interface Principal)                   │
└─────────────────────────────────────────────────────────┘
                           │
        ┌──────────────────┼──────────────────┐
        ▼                  ▼                  ▼
┌───────────────┐  ┌───────────────┐  ┌───────────────┐
│ ajax-handler  │  │   products    │  │     cart      │
│      .js      │◄─┤      .js      │  │     .js       │
│               │  │               │  │               │
│ Gerencia XHR  │  │ Exibe Produtos│  │ Gerencia Itens│
└───────────────┘  └───────────────┘  └───────────────┘
        │                  
        ▼                  
┌───────────────┐          
│     stats     │          
│      .js      │          
│               │          
│ Monitora API  │          
└───────────────┘          
        │
        ▼
┌───────────────┐
│ produtos.json │
│   (Mock API)  │
└───────────────┘
```

</div>

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">

<!-- Technology Stack -->
## 🛠️ **Stack Tecnológica**

<div align="center">

### **Tecnologias Utilizadas**

<table>
<tr>
<td align="center" width="25%">
<img src="https://skillicons.dev/icons?i=html" width="80"/><br>
<b>HTML5</b><br>
<sub>Estrutura Semântica</sub>
</td>
<td align="center" width="25%">
<img src="https://skillicons.dev/icons?i=css" width="80"/><br>
<b>CSS3</b><br>
<sub>Flexbox, Grid, Animations</sub>
</td>
<td align="center" width="25%">
<img src="https://skillicons.dev/icons?i=js" width="80"/><br>
<b>JavaScript ES6+</b><br>
<sub>XMLHttpRequest, Classes</sub>
</td>
<td align="center" width="25%">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/json/json-original.svg" width="80"/><br>
<b>JSON</b><br>
<sub>Formato de Dados</sub>
</td>
</tr>
</table>

### ✨ **Sem Dependências Externas**

<img src="https://img.shields.io/badge/No_jQuery-❌-red?style=for-the-badge" />
<img src="https://img.shields.io/badge/No_React-❌-red?style=for-the-badge" />
<img src="https://img.shields.io/badge/No_Vue-❌-red?style=for-the-badge" />
<img src="https://img.shields.io/badge/Pure_JavaScript-✅-brightgreen?style=for-the-badge" />

</div>

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">

<!-- How to Use -->
## 🚀 **Como Usar**

<div align="center">

### **Comece em 3 Passos Simples**

</div>

<table>
<tr>
<td width="33%" align="center">

### 1️⃣ **Clone**

```bash
git clone https://github.com/
joaogalimberti/
ecommerce-xhr-demo.git
```

<img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" />

</td>
<td width="33%" align="center">

### 2️⃣ **Servidor**

```bash
cd ecommerce-xhr-demo

python -m http.server 8000
```

<img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" />

</td>
<td width="33%" align="center">

### 3️⃣ **Abra**

```bash
http://localhost:8000
```

<img src="https://img.shields.io/badge/Browser-Ready-success?style=for-the-badge&logo=googlechrome" />

</td>
</tr>
</table>

<div align="center">

### **Alternativas de Servidor Local**

| Método | Comando | Link |
|--------|---------|------|
| 🐍 **Python 3** | `python -m http.server 8000` | localhost:8000 |
| 🐍 **Python 2** | `python -m SimpleHTTPServer 8000` | localhost:8000 |
| 📦 **Node.js** | `npx http-server -p 8000` | localhost:8000 |
| 🐘 **PHP** | `php -S localhost:8000` | localhost:8000 |
| ⚡ **VS Code** | Live Server Extension | Auto |

</div>

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">

<!-- XMLHttpRequest States -->
## 🔄 **Estados do XMLHttpRequest**

<div align="center">

### **Ciclo de Vida da Requisição**

<table>
<tr>
<th>Estado</th>
<th>readyState</th>
<th>Descrição</th>
<th>O que acontece</th>
</tr>
<tr>
<td align="center">🔵</td>
<td><code>0</code> UNSENT</td>
<td>Objeto criado</td>
<td><code>new XMLHttpRequest()</code></td>
</tr>
<tr>
<td align="center">🟡</td>
<td><code>1</code> OPENED</td>
<td>Conexão aberta</td>
<td><code>xhr.open('GET', url)</code></td>
</tr>
<tr>
<td align="center">🟠</td>
<td><code>2</code> HEADERS_RECEIVED</td>
<td>Headers recebidos</td>
<td>Servidor respondeu</td>
</tr>
<tr>
<td align="center">🟣</td>
<td><code>3</code> LOADING</td>
<td>Baixando dados</td>
<td>Transferência em andamento</td>
</tr>
<tr>
<td align="center">🟢</td>
<td><code>4</code> DONE</td>
<td>Operação completa</td>
<td>Dados prontos para uso</td>
</tr>
</table>

</div>

### 📊 **Códigos de Status HTTP**

<div align="center">

| Código | Status | Significado | Ação |
|--------|--------|-------------|------|
| `200` | ✅ OK | Sucesso | Processar dados |
| `201` | ✅ Created | Recurso criado | Confirmar criação |
| `400` | ❌ Bad Request | Requisição inválida | Validar dados |
| `404` | ❌ Not Found | Não encontrado | Verificar URL |
| `500` | ❌ Server Error | Erro no servidor | Tentar novamente |

</div>

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">

<!-- Learning -->
## 📚 **O que você vai aprender**

<div align="center">

<table>
<tr>
<td width="50%">

### 🎓 **Conceitos Técnicos**

- ✅ Programação assíncrona em JavaScript
- ✅ Requisições HTTP (GET, POST, PUT, DELETE)
- ✅ Manipulação do DOM de forma eficiente
- ✅ Tratamento de erros e estados de loading
- ✅ Gerenciamento de dados JSON
- ✅ Arquitetura modular de aplicações

</td>
<td width="50%">

### 💼 **Habilidades Práticas**

- 🛠️ Construir SPAs sem frameworks
- 🎨 Criar interfaces responsivas e modernas
- 📡 Integrar com APIs REST
- ⚡ Otimizar performance de aplicações
- 🐛 Debug de requisições assíncronas
- 📱 Desenvolver para múltiplos dispositivos

</td>
</tr>
</table>

</div>

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">

<!-- Project Structure -->
## 📁 **Estrutura do Projeto**

```
📦 ecommerce-xhr-demo
 ┃
 ┣ 📂 css/
 ┃ ┗ 📜 style.css              ← Estilos responsivos e animações
 ┃
 ┣ 📂 js/
 ┃ ┣ 📜 ajax-handler.js        ← Gerenciador de XMLHttpRequest
 ┃ ┣ 📜 products.js            ← Lógica de produtos (carregar/exibir)
 ┃ ┣ 📜 cart.js               ← Sistema de carrinho de compras
 ┃ ┗ 📜 stats.js              ← Monitoramento de performance
 ┃
 ┣ 📂 api/
 ┃ ┗ 📜 produtos.json         ← Mock API com 12 produtos
 ┃
 ┣ 📜 index.html               ← Página principal
 ┣ 📜 README.md                ← Documentação
 ┗ 📜 LICENSE                  ← MIT License
```

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">

<!-- Browser Support -->
## 🌐 **Compatibilidade**

<div align="center">

### **Suporte a Navegadores Modernos**

| <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" width="48"> | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" width="48"> | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" width="48"> | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" width="48"> | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" width="48"> |
|---------|---------|--------|------|-------|
| Chrome 60+ | Firefox 55+ | Safari 11+ | Edge 79+ | Opera 47+ |
| ✅ Completo | ✅ Completo | ✅ Completo | ✅ Completo | ✅ Completo |

</div>

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">

<!-- Academic Context -->
## 🎓 **Contexto Acadêmico**

<div align="center">

<table>
<tr>
<td align="center" width="50%">

### 📚 **Informações do Projeto**

**Instituição:** UCL - Universidade Centro Leste  
**Curso:** Análise e Desenvolvimento de Sistemas  
**Disciplina:** Arquitetura de Interoperabilidade Web  
**Ano:** 2025

</td>
<td align="center" width="50%">

### 🎯 **Objetivos Educacionais**

Demonstrar conceitos fundamentais de:
- Comunicação assíncrona
- APIs REST
- JavaScript moderno
- Arquitetura web

</td>
</tr>
</table>

</div>

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">

<!-- Contributing -->
## 🤝 **Como Contribuir**

<div align="center">

**Contribuições são bem-vindas!** 🎉

</div>

```bash
# 1. Fork o projeto
# 2. Crie uma branch para sua feature
git checkout -b feature/MinhaFeature

# 3. Commit suas mudanças
git commit -m 'feat: Adiciona MinhaFeature'

# 4. Push para a branch
git push origin feature/MinhaFeature

# 5. Abra um Pull Request
```

<div align="center">

### **Padrões de Commit**

| Tipo | Descrição | Exemplo |
|------|-----------|---------|
| `feat` | Nova funcionalidade | `feat: Adiciona filtro por preço` |
| `fix` | Correção de bug | `fix: Corrige erro no carrinho` |
| `docs` | Documentação | `docs: Atualiza README` |
| `style` | Formatação | `style: Ajusta indentação` |
| `refactor` | Refatoração | `refactor: Melhora estrutura` |

</div>

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">

<!-- License -->
## 📄 **Licença**

<div align="center">

Este projeto está sob a licença **MIT**

```
Copyright (c) 2025 João Galimberti

É permitido usar, copiar, modificar e distribuir este projeto
para fins educacionais e comerciais.
```

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

</div>

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">

<!-- Contact -->
## 📬 **Contato**

<div align="center">

### **Tem dúvidas ou sugestões?**

[![Email](https://img.shields.io/badge/Email-joaogalimberti@gmail.com-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:joaogalimberti@gmail.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-João_Galimberti-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/joaogalimberti/)
[![GitHub](https://img.shields.io/badge/GitHub-joaogalimberti-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/joaogalimberti)

</div>

---

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20,24,26&height=150&section=footer"/>

<img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=20&duration=3000&pause=1000&color=3B82F6&center=true&vCenter=true&width=800&lines=⭐+Se+este+projeto+foi+útil%2C+deixe+uma+estrela!;💙+Desenvolvido+com+paixão+e+JavaScript;🚀+Continue+aprendendo+e+construindo+coisas+incríveis!" alt="Footer" />

**Desenvolvido por [João Galimberti](https://github.com/joaogalimberti) | 2025**

</div>
