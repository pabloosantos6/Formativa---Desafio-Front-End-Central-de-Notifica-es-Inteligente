const toast = new bootstrap.Toast(document.getElementById("meuToast"), {
    autohide: true,
    delay: 5000
});

let atividades = JSON.parse(localStorage.getItem("historicoAtividades")) || [];

function salvarHistorico() {
    localStorage.setItem("historicoAtividades", JSON.stringify(atividades));
}

function mostrarToast(titulo, mensagem, tipo) {
    document.getElementById("tituloToast").textContent = titulo;
    document.getElementById("textoToast").textContent = mensagem;
    toast.show();

    adicionarHistorico(mensagem, tipo);
}

function adicionarHistorico(mensagem, tipo) {
    const atividade = {
        mensagem: mensagem,
        tipo: tipo,
        data: new Date().toLocaleString("pt-BR")
    };

    atividades.unshift(atividade);
    salvarHistorico();
    mostrarHistorico();
}

function mostrarHistorico() {
    const lista = document.getElementById("historico");
    const categoria = document.getElementById("filtroCategoria").value;
    const pesquisa = document.getElementById("pesquisa").value.toLowerCase();

    lista.innerHTML = "";

    const filtradas = atividades.filter(function(item) {
        const combinaCategoria = categoria === "todas" || item.tipo === categoria;
        const combinaPesquisa = item.mensagem.toLowerCase().includes(pesquisa);
        return combinaCategoria && combinaPesquisa;
    });

    document.getElementById("contador").textContent = atividades.length;

    if (filtradas.length === 0) {
        const vazio = document.createElement("li");
        vazio.className = "list-group-item text-center text-secondary";
        vazio.textContent = atividades.length === 0
            ? "Nenhuma atividade realizada ainda."
            : "Nenhuma atividade encontrada para esse filtro.";
        lista.appendChild(vazio);
        return;
    }

    filtradas.forEach(function(item) {
        const li = document.createElement("li");
        li.className = "list-group-item";

        const topo = document.createElement("div");
        topo.className = "d-flex justify-content-between flex-wrap gap-2";

        const mensagem = document.createElement("strong");
        mensagem.textContent = item.mensagem;

        const etiqueta = document.createElement("span");
        etiqueta.className = "badge " + classeTipo(item.tipo);
        etiqueta.textContent = nomeTipo(item.tipo);

        const data = document.createElement("small");
        data.className = "text-secondary d-block mt-2";
        data.textContent = item.data;

        topo.appendChild(mensagem);
        topo.appendChild(etiqueta);
        li.appendChild(topo);
        li.appendChild(data);
        lista.appendChild(li);
    });
}

function classeTipo(tipo) {
    if (tipo === "cadastro") return "text-bg-success";
    if (tipo === "seguranca") return "text-bg-warning";
    return "text-bg-primary";
}

function nomeTipo(tipo) {
    if (tipo === "cadastro") return "Cadastro";
    if (tipo === "seguranca") return "Segurança";
    return "Atualização";
}

function limparHistorico() {
    atividades = [];
    localStorage.removeItem("historicoAtividades");
    mostrarHistorico();

    bootstrap.Modal.getInstance(document.getElementById("modalLimpar")).hide();

    document.getElementById("tituloToast").textContent = "Histórico limpo";
    document.getElementById("textoToast").textContent = "Todas as atividades foram apagadas.";
    toast.show();
}

document.getElementById("cadastro").addEventListener("click", function() {
    mostrarToast("Cadastro realizado", "O usuário foi cadastrado com sucesso.", "cadastro");
});

document.getElementById("acesso").addEventListener("click", function() {
    mostrarToast("Atenção à segurança", "Verifique suas credenciais de acesso.", "seguranca");
});

document.getElementById("sistema").addEventListener("click", function() {
    mostrarToast("Sistema atualizado", "Nenhuma atualização pendente foi encontrada.", "atualizacao");
});

document.getElementById("filtroCategoria").addEventListener("change", mostrarHistorico);
document.getElementById("pesquisa").addEventListener("input", mostrarHistorico);

document.getElementById("confirmar").addEventListener("click", limparHistorico);

document.getElementById("exportar").addEventListener("click", function() {
    if (atividades.length === 0) {
        document.getElementById("tituloToast").textContent = "Histórico vazio";
        document.getElementById("textoToast").textContent = "Não existem atividades para exportar.";
        toast.show();
        return;
    }

    const texto = atividades.map(function(item) {
        return item.data + " - " + nomeTipo(item.tipo) + ": " + item.mensagem;
    }).join("\n");

    const arquivo = new Blob([texto], { type: "text/plain;charset=utf-8" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(arquivo);

    link.href = url;
    link.download = "historico-notificacoes.txt";
    link.click();

    URL.revokeObjectURL(url);
});

mostrarHistorico();
