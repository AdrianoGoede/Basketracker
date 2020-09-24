const AlternarPaginaConsultaMinMax = () => {
    ObterMinMax();
    $("#MenuConsultaMinMax").fadeToggle(0);
}

const ObterMinMax = () => {
    $("#NumMin").html(MinimoTemp);
    $("#NumMax").html(MaximoTemp);
}

$("#VoltarConsultaMinMax").click(() => {
    AlternarPaginaConsultaMinMax();
    $("title").html("Consulta");
    AlternarElemsPaginaConsulta();
});