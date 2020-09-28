let ConfigTeclasConsultaMinMax = false;

const AlternarPaginaConsultaMinMax = () => {
    ObterMinMax();
    $("#MenuConsultaMinMax").fadeToggle(0);
    SetarTeclasConsultaMinMax();
}

const SetarTeclasConsultaMinMax = () => {
    if (!ConfigTeclasConsultaMinMax) {
        $(document).keypress((e) => {
            e.preventDefault();
            if (e.keyCode == 13)
                $("#VoltarConsultaMinMax").click();
        });
    }
    else
        $(document).off("keypress");
    ConfigTeclasConsultaMinMax = !ConfigTeclasConsultaMinMax;
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