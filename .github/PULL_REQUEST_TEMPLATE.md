<!--
  Preencha os campos abaixo. Este Pull Request é a sua entrega da atividade.
  Pode apagar estes comentários entre <!-- e -->.
-->

## Identificação

- **Nome completo:**
- **Matrícula:**

## Link da página publicada

<!-- Cole o endereço completo do seu GitHub Pages e confirme que ele abre a SUA versão corrigida. -->

https://SEU-USUARIO.github.io/acessibilidade-unidade3-atividade/

- [ ] Abri o link acima numa aba anônima e ele mostra a minha versão corrigida.

## Problemas corrigidos

Para cada item: **onde estava**, **qual tag entrou no lugar** e **por que isso melhora a
experiência de quem usa tecnologia assistiva**.

### 1. Apresentação vs. semântica

-Encontrei as tags <b> e <i> e alterei para <strong> e <em> na linha 84.
-Substituí <u> por <ins>
-Substituí tags erradas de samântica para as regras corretas, como respeitar a hierarquia de tamanhos, e retirar a tag obsoleta "font" em "categorias em destaque". 

### 2. Hierarquia de cabeçalhos
-Só existe um h1 na página, em "título principal".
-Os níveis pulados foram ajustados para seguir a hierarquia da página
-h1/h2/h2/h3/h3/h3  h2(118)/h2/h3/

### 3. Landmarks
-Adicionei lang="pt-br" no cabeçalho, declarado no html.
-Correção para <header> o que se encontrava em <div> ex: <header id="topo"> e de <table> para <nav> em  blocos de links de navegação.
-Utilizei <aside> para diferenciar o conteúdo tangencial do conteúdo principal.
-Rodapé modificado para <footer> 
-Nav adicionei Menu Principal no <nav>
-Idioma declarado na tag <html>

### 4. Tabelas
-A tabela comparativa de modelos estava em <td> e sem <caption>; alteração do 125 ao 150. 
-Com <th scope>, o leitor de tela anuncia o preço dizendo a que modelo ou atributo pertence.
-Foram retirados: <table class="layout" width="100%">,<tr>, <td

### 5. Links e botões
-Correção de link do carrinho com indicação de acesso.
-Mudança de termos como "clique aqui" e "saiba mais" para especificar o conteúdo a ser acessado. 
-Correção de <divs> para <button> ou <form>

### 6. Listas

### 7. Formulário

## Testes que eu fiz

- [ ] Percorri a página inteira **só com o teclado** (Tab) e alcancei todos os controles
- [ ] Testei com leitor de tela (NVDA / VoiceOver / Orca)
- [ ] Passei a página pelo validador do W3C
- [ ] Comparei o visual com a versão original e o layout continua equivalente

**Quantos cabeçalhos, links e landmarks o leitor de tela listou antes e depois?**

<!-- No NVDA: Insert + F7. Se conseguiu fazer o teste, cole os números ou um print. -->

## Dúvidas ou observações

<!-- Algum item que você suspeitou mas não teve certeza? Alguma decisão que quer justificar? -->
