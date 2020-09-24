const AlternarPaginaInicio = () => {
    $("#Inicio").fadeToggle(500);
}

window.onload = () => {
    AlternarPaginaInicio();
}

$("#Sobre").click(() => {
    $("title").html("!!! Sobre !!!");
    alert("Desenvolvido por Adriano Andrei Goede\n\n         Microsoft Visual Studio Code\n\n             Debian 10.5 GNU/Linux");
    $("title").html("Bem Vindo(a)!");
});

$("#Inserir").click(() => {
    AlternarPaginaInicio();
    $("title").html("Inserção de Dados");
    AlternarPaginaInsercao();
});

$("#Consultar").click(() => {
    AlternarPaginaInicio();
    $("title").html("Consulta");
    AlternarPaginaConsulta();
});