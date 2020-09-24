const AlternarPaginaConsultaNumero = () => {
    $("#MenuConsultaNumero").fadeToggle(0);
}

$("#NumeroConsulta").keypress((e) => {
    e.preventDefault();
    if ("0123456789".includes(e.key))
    NumeroConsulta.value += e.key;
});

$("#VoltarConsultaNumero").click(() => {
    AlternarPaginaConsultaNumero();
    $("title").html("Consulta");
    AlternarElemsPaginaConsulta();
});