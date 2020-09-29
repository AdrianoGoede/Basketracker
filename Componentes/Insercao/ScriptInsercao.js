// Funções de configuração da página:

let ConfigTeclasInserc = false;

const AlternarPaginaInsercao = () => {
    $("#Insercao").fadeToggle(500);
    SetarTeclasInserc();
    $("#Dado").focus();
}

$("#Dado").keypress((e) => {
    e.preventDefault();
    if ("0123456789".includes(e.key))
        Dado.value += e.key;
});

const SetarTeclasInserc = () => {
    if (!ConfigTeclasInserc) {
        $(document).keypress((e) => {
            e.preventDefault();
            if (e.keyCode == 13)
                if (Dado.value != "")
                    $("#BtInserir").click();
                else
                    $("#VoltarInsercao").click();
        });
    }
    else
        $(document).off("keypress");
    ConfigTeclasInserc = !ConfigTeclasInserc;
}

// Configuração dos botões:

$("#BtInserir").click(() => {
    if (Dado.value != "") {
        const dado = parseInt(Dado.value);
        if (dado < 0 || dado > 1000) {
            alert("Entrada inválida, Deve ser um número de 0 à 1000!");
            Dado.value = "";
            return;
        }
        AddEntrada(dado);
        alert(`Pontuação [${dado}] inserida com sucesso!`);
        Dado.value = "";
    }
});

$("#VoltarInsercao").click(() => {
    AlternarPaginaInsercao();
    CalcularRecordes();
    Dado.value = "";
    $("title").html("Bem Vindo(a)!");
    AlternarPaginaInicio();
});