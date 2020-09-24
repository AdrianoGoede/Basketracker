const DisplayPaginaConsulta = () => {
    $("#Consulta").fadeToggle(1200);
    $(".bd").fadeToggle(1000);
    $("#Menu").fadeToggle(800);
    $(".TextoPergunta").fadeToggle(600);
    $(".BotaoPergunta").fadeToggle(400);
    $("#VoltarConsulta").fadeToggle(200);
}

$("#VoltarConsulta").click(() => {
    DisplayPaginaConsulta();
    DisplayPaginaPrincipal();
    $("title").html("Bem Vindo(a)!");
});