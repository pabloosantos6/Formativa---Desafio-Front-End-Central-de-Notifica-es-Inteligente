# Pesquisa — Etapa 1: Investigação

1. **O que é um Toast e qual sua finalidade?**  
É uma pequena mensagem que aparece na tela para avisar o usuário sobre alguma ação ou informação do sistema.

2. **Qual é a principal diferença entre um Toast e um Modal?**  
O Toast é uma mensagem pequena e temporária. O Modal abre uma janela por cima da página e normalmente precisa que o usuário interaja ou feche.

3. **O Toast aparece automaticamente ou precisa ser ativado?**  
Ele precisa ser ativado por JavaScript, por exemplo quando o usuário clica em um botão.

4. **Qual instrução JavaScript permite criar uma instância de Toast?**  
`new bootstrap.Toast(elemento)`.

5. **Para que serve o método `.show()`?**  
Serve para mostrar o Toast na tela.

6. **O que significa a opção `autohide`?**  
Define se o Toast vai desaparecer sozinho depois de um tempo.

7. **Qual é a finalidade de `delay`?**  
Define quanto tempo o Toast fica visível antes de desaparecer automaticamente, em milissegundos.

# Reflexão final — Etapa 6

1. **Qual foi a maior diferença entre programar um Modal e um Toast?**  
O Toast aparece como uma mensagem rápida e some sozinho. O Modal abre uma janela maior e precisa ser fechado pelo usuário ou por um comando.

2. **Qual funcionalidade exigiu mais pesquisa?**  
A parte de fazer o mesmo Toast mostrar mensagens diferentes e atualizar o histórico usando JavaScript.

3. **O que foi reaproveitado da atividade anterior?**  
Reaproveitamos o conhecimento de como abrir e fechar um Modal usando os recursos do Bootstrap.

4. **Se o sistema precisasse apresentar 20 tipos de notificação, vocês criariam 20 Toasts? Justifiquem.**  
Não. Seria melhor usar uma única estrutura de Toast e mudar o título e a mensagem pelo JavaScript. Assim o código fica menor e mais organizado.
