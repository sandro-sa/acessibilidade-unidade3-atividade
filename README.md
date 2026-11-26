# Atividade — Conserte a página

**Unidade 3 · HTML Semântico: a Base da Acessibilidade**

---

<h2>Funcionalidades aplicadas</h2>
<ul>
  <li>Implementação de tags semânticas (correcao)</li>
  <li>Implementação de skip-link (skip-link)</li>
  <li>Implementação de reduce motion (prefers-reduced-motion)</li>
  <li>Implementação de tema escuro (prefers-color-scheme-dark)</li>
  <li>Implementação de tela de contatos com form (contatos)</li>
  <li>Implementação de responsividade para tablets e celulares (responsividade)</li>
</ul>

<h2>Linguagem utilizada</h2>
<table>
  <tbody>
    <tr>
      <td>JavaScript</td>
      <td>HTML</td>
      <td>CSS</td>
    </tr>
  </tbody>
</table>

---

<h2>O que foi feito</h2>

<h4>Correcao</h4>
<p>Nessa versao da pagina inicial, algumas tags foram modificadas para tags semanticas: header, main, footer, aside, table, h1, h2, h3...</p>

<img width="1826" height="899" alt="image" src="https://github.com/user-attachments/assets/bfc8f9c7-e8d3-443e-9398-656ccd681bf0" />
<img width="1839" height="846" alt="image" src="https://github.com/user-attachments/assets/64dd9154-6ea4-48f0-9735-3da52d0eec6b" />


---

<h4>Skip-link</h4>
<p>Na tag header, foi adicionado um link (a) visualmente invisível, apenas visto navegando pelo tab do teclado. O skip-link ajuda pessoal com deficiência visual e motora, que conseguem acessar o conteúdo principal sem muito esforço através dessa mecânica. </p>

<img width="1829" height="894" alt="image" src="https://github.com/user-attachments/assets/41782728-23ae-46ae-9176-72069cb2360d" />
<img width="1834" height="862" alt="image" src="https://github.com/user-attachments/assets/0469bb11-11f1-46a5-bccc-50856b8cc737" />


---

<h4>Prefers-reduced-motion</h4>
<p>Foi adicionado ao CSS da pagina o @keyframes para fazer um carrossel de slides e o @media(prefers-reduced-motion: reduce) para o usuário ajustar o tempo de transição conforme sua preferência. A implementação dessa funcionalidade ajuda pessoas com neurodivergências e sensibilidade visual. </p>

---

<h4>Prefers-color-scheme-dark</h4>
<p>Foi adicionado ao CSS da pagina o @media(prefers-color-scheme: dark) para adequar a cor dos elementos ao tema determinado pelo usuário no navegador de sua preferência. As cores foram adicionadas na pseudo-classe :root. Essa implementação ajuda pessoas com sensibilidade visual.</p>

---

<h4>Pagina de contatos</h4>
<p>O formulário de contatos que estava na pagina inicial (home) foi removido, e no lugar do formulário a pagina contatos foi criada e linkada na pagina inicial. No formulário são solicitadas as seguintes informações: Nome Completo, E-mail, Senha, Confirmar senha, CPF, Data de Nascimento, Telefone, Gênero, Assunto de interesse e Como ficou sabendo do site. Além das informações, o usuário deve marcar a caixinha de "Li e estou de acordo com os termos". Tambem foi adicionado um Honeypot, para identificar possíveis bots que estejam navegando pelo site.</p>

---

<h4>Responsividade</h4>
<p>Foi adicionado ao CSS o @media(max-width: 768px) para tablets e @media(max-width: 480px) para celulares, onde alguns elementos foram alterados e outros foram adicionados. Elemento adicionado: menu hambúrguer(sendo ativado com javascript). Essa implementação ajuda pessoas com aparelhos mobile a visualizar melhor os elementos do site.</p>

<img width="1827" height="898" alt="image" src="https://github.com/user-attachments/assets/51dabbf9-fd54-4af4-8cd6-7e4fdd637202" />
<img width="1828" height="893" alt="image" src="https://github.com/user-attachments/assets/835a8675-c4ca-4643-965c-65002dda2944" />




