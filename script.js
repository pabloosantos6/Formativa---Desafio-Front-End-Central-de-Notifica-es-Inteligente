const toast = new bootstrap.Toast(document.getElementById("meuToast"), {
    autohide: true,
    delay: 5000
});

let quantidade = 0;

function mostrarToast(titulo, mensagem, atividade) {
    document.getElementById("tituloToast").textContent = titulo;
    document.getElementById("textoToast").textContent = mensagem;
    toast.show();
    adicionarHistorico(atividade);
}

function adicionarHistorico(atividade) {
    const historico = document.getElementById("historico");
    const vazio = document.getElementById("vazio");

    if (vazio) {
        vazio.remove();
    }

    const item = document.createElement("li");
    item.className = "list-group-item";
    item.textContent = atividade;
    historico.appendChild(item);

    quantidade++;
    document.getElementById("contador").textContent = quantidade;
}

function limparHistorico() {
    document.getElementById("historico").innerHTML =
        '<li class="list-group-item" id="vazio">Nenhuma atividade realizada.</li>';
    quantidade = 0;
    document.getElementById("contador").textContent = quantidade;
}

document.getElementById("cadastro").addEventListener("click", function() {
    mostrarToast("Cadastro realizado", "O usuário foi cadastrado com sucesso.", "Cadastro realizado com sucesso.");
});

document.getElementById("acesso").addEventListener("click", function() {
    mostrarToast("Atenção à segurança", "Verifique suas credenciais de acesso.", "Verificação de segurança executada.");
});

document.getElementById("sistema").addEventListener("click", function() {
    mostrarToast("Sistema atualizado", "Nenhuma atualização pendente foi encontrada.", "Consulta de atualizações realizada.");
});

document.getElementById("limpar").addEventListener("click", limparHistorico);

document.getElementById("confirmar").addEventListener("click", function() {
    limparHistorico();
    bootstrap.Modal.getInstance(document.getElementById("modalLimpar")).hide();
});