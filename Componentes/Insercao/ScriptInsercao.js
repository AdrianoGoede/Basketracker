const AlternarPaginaInsercao = () => {
    $("#Insercao").fadeToggle(500);
}

$("#VoltarInsercao").click(() => {
    AlternarPaginaInsercao();
    $("title").html("Bem Vindo(a)!");
    AlternarPaginaInicio();
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