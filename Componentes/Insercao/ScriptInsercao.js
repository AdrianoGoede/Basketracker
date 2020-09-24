const DisplayPaginaInsercao = () => {
    $(".PapelCaneta").fadeToggle(1200);
    $("#MenuInsercao").fadeToggle(1100);
    $(".TextoPontuacao").fadeToggle(1000);
    $(".Campo").fadeToggle(800);
    $(".BotaoInserir").fadeToggle(500);
    $("#VoltarInsercao").fadeToggle(300);
}

$("#VoltarInsercao").click(() => {
    DisplayPaginaInsercao();
    DisplayPaginaPrincipal();
    $("title").html("Bem Vindo(a)!");
});

$("#Dado").keypress((e) => {
    e.preventDefault();
    if ("0123456789".includes(e.key))
        Dado.value += e.key;
});

$("#BtInserir").click(() => {
    if (Dado.value != "") {
        const dado = parseInt(Dado.value);
        if (dado > 1000) {
            alert("Entrada inválida, Deve ser um número de 0 à 1000!");
            Dado.value = "";
            return;
        }
        AddEntrada(dado);
        alert(`Pontuação [${dado}] inserida com sucesso!`);
        Dado.value = "";
    }
    else
        alert("Nenhum valor informado!");
});