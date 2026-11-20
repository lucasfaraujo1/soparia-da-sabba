# Restaurante e Soparia da Sabbá — Site & Cardápio Digital

Site oficial de consulta de cardápio, contato, localização e link de delivery do **Restaurante e Soparia da Sabbá** (Manaus/AM), desenvolvido para funcionar perfeitamente no **celular** (QR Code das mesas) e no **desktop**, pronto para hospedagem gratuita no **GitHub Pages**.

## Estrutura do Projeto

- `index.html` — Página principal (Cardápio completo + Contato & Localização + botão Pedidos Delivery)
- `css/styles.css` — Estilos responsivos (Mobile-First e Desktop)
- `js/app.js` — Renderização dinâmica do cardápio, busca instantânea, barra fixa de categorias e status de horário (fuso de Manaus)
- `data/menu.js` — **Arquivo principal de dados** com todos os 94 itens, preços, descrições, categorias e informações de contato
- `assets/img/` — Logo e fotos das categorias otimizadas para carregamento rápido no 4G
- `backup/originals/` — Cópia das imagens em resolução original baixadas do site antigo (`sopariadasabba.com`)

## Como visualizar no computador

Basta dar um duplo clique em `index.html` para abrir diretamente no navegador — não precisa instalar nenhum servidor.

## Como editar preços ou pratos

1. Abra o arquivo `data/menu.js`.
2. Localize o prato desejado e altere o campo `price` (usando ponto para centavos, ex: `27.9` ou `27.90`), `name` ou `description`.
3. Salve o arquivo e atualize a página no navegador.

## Como publicar no GitHub Pages (quando quiser subir)

1. Crie um repositório no GitHub (ex: `soparia-da-sabba`).
2. Envie os arquivos desta pasta (`index.html`, `css/`, `js/`, `data/`, `assets/`). *(Você pode deixar a pasta `backup/` fora do repositório se preferir mantê-lo mais leve.)*
3. No repositório do GitHub, vá em **Settings → Pages → Build and deployment → Source: Deploy from a branch** e selecione `main` / `(root)`.
4. Em poucos minutos o site estará no ar.
