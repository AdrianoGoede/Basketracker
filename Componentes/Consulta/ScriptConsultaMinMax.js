const AlternarPaginaConsultaMinMax = () => {
    $("#MenuConsultaMinMax").fadeToggle(0);
}

$("#VoltarConsultaMinMax").click(() => {
    AlternarPaginaConsultaMinMax();
    $("title").html("Consulta");
    AlternarElemsPaginaConsulta();
});