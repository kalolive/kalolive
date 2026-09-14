# ⚡ Kalolive — Radar de Produtos

Painel com os produtos mais vendidos no TikTok Shop BR (receita vinda de **Live**), coletados no [Kalodata](https://www.kalodata.com), organizados por categoria — feito para quem faz live de vendas já entrar sabendo o que vender e o quanto vale a pena.

Visual "tech": fundo animado, números que sobem contando, barra de peso do produto dentro da categoria e "ticket médio" (receita ÷ itens vendidos) pra bater o olho e avaliar rapidinho o produto.

## Estrutura do projeto

```
index.html      -> a página (não precisa mexer, a não ser no visual)
data.js         -> os dados dos produtos (isso é o que muda a cada atualização)
images/         -> as fotos dos produtos, recortadas do pôster do Kalodata
```

## Como publicar no GitHub Pages (gratuito)

1. Crie um repositório novo no GitHub (pode ser público ou privado — privado só funciona com GitHub Pages em contas pagas).
2. Suba estes 3 itens (`index.html`, `data.js`, a pasta `images/`) para a raiz do repositório.
3. No repositório, vá em **Settings → Pages**.
4. Em "Source", selecione a branch `main` e a pasta `/ (root)`. Salve.
5. Em alguns minutos o GitHub vai te dar um link tipo `https://seu-usuario.github.io/nome-do-repo/` — é esse link que você vai vender/compartilhar com quem faz live.

## Como atualizar todos os dias

A única coisa que muda por dia é o arquivo **`data.js`**. Ele tem um formato simples:

```js
const BRAND = "Kalolive";
const LAST_UPDATE = "14/09/2026";
const PERIOD = "15/08/2026 ~ 13/09/2026";

const CATEGORIES = [
  {
    id: "geral",
    label: "Mais Vendidos (Geral)",
    emoji: "🔥",
    products: [
      { rank:1, name:"Nome do produto", price:"R$99,90", gmv:"R$1,2 M", gmvValue:1200000, items:"10 mil", itemsValue:10000, img:"images/geral_1.png" },
      ...
    ]
  },
  ...
];
```

Repare nos campos `gmvValue` e `itemsValue`: são os mesmos números de `gmv`/`items`, só que "crus" (sem `R$`, sem `mil`/`M`) — é o que a página usa pra desenhar a barra de peso do produto e calcular o ticket médio. Sempre que atualizar `gmv`/`items`, atualize `gmvValue`/`itemsValue` junto.

Fluxo diário sugerido:
1. Peça a pesquisa no Kalodata (como foi feito hoje): filtro **Fonte de receita (conteúdo): Live**, por categoria, exportando o "pôster do ranking".
2. Gere as imagens novas dos produtos e o novo `data.js`.
3. Suba os arquivos atualizados (`data.js` + as imagens novas em `images/`) para o mesmo repositório no GitHub, substituindo os anteriores.
4. O site atualiza sozinho no link do GitHub Pages — ninguém que já tem o link precisa fazer nada.

## Aba "🚀 Teste na Live" (produtos emergentes)

Além das categorias, o painel tem uma aba especial chamada **Teste na Live**. Ela não mostra os produtos com mais GMV — mostra produtos que **ainda não bombaram em vendas totais, mas estão com a receita disparando** (crescimento acima de 999,9% no período no Kalodata). É pra pegar o produto no começo da curva de subida, antes dele saturar.

Esses produtos ficam num array separado no `data.js`, chamado `EMERGING`:

```js
const EMERGING = [
  { rank:1, name:"Nome do produto", price:"R$99,90", gmv:"R$370,98 mil", gmvValue:370980, items:"2,79 mil", itemsValue:2790, growthRate:"+999,9%", img:"images/emergentes_1.jpg" },
  ...
];
```

Como achar esses produtos no Kalodata pra atualizar amanhã:
1. Vá em **Produto**, filtro de **Datas: Últimos 30 dias** e **Fonte de receita (conteúdo): Live** (sem filtro de categoria).
2. Clique na seta de ordenação da coluna **"Taxa de crescimento da receita"** pra ordenar do maior crescimento pro menor.
3. Os produtos no topo (geralmente ">999,9%") são os que estão decolando agora — ainda com GMV baixo/médio, mas subindo rápido.
4. Pra imagem: como esses produtos não têm categoria em comum (então não dá pra usar o "pôster do ranking" em lote), abra a página de detalhes do produto, clique na foto principal pra ampliar, clique com o botão direito na foto ampliada → "Salvar imagem como...".

## Sobre os dados

- Fonte: Kalodata (kalodata.com), exportação de "pôster do ranking" por categoria.
- Filtro aplicado: **Fonte de receita (conteúdo): Live** — ou seja, só entra o que está vendendo puxado por transmissão ao vivo, o cenário mais relevante para quem faz live.
- Período: últimos 30 dias corridos a partir da data de atualização.
- GMV = receita bruta estimada da categoria/produto no período, conforme calculado pelo Kalodata.

## Ideia de monetização (registrado para referência)

A ideia combinada foi: manter esse painel atualizado diariamente e vender o acesso ao link para pessoas que fazem live de vendas no TikTok Shop, que passam a começar o dia já sabendo o que está vendendo bem, sem precisar pesquisar manualmente.
