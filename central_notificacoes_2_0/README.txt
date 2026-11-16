CENTRAL DE NOTIFICAÇÕES 2.0

Integrantes: Pablo e Diogo

DESCRIÇÃO
Sistema feito em HTML, CSS, Bootstrap 5.3 e JavaScript. Ele mostra notificações e registra as atividades realizadas.

FUNCIONALIDADES IMPLEMENTADAS
- Três botões de notificação: cadastro, segurança e atualização.
- Toasts que fecham automaticamente e também podem ser fechados manualmente.
- Registro das atividades no histórico.
- Salvamento do histórico usando localStorage.
- Recuperação dos dados ao atualizar a página.
- Contador da quantidade total de atividades.
- Limpeza do histórico com confirmação em Modal.
- Filtros por todas as atividades, cadastro, segurança e atualização.
- Pesquisa por palavras nas mensagens.
- Data e hora em cada atividade.
- Atividades mais recentes no começo da lista.
- Mensagem quando o histórico está vazio.
- Diferenciação visual das categorias.
- Layout adaptado para telas pequenas.
- Exportação do histórico para arquivo TXT.
- Modal com informações sobre o sistema.

MELHORIAS REALIZADAS
Foi adicionado o armazenamento permanente no navegador, filtros, pesquisa, data e hora, confirmação antes de apagar e exportação do histórico.

DIFICULDADES ENCONTRADAS
A principal dificuldade foi salvar e recuperar uma lista de atividades no localStorage. Para isso, foram usados JSON.stringify() e JSON.parse().

REFERÊNCIAS
- Material da atividade PEND2 - Central de Notificações Inteligente 2.0.
- https://developer.mozilla.org/pt-BR/docs/Web/API/Window/localStorage
- https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/JSON
- https://getbootstrap.com/docs/5.3/

COMO EXECUTAR
Abra o arquivo index.html em um navegador com acesso à internet para carregar o Bootstrap.
