# Portfólio Simples - Nível Iniciante

Um portfólio web moderno e responsivo feito com **HTML, CSS e JavaScript puro** - perfeito para iniciantes!

## 📁 Estrutura do Projeto

```
portfolio-simples/
├── index.html      # Estrutura HTML
├── style.css       # Estilos CSS
├── script.js       # Interatividade JavaScript
└── README.md       # Este arquivo
```

## 🚀 Como Usar

### Opção 1: Abrir Diretamente
1. Descompacte o arquivo ZIP
2. Clique duas vezes em `index.html`
3. Pronto! O portfólio abrirá no seu navegador

### Opção 2: Usar um Servidor Local
1. Abra o terminal na pasta do projeto
2. Execute um dos comandos abaixo:

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (com http-server instalado)
npx http-server
```

3. Abra `http://localhost:8000` no navegador

## 📝 Como Customizar

### Alterar Nome e Informações
Abra `index.html` e procure por:
- `<title>Portfólio - João</title>` → Mude para seu nome
- `<div class="logo">A</div>` → Mude a letra
- `<h1>Olá, eu sou <span class="highlight">Adam</span></h1>` → Seu nome
- Informações de contato na seção `#contact`

### Adicionar Suas Habilidades
Na seção de Skills, adicione novos cards:

```html
<div class="skill-card">
    <h3>Sua Habilidade</h3>
    <div class="progress-bar">
        <div class="progress" style="width: 85%"></div>
    </div>
    <p>85%</p>
</div>
```

### Adicionar Seus Projetos
Na seção de Portfolio, adicione novos projetos:

```html
<div class="project-card">
    <div class="project-image">Seu Projeto</div>
    <h3>Nome do Projeto</h3>
    <p>Tecnologias usadas</p>
    <div class="project-links">
        <a href="#" class="link">Ver →</a>
        <a href="#" class="link">Código →</a>
    </div>
</div>
```

### Mudar Cores
Abra `style.css` e altere as variáveis no topo:

```css
:root {
    --bg-dark: #0a0e27;           /* Cor de fundo escuro */
    --accent-cyan: #00d9ff;       /* Cor primária */
    --accent-magenta: #ff006e;    /* Cor secundária */
    --accent-violet: #8f00ff;     /* Cor terciária */
}
```

## 🎨 Cores Padrão

| Cor | Código | Uso |
|-----|--------|-----|
| Fundo Escuro | `#0a0e27` | Background principal |
| Card | `#1a1f3a` | Fundo dos cards |
| Ciano | `#00d9ff` | Destaque principal (neon) |
| Magenta | `#ff006e` | Destaque secundário |
| Violeta | `#8f00ff` | Destaque terciário |

## 📱 Responsividade

O portfólio é totalmente responsivo e funciona em:
- ✅ Desktop
- ✅ Tablet
- ✅ Celular

## ⚡ Funcionalidades

- ✅ Navegação suave entre seções
- ✅ Links de navegação ativos
- ✅ Formulário de contato funcional
- ✅ Animações CSS
- ✅ Efeito de digitação no título
- ✅ Scroll reveal para cards
- ✅ Totalmente responsivo

## 🔧 Tecnologias Usadas

- **HTML5** - Estrutura
- **CSS3** - Estilos e animações
- **JavaScript Vanilla** - Interatividade

## 📚 Dicas de Aprendizado

1. **Entenda o HTML**: Veja como a estrutura está organizada em seções
2. **Explore o CSS**: Veja como as cores, fontes e animações funcionam
3. **Teste o JavaScript**: Abra o console (F12) e veja as mensagens
4. **Customize**: Mude cores, textos e adicione novos elementos

## 🐛 Solução de Problemas

### O portfólio não abre
- Certifique-se de que o arquivo `index.html` está na mesma pasta que `style.css` e `script.js`

### Estilos não aparecem
- Atualize a página (Ctrl+F5 ou Cmd+Shift+R)
- Verifique se o arquivo `style.css` existe

### Animações não funcionam
- Verifique se o arquivo `script.js` existe
- Abra o console (F12) para ver se há erros

## 📄 Licença

Livre para usar e customizar!

## 🎯 Próximos Passos

1. Adicione suas informações pessoais
2. Mude as cores para sua preferência
3. Adicione seus projetos reais
4. Hospede em um servidor (GitHub Pages, Netlify, etc.)
5. Compartilhe seu portfólio!

---

**Criado com ❤️ para iniciantes**
