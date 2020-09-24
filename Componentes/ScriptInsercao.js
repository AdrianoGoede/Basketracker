const DisplayPaginaInsercao = () => {
    $(".PapelCaneta").fadeToggle(1200);
    $(".TextoPontuacao").fadeToggle(1000);
    $(".Campo").fadeToggle(800);
    $(".BotaoInserir").fadeToggle(500);
    $("#Voltar").fadeToggle(300);
}

$("#Voltar").click(() => {
    DisplayPaginaInsercao();
    DisplayPaginaPrincipal();
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
        console.log(dado);
    }
    else
        alert("Nenhum valor informado!");
});