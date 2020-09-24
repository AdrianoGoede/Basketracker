const DisplayPaginaPrincipal = () => {
    $("#Inicio").fadeToggle(1200);
    $(".Texto").fadeToggle(1000);
    $(".Botao").fadeToggle(800);
    $("#Sobre").fadeToggle(500);
}

window.onload = () => {
    DisplayPaginaPrincipal();
}

$("#Sobre").click(() => {
    alert("Desenvolvido por Adriano Andrei Goede");
});

$("#Inserir").click(() => {
    DisplayPaginaPrincipal();
    DisplayPaginaInsercao();
});

$("#Consultar").click(() => {
    // DisplayPaginaPrincipal();
});