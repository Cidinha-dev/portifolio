# Como Usar e Publicar Seu Portfolio

## Editando o Conteudo

Todas as informacoes do site ficam em um unico arquivo:

**`src/data/portfolio.ts`**

### O que voce pode editar:

1. **Informacoes pessoais** (nome, titulo, email, redes sociais, foto):
   - `personalInfo` - troque sua foto colocando uma nova imagem na pasta `public/` e atualizando o caminho

2. **Secao Sobre** (texto bio):
   - `aboutSection.paragraphs` - array de paragrafos, adicione ou remova quantos quiser

3. **Experiencia** (cards 3D):
   - `experienceCards` - adicione novos objetos ao array para novos cards

4. **Habilidades**:
   - `skills` - adicione ou remova tecnologias

5. **Projetos**:
   - `projects` - adicione novos projetos com titulo, descricao, tags, imagem, link do GitHub

6. **Contato**:
   - `contactSection` - texto da secao de contato

### Para trocar a foto de perfil:
1. Coloque sua nova foto na pasta `public/` (ex: `public/minha-foto.jpg`)
2. No arquivo `src/data/portfolio.ts`, altere:
   ```ts
   profilePhoto: "/minha-foto.jpg",
   ```
3. Rebuild e deploy

### Para adicionar um novo projeto:
1. Adicione a imagem do projeto na pasta `public/`
2. No `src/data/portfolio.ts`, adicione um novo objeto no array `projects`:
   ```ts
   {
     id: "meu-novo-projeto",
     title: "Nome do Projeto",
     description: "Descricao curta",
     longDescription: "Descricao completa...",
     tags: ["Java", "Spring Boot"],
     image: "/imagem-do-projeto.jpg",
     projectUrl: "/#/projeto/meu-novo-projeto",
     githubUrl: "https://github.com/seu-user/repo",
     features: ["Funcionalidade 1", "Funcionalidade 2"],
   }
   ```

---

## Publicando no GitHub Pages

### 1. Crie um repositorio no GitHub
- Va em github.com e crie um novo repositorio publico
- Nome sugerido: `portfolio` ou `portifolio`

### 2. Envie os arquivos

No terminal, dentro da pasta do projeto:

```bash
# Inicialize o git
git init

# Adicione todos os arquivos
git add .

# Faca o primeiro commit
git commit -m "Primeira versao do portfolio"

# Conecte ao seu repositorio (substitua SEU_USUARIO)
git remote add origin https://github.com/SEU_USUARIO/portfolio.git

# Envie
git push -u origin main
```

### 3. Configure o GitHub Pages

1. No GitHub, va em **Settings** > **Pages**
2. Em "Source", selecione **Deploy from a branch**
3. Selecione a branch `main` e a pasta `/ (root)`
4. Clique em **Save**

**Ou** (recomendado) use GitHub Actions para build automatico:

Crie o arquivo `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
      - name: Install dependencies
        run: npm ci
      - name: Build
        run: npm run build
      - name: Setup Pages
        uses: actions/configure-pages@v4
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### 4. Acesse seu site

Apos o deploy, seu site estara em:
`https://SEU_USUARIO.github.io/portfolio/`

---

## Tecnologias Utilizadas (Gratuitas)

- **React** - Biblioteca JavaScript (gratuita/open source)
- **Vite** - Build tool (gratuito)
- **Tailwind CSS** - Framework CSS (gratuito)
- **TypeScript** - Tipagem (gratuito)
- **GSAP** - Animacoes (gratuita para uso pessoal)
- **Lucide React** - Icones (gratuito/open source)
- **GitHub Pages** - Hospedagem (gratuita)

---

## Comandos Uteis

```bash
# Instalar dependencias
npm install

# Rodar localmente (desenvolvimento)
npm run dev

# Build para producao
npm run build

# O build gera a pasta dist/ pronta para deploy
```

---

## Precisa de Ajuda?

Se tiver duvidas, pode me perguntar a qualquer momento!
