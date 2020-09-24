const DisplayPaginaPrincipal = () => {
    $("#Inicio").fadeToggle(1200);
    $(".Texto").fadeToggle(1000);
    $(".Botao").fadeToggle(800);
    $("#Sobre").fadeToggle(500);
}

window.onload = () => {
    DisplayPaginaPrincipal();
    // DisplayPaginaInsercao();
}

$("#Sobre").click(() => {
    alert("Desenvolvido por Adriano Andrei Goede\n\n         Microsoft Visual Studio Code\n\n             Debian 10.5 GNU/Linux");
});

$("#Inserir").click(() => {
    DisplayPaginaPrincipal();
    DisplayPaginaInsercao();
    $("title").html("Inserir Dados");
});

$("#Consultar").click(() => {
    DisplayPaginaPrincipal();
    DisplayPaginaConsulta();
    $("title").html("Consultar Dados");
});